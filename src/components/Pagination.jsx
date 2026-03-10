"use client";

import { useRouter } from "next/navigation";

export default function Pagination({ page, totalPages }) {

  const router = useRouter();

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    router.push(p === 1 ? "/latest-jobs" : `/latest-jobs?page=${p}`);
  };

  return (
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
  );
}