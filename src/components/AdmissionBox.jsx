import Link from "next/link";

export default function AdmissionBox({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="border border-red-600 bg-white flex flex-col">
        <div className="bg-red-700 text-white text-center font-bold py-2">
          Admission
        </div>

        <ul className="list-disc list-outside px-3 py-2 pl-6 text-sm space-y-1">
          <li className="text-gray-500">No Admission Available</li>
        </ul>

        <div className="text-right px-3 py-2 border-t">
          <Link
            href="/admission"
            className="text-blue-700 font-semibold hover:underline"
          >
            View More →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-red-600 bg-white flex flex-col">
      <div className="bg-red-700 text-white text-center font-bold py-2">
        Admission
      </div>

      <ul className="list-disc list-outside px-3 py-2 pl-6 text-sm space-y-1">
        {data.map((item) => (
          <li key={item.id}>
            <Link
              href={`/admission/${item.slug}`}
              className="text-blue-700 hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* View More Bottom Right */}
      <div className="text-right px-3 py-2 border-t">
        <Link
          href="/admission"
          className="text-blue-700 font-semibold hover:underline"
        >
          View More →
        </Link>
      </div>
    </div>
  );
}