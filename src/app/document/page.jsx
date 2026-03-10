import Documents from "@/ui/Documents";

const API = "https://api.sarkariresult6.com/wp-json/wp/v2/documents";

export const revalidate = 300;
export const dynamic = "force-static";

export const metadata = {
  title: "Latest Documents – Sarkari Result",
  description:
    "Download latest government documents, notices and official PDFs.",
  alternates: {
    canonical: "https://sarkariresult6.com/documents",
  },
};

async function getDocuments() {
  const res = await fetch(
    `${API}?orderby=date&order=desc&per_page=20&_fields=id,slug,title.rendered`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) return [];

  return res.json();
}

export default async function DocumentsPage() {
  const docs = await getDocuments();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      <Documents docs={docs} />

    </div>
  );
}