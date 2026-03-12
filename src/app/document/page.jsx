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

      <AnswerKeys keys={answerKeys} />

    </div>
  );

}