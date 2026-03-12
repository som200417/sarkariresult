import fs from "fs/promises";
import path from "path";
import Admissions from "@/ui/Admissions";

export const revalidate = 60;
export const dynamic = "force-static";

export const metadata = {
  title: "Latest Admissions 2026 – Sarkari Result",
  description:
    "Latest government and university admissions 2026 with last date, status and details.",
};

async function getAdmissions(page = 1) {
  try {

    const filePath = path.join(
      process.cwd(),
      "public/data/admissions.json"
    );

    const file = await fs.readFile(filePath, "utf8");

    const allData = JSON.parse(file) || [];

    const perPage = 10;

    const start = (page - 1) * perPage;

    const paginated = allData.slice(start, start + perPage);

    const totalPages = Math.ceil(allData.length / perPage);

    return {
      data: paginated,
      totalPages,
    };

  } catch (error) {

    console.error("Admissions JSON error:", error);

    return { data: [], totalPages: 1 };

  }
}

export default async function AdmissionsPage({ searchParams }) {

  const params = await searchParams;

  const page = Number(params?.page) || 1;

  const { data, totalPages } = await getAdmissions(page);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
       Admission
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
              rel="noopener noreferrer"><span className="font-semibold text-blue-700">Sarkari Result6</span></a>यह पेज भारत भर के विभिन्न विश्वविद्यालयों, कॉलेजों और सरकारी संस्थानों द्वारा जारी की गई नवीनतम एडमिशन और आवेदन फॉर्म की जानकारी प्रदान करता है। यदि आप किसी प्रवेश परीक्षा, कोर्स या सरकारी संस्थान में एडमिशन से संबंधित नोटिफिकेशन की जानकारी ढूंढ रहे हैं, तो हम समय-समय पर नवीनतम अपडेट प्रदान करते हैं ताकि छात्रों को महत्वपूर्ण तिथियों और पात्रता की सही जानकारी मिल सके।
          </li>
        </ul>

      </div>

    <Admissions
      admissions={data}
      page={page}
      totalPages={totalPages}
    />
    </div>
  );
}