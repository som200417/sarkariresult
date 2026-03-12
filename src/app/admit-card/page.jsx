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
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        Admit Card
      </h1>

      {/* INTRO TEXT */}
      <div className="text-sm md:text-base leading-relaxed text-gray-900 mb-6 space-y-3">

        <p>
          Welcome to <a href="/" target="_blank"
            rel="noopener noreferrer"><span className="font-semibold text-blue-700">Sarkari Result6</span></a>.
          Stay informed about the Admit Cards of various competitive exams conducted by government bodies across India. Whether you are waiting for the Hall Ticket or Admit Card for a recruitment exam, entrance exam, or any other government examination, we regularly update the latest Admit Cards so that you can download them easily and stay prepared for your exam. <a href="/blog" target="_blank" rel="noopener noreferrer"><span className="text-blue-700">Let's update.</span></a>
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/" target="_blank"
              rel="noopener noreferrer"><span className="font-semibold text-blue-700">Sarkari Result6</span></a>यह पेज भारत भर में विभिन्न सरकारी विभागों और संगठनों द्वारा आयोजित परीक्षाओं के Admit Card / Hall Ticket की जानकारी प्रदान करता है। यदि आप किसी भर्ती परीक्षा, प्रवेश परीक्षा या अन्य सरकारी परीक्षा के एडमिट कार्ड का इंतजार कर रहे हैं, तो हम समय-समय पर नवीनतम Admit Card अपडेट करते रहते हैं ताकि आप आसानी से अपना एडमिट कार्ड डाउनलोड कर सकें और परीक्षा की तैयारी कर सकें।
          </li>
        </ul>

      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 text-center md:text-left">
        Latest Admit Cards / Hall Tickets 2026
      </h2>

      <AdmitCards cards={admitCards} />

      <Pagination page={page} totalPages={totalPages} />

    </div>
  );
}