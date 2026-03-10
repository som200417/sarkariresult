"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Admissions({ admissions = [], page = 1, totalPages = 1 }) {

  const router = useRouter();

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    router.push(p === 1 ? "/admissions" : `/admissions?page=${p}`);
  };

  return (
    <div className="site-container py-6">

      <h1 className="text-2xl md:text-3xl font-bold text-red-700 text-center mb-6">
        Latest Admissions 2026
      </h1>

      <div className="border border-gray-400 rounded shadow-sm overflow-hidden max-w-3xl mx-auto">

        <div className="bg-red-700 text-white font-semibold text-center py-3 text-base md:text-lg">
          Admission Name
        </div>

        {admissions.length === 0 ? (
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

      {admissions.length > 0 && (
        <div className="flex justify-between items-center mt-8 max-w-3xl mx-auto">

          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 text-sm font-medium"
          >
            ← Previous
          </button>

          <span className="font-semibold text-gray-700 text-sm">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => goToPage(page + 1)}
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