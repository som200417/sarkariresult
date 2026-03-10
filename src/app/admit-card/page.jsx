import AdmitCards from "@/ui/AdmitCard";
import Pagination from "@/components/Pagination";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Latest Admit Cards 2026 | Sarkari Result",
  description:
    "Download latest Admit Cards, Hall Tickets and Exam Dates for all Sarkari Exams 2026.",
  alternates: {
    canonical: "https://sarkariresult6.com/admit-card",
  },
};

async function getAdmitCards(page = 1) {

  const res = await fetch(
    `https://api.sarkariresult6.com/wp-json/wp/v2/admit-card?per_page=10&page=${page}&_fields=id,slug,title,acf`,
    {
      next: { revalidate: 300 }
    }
  );

  const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;

  const admitCards = await res.json();

  return { admitCards, totalPages };
}

export default async function Page({ searchParams }) {

  const params = await searchParams;
  const page = Number(params?.page) || 1;

  const { admitCards, totalPages } = await getAdmitCards(page);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      <h1 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 text-center md:text-left">
        Latest Admit Cards / Hall Tickets 2026
      </h1>

      <AdmitCards cards={admitCards} />

      <Pagination page={page} totalPages={totalPages} />

    </div>
  );
}