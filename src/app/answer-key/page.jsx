import AnswerKeys from "@/ui/AnswerKeys";

const API = "https://api.sarkariresult6.com/wp-json/wp/v2/answer_keys";

export const dynamic = "force-dynamic";

async function getAnswerKeys() {

  const res = await fetch(
    `${API}?orderby=date&order=desc&per_page=20`,
    {
      cache: "no-store"
    }
  );

  if (!res.ok) return [];

  return res.json();

}

export default async function Page() {

  const answerKeys = await getAnswerKeys();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      <AnswerKeys keys={answerKeys} />

    </div>
  );

}