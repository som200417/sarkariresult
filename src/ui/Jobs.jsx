"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LatestJobsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page")) || 1;
  const perPage = 10;

  const [jobs, setJobs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.sarkariresult6.com/wp-json/wp/v2/jobs?per_page=${perPage}&page=${page}&_embed`
        );

        const total = res.headers.get("X-WP-TotalPages");
        setTotalPages(Number(total));

        const data = await res.json();
        setJobs(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [page]);

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    router.push(p === 1 ? "/latest-jobs" : `/latest-jobs?page=${p}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Latest Jobs
      </h1>

      {loading && <div className="text-center py-6">Loading...</div>}

      {!loading && (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-red-700 text-white">
                <th className="border px-3 py-2 text-left">Post Name</th>
                <th className="border px-3 py-2 text-left">Organization</th>
                <th className="border px-3 py-2">Last Date</th>
                <th className="border px-3 py-2">Posts</th>
                <th className="border px-3 py-2">Apply</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job.id} className="hover:bg-gray-100">
                  <td className="border px-3 py-2">
                    <Link
                      href={`/latest-jobs/${job.slug}`}
                      className="text-blue-600 hover:underline"
                    >
                      {job.title.rendered}
                    </Link>
                  </td>
                  <td className="border px-3 py-2">
                    {job.acf?.organization || "-"}
                  </td>
                  <td className="border px-3 py-2 text-center">
                    {job.acf?.last_date || "-"}
                  </td>
                  <td className="border px-3 py-2 text-center">
                    {job.acf?.total_posts || "-"}
                  </td>
                  <td className="border px-3 py-2 text-center">
                    <Link
                      href={`/latest-jobs/${job.slug}`}
                      className="bg-green-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Click
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* PAGINATION */}
      <div className="flex items-center justify-between mt-8">

        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
        >
          ← Previous
        </button>

        <span className="text-sm font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page >= totalPages}
          className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
        >
          Next →
        </button>

      </div>
    </div>
  );
}