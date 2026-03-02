import Documents from "@/ui/Documents";

const API =
  "https://api.sarkariresult6.com/wp-json/wp/v2/documents";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export async function generateMetadata() {
  return {
    title: "Latest Documents – Sarkari Result",
    description:
      "Download latest government documents, notices and official PDFs.",
  };
}

async function getDocuments() {
  const res = await fetch(
    `${API}?orderby=date&order=desc&_fields=id,slug,title`,
{ cache: "no-store" }
  );

  if (!res.ok) return [];

  return res.json();
}

export default async function DocumentsPage() {
  const docs = await getDocuments();

  return <Documents initialDocs={docs} />;
}