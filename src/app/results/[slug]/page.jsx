import { notFound } from "next/navigation";
import ResultDetail from "@/ui/ResultDetail";

const API = "https://api.sarkariresult6.com/wp-json/wp/v2/results";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function getResult(slug) {
  const res = await fetch(
    `https://api.sarkariresult6.com/wp-json/wp/v2/results?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.length ? data[0] : null;
}

export async function generateMetadata({ params }) {
   const { slug } = await params; 
  const post = await getResult(slug);

  if (!post) {
    return { title: "Result Not Found" };
  }

  return {
    title: post.title.rendered,
    description: post.title.rendered,
  };
}

export default async function Page({ params }) {
   const { slug } = await params; 
  const post = await getResult(slug);

  if (!post) notFound();

  return <ResultDetail post={post} />;
}