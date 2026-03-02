import Link from "next/link";

export default function LatestJobs({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  return (
    <div className="border border-red-700 bg-white">
      {/* HEADER */}
      <div className="bg-red-700 text-white text-center font-bold py-2">
        Latest Jobs
      </div>

      {/* LIST */}
      <ul className="list-disc list-outside px-3 py-2 pl-6 text-sm space-y-1">
        {data.map((job) => (
          <li key={job.id}>
            <Link
              href={`/latest-jobs/${job.slug}`}
              className="text-blue-700 hover:underline"
            >
              {job.title}
            </Link>{" "}
            <span className="text-red-600 font-semibold">
              – {job.acf?.status || "Out"}
            </span>
          </li>
        ))}
      </ul>

      {/* VIEW MORE */}
      <div className="text-right px-3 py-2 border-t">
        <Link
          href="/latest-jobs"
          className="text-blue-700 font-semibold hover:underline"
        >
          View More →
        </Link>
      </div>
    </div>
  );
}