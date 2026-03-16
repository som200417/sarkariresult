import { formatText } from "@/utils/formatText";

export default function FAQTable({ title, acf }) {

  const raw = acf?.faq || "";

  const lines = raw
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);

  const rows = [];
  let question = "";

  lines.forEach((line) => {

    if (line.toLowerCase().startsWith("question:")) {
      question = line.replace(/question:/i, "").trim();
    }

    if (line.toLowerCase().startsWith("answer:")) {
      const answer = line.replace(/answer:/i, "").trim();

      rows.push({
        question,
        answer
      });
    }

  });

  if (!rows.length) return null;

  return (
    <div className="my-6">
      <table className="w-full border border-black text-sm">

        <thead>
          <tr className="bg-blue-900 text-white text-center font-bold">
            <th className="border border-black p-2">
              {formatText(title || "Important Question")}
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td className="border border-black p-2">
                • <strong>Question:</strong> {formatText(row.question)}
                <br />
                • <strong>Answer:</strong> {formatText(row.answer)}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}