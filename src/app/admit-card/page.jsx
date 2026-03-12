import fs from "fs/promises";
import path from "path";
import AdmitCards from "@/ui/AdmitCard";
import Pagination from "@/components/Pagination";

export const revalidate = 300;
export const dynamic = "force-static";

export const metadata = {
  title: "Latest Admit Cards 2026 | Sarkari Result",
  description:
    "Download latest Admit Cards, Hall Tickets and Exam Dates for all Sarkari Exams 2026.",
  alternates: {
    canonical: "https://sarkariresult6.com/admit-card",
  },
};

async function getAdmitCards(page = 1) {
  try {

    const filePath = path.join(
      process.cwd(),
      "public/data/admit-cards.json"
    );

    const file = await fs.readFile(filePath, "utf8");

    const allCards = JSON.parse(file) || [];

    const perPage = 10;

    const start = (page - 1) * perPage;

    const admitCards = allCards.slice(start, start + perPage);

    const totalPages = Math.ceil(allCards.length / perPage);

    return { admitCards, totalPages };

  } catch (err) {

    console.error("Admit Cards JSON error:", err);

    return { admitCards: [], totalPages: 1 };

  }
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