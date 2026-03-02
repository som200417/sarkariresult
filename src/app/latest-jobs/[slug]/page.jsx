import { notFound } from "next/navigation";
import JobSingle from "@/ui/JobSingle";

const API = "https://api.sarkariresult6.com/wp-json/wp/v2/jobs";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function getJob(slug) {
  const res = await fetch(
    `https://api.sarkariresult6.com/wp-json/wp/v2/jobs?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.length ? data[0] : null;
}

export async function generateMetadata({ params }) {

  const post = await getJob(params.slug);

  if (!post) {
    return { title: "Job Not Found" };
  }

  return {
    title: post.title.rendered,
    description: post.title.rendered,
  };
}

export default async function Page({ params }) {
  const p = await params;
  const post = await getJob(p.slug);

  if (!post) notFound();

  return <JobSingle post={post} />;
}