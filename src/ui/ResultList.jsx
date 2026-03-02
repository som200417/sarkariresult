"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

/* Skeleton */
function SkeletonRow() {
  return (
    <tr className="animate-pulse">
      <td className="border px-4 py-4 text-center">
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
      </td>
    </tr>
  );
}

export default function Results() {
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const perPage = 10;

  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.sarkariresult6.com/wp-json/wp/v2/results?per_page=${perPage}&page=${page}&orderby=date&order=desc`
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const total = res.headers.get("X-WP-TotalPages");
        setTotalPages(Number(total));

        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error(err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [page]);

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    router.push(p === 1 ? "/results" : `/results?page=${p}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 text-center md:text-left">
        Latest Sarkari Results
      </h1>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-700 text-white">
              <th className="border px-4 py-3 text-center font-semibold">
                Result Name
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              [...Array(perPage)].map((_, i) => <SkeletonRow key={i} />)
            ) : results.length === 0 ? (
              <tr>
                <td className="border px-4 py-10 text-center text-gray-600">
                  No results available right now.
                </td>
              </tr>
            ) : (
              results.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="border px-4 py-4 text-center font-medium">
                    <Link
                      href={`/results/${item.slug}`}
                      className="text-blue-700 hover:underline hover:text-blue-900"
                    >
                      {item.title.rendered}
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {!loading && results.length > 0 && (
        <div className="flex justify-between items-center mt-8 flex-wrap gap-4">

          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed transition font-medium"
          >
            ← Previous
          </button>

          <span className="font-semibold text-gray-700">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page >= totalPages}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 transition font-medium"
          >
            Next →
          </button>

        </div>
      )}
    </div>
  );
}