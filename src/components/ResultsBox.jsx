import Link from "next/link";

export default function ResultsBox({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  return (
    <div className="border border-red-700 bg-white">
      <div className="bg-red-700 text-white text-center font-bold py-2">
        Results
      </div>

      <ul className="list-disc list-outside px-3 py-2 pl-6 text-sm space-y-1">
        {data.map((item) => (
          <li key={item.id}>
            <Link
              href={`/results/${item.slug}`}
              className="text-blue-700 hover:underline"
            >
              {item.title}
            </Link>{" "}
            <span className="text-red-600 font-semibold">– Out</span>
          </li>
        ))}
      </ul>

      <div className="text-right px-3 py-2 border-t">
        <Link
          href="/results"
          className="text-blue-700 font-semibold hover:underline"
        >
          View More →
        </Link>
      </div>
    </div>
  );
}