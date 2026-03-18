import Link from "next/link";

export default function DocumentsBox({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="border border-red-600 bg-white">
        <div className="bg-red-700 text-white text-center font-bold py-2">
          Documents
        </div>

        <ul className="list-disc list-outside px-3 py-2 pl-6 text-sm space-y-1">
          <li className="text-gray-500">No Documents Available</li>
        </ul>

        <div className="text-right px-3 py-2 border-t">
          <Link
            href="/document"
            className="text-blue-700  font-semibold hover:underline"
          >
            View More →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-red-600 bg-white">
      <div className="bg-red-700 text-white text-center font-bold py-2">
        Documents
      </div>

      <ul className="list-disc list-outside px-3 py-2 pl-6 text-sm space-y-1">
        {data.map((item) => (
          <li key={item.id}>
            <Link
              href={`/document/${item.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline visited:text-purple-700"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="text-right px-3 py-2 border-t">
        <Link
          href="/document"
          className="text-blue-700 font-semibold hover:underline "
        >
          View More →
        </Link>
      </div>
    </div>
  );
}