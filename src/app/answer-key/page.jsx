import AnswerKeys from "@/ui/AnswerKeys";

export const metadata = {
  title: "Latest Answer Keys 2026 – Sarkari Result",
  description:
    "Download latest exam answer keys 2026. SSC, UPSC, Railway, Police and all government exams answer keys.",
  keywords: [
    "Answer Key 2026",
    "Latest Answer Keys",
    "Sarkari Result Answer Key",
    "SSC Answer Key",
    "Government Exam Answer Key",
  ],
  alternates: {
    canonical: "https://sarkariresult6.com/answer-keys",
  },
};

export default function AnswerKeysPage() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-red-700 text-center mt-6">
        Latest Answer Keys
      </h1>

      <AnswerKeys />
    </>
  );
}