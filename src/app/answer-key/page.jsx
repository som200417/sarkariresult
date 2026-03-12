import fs from "fs/promises";
import path from "path";
import AnswerKeys from "@/ui/AnswerKeys";

export const revalidate = 300;
export const dynamic = "force-static";

export const metadata = {
  title: "Latest Answer Keys 2026 | Sarkari Result",
  description:
    "Download latest answer keys for SSC, UPSC, Railway, Bank and other government exams.",
  alternates: {
    canonical: "https://sarkariresult6.com/answer-key",
  },
};

async function getAnswerKeys() {
  try {

    const filePath = path.join(
      process.cwd(),
      "public/data/answer-keys.json"
    );

    const file = await fs.readFile(filePath, "utf8");

    const answerKeys = JSON.parse(file) || [];

    return answerKeys;

  } catch (err) {

    console.error("Answer Keys JSON error:", err);

    return [];

  }
}

export default async function Page() {

  const answerKeys = await getAnswerKeys();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
     Answer Key
    </h1>

    {/* INTRO TEXT */}
    <div className="text-sm md:text-base leading-relaxed text-gray-900 mb-6 space-y-3">

      <p>
        Welcome to <a href="/"target="_blank"
              rel="noopener noreferrer"><span className="font-semibold text-blue-700">Sarkari Result6</span></a>. 
       Stay informed about the Answer Keys of various competitive exams conducted by government bodies across India. Whether you are waiting for the Answer Key of any recruitment exam, entrance exam, or other government examination, we update the latest Answer Keys from time to time so that you can quickly check your responses and stay updated with the official information. <a href="/blog" target="_blank" rel="noopener noreferrer"><span className="text-blue-700">Let's update.</span></a>
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a href="/"target="_blank"
              rel="noopener noreferrer"><span className="font-semibold text-blue-700">Sarkari Result6</span></a> यह पेज भारत भर में विभिन्न सरकारी विभागों द्वारा जारी किए गए महत्वपूर्ण दस्तावेज़, नोटिस और आधिकारिक पीडीएफ की जानकारी प्रदान करता है। यदि आप किसी भर्ती, परीक्षा या सरकारी प्रक्रिया से जुड़े दस्तावेज़ खोज रहे हैं, तो हम आपको नवीनतम अपडेट समय-समय पर उपलब्ध कराते हैं ताकि आपको सही जानकारी जल्दी मिल सके।
              </li>
      </ul>

    </div>
      <AnswerKeys keys={answerKeys} />

    </div>
  );

}