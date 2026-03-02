"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Admissions({
  initialAdmissions = [],
  initialTotalPages = 1,
}) {
  const [admissions, setAdmissions] = useState(initialAdmissions);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialTotalPages);

  const perPage = 10;

  useEffect(() => {
    if (page === 1) return;

    setLoading(true);

    fetch(
      `https://api.sarkariresult6.com/wp-json/wp/v2/admissions?per_page=${perPage}&page=${page}&orderby=date&order=desc&_fields=id,slug,title`
    )
      .then((res) => {
        setTotalPages(Number(res.headers.get("X-WP-TotalPages") || 1));
        return res.json();
      })
      .then((data) => {
        setAdmissions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page]);

  return (
    <div className="site-container py-6">

      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-bold text-red-700 text-center mb-6">
        Latest Admissions 2026
      </h1>

      {/* BOX CONTAINER */}
      <div className="border border-gray-400 rounded shadow-sm overflow-hidden max-w-3xl mx-auto">

        {/* RED HEADER BAR */}
        <div className="bg-red-700 text-white font-semibold text-center py-3 text-base md:text-lg">
          Admission Name
        </div>

        {/* LIST BODY */}
        {loading ? (
          <div className="py-10 text-center">Loading...</div>
        ) : admissions.length === 0 ? (
          <div className="py-10 text-center">No admissions found.</div>
        ) : (
          admissions.map((item) => (
            <div
              key={item.id}
              className="border-t text-center py-4 hover:bg-gray-50 transition"
            >
              <Link
                href={`/admission/${item.slug}`}
                className="text-blue-700 hover:underline font-medium"
              >
                {item.title.rendered}
              </Link>
            </div>
          ))
        )}
      </div>

      {/* PAGINATION */}
      {!loading && admissions.length > 0 && (
        <div className="flex justify-between items-center mt-8 max-w-3xl mx-auto">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 text-sm font-medium"
          >
            ← Previous
          </button>

          <span className="font-semibold text-gray-700 text-sm">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() =>
              setPage((p) => (p < totalPages ? p + 1 : p))
            }
            disabled={page >= totalPages}
            className="px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 text-sm font-medium"
          >
            Next →
          </button>
        </div>
      )}

    </div>
  );
}