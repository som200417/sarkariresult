import { notFound } from "next/navigation";
import DocumentDetail from "@/ui/DocumentDetail";

const API = "https://api.sarkariresult6.com/wp-json/wp/v2/documents";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function getDocument(slug) {
  const res = await fetch(
    `https://api.sarkariresult6.com/wp-json/wp/v2/documents?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.length ? data[0] : null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params; 
  const post = await getDocument(slug);

  if (!post) {
    return { title: "Document Not Found" };
  }

  return {
    title: post.title.rendered,
    description: post.title.rendered,
  };
}

export default async function DocumentPage({ params }) {
  const { slug } = await params; 
  const post = await getDocument(slug);

  if (!post) notFound();

  return <DocumentDetail post={post} />;
}