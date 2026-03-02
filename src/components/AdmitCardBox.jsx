import Link from "next/link";

export default function AdmitCardBox({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  return (
    <div className="border border-red-700 bg-white flex flex-col">
      <div className="bg-red-700 text-white text-center font-bold py-2">
        Admit Card
      </div>

      <ul className="list-disc list-outside px-3 py-2 pl-6 text-sm space-y-1">
        {data.map((item) => (
          <li key={item.id}>
            <Link
              href={`/admit-card/${item.slug}`}
              className="text-blue-700 hover:underline"
            >
              {item.title}
            </Link>{" "}
            <span className="text-red-600 font-semibold">
              – Available
            </span>
          </li>
        ))}
      </ul>

      {/* View More Bottom Right */}
      <div className="text-right px-3 py-2 border-t">
        <Link
          href="/admit-card"
          className="text-blue-700 font-semibold hover:underline"
        >
          View More →
        </Link>
      </div>
    </div>
  );
}