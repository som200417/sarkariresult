import { notFound } from "next/navigation";
import AdmitCardDetail from "@/ui/AdmitCardDetail";

const API = "https://api.sarkariresult6.com/wp-json/wp/v2/admit-card";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function getAdmitCard(slug) {
  const res = await fetch(
    `https://api.sarkariresult6.com/wp-json/wp/v2/admit-card?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.length ? data[0] : null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ IMPORTANT

  const post = await getAdmitCard(slug);
  if (!post) {
    return { title: "Admit Card Not Found" };
  }

  return {
    title: post.title.rendered,
    description: post.title.rendered,
  };
}

export default async function Page({ params }) {
  const { slug } = await params; // ✅ IMPORTANT

  const post = await getAdmitCard(slug);
  if (!post) notFound();

  return <AdmitCardDetail post={post} />;
}