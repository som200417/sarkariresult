import { notFound } from "next/navigation";
import AdmissionDetail from "@/ui/AdmissionDetail";

const API = "https://api.sarkariresult6.com/wp-json/wp/v2";


export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
;
async function getAdmission(slug) {
  const res = await fetch(
    `https://api.sarkariresult6.com/wp-json/wp/v2/admissions?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.length ? data[0] : null;
}

export async function generateMetadata({ params }) {
  const post = await getAdmission(params.slug);

  if (!post) {
    return { title: "Admission Not Found" };
  }

  return {
    title: post.title.rendered,
    description: post.title.rendered,
  };
}

export default async function AdmissionPage({ params }) {
  const post = await getAdmission(params.slug);

  if (!post) notFound();

  return <AdmissionDetail post={post} />;
}