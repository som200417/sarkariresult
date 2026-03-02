import Link from "next/link";

export default function AnswerKeyBox({ data }) {
  const items = Array.isArray(data) ? data : [];

  return (
    <div className="border border-red-600 bg-white flex flex-col">
      <div className="bg-red-700 text-white text-center font-bold py-2">
        Answer Key
      </div>

      <ul className="list-disc list-outside px-3 py-2 pl-6 text-sm space-y-1">
        {items.length === 0 && (
          <li className="text-gray-500">No Answer Key Available</li>
        )}

        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`/answer-key/${item.slug}`}
              className="text-blue-700 hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="text-right px-3 py-2 border-t">
        <Link
          href="/answer-key"
          className="text-blue-700 font-semibold hover:underline"
        >
          View More →
        </Link>
      </div>
    </div>
  );
}