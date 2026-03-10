"use client";

import { useRouter } from "next/navigation";

export default function ResultsPagination({ page, totalPages }) {

  const router = useRouter();

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    router.push(p === 1 ? "/results" : `/results?page=${p}`);
  };

  return (
    <div className="flex justify-between items-center mt-8 flex-wrap gap-4">

      <button
        onClick={() => goToPage(page - 1)}
        disabled={page === 1}
        className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
      >
        ← Previous
      </button>

      <span className="font-semibold text-gray-700">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => goToPage(page + 1)}
        disabled={page >= totalPages}
        className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        Next →
      </button>

    </div>
  );
}