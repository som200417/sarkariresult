"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* Skeleton */
function SkeletonTableRow() {
  return (
    <tr className="animate-pulse">
      <td className="border px-3 py-4">
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </td>
      <td className="border px-3 py-4">
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </td>
      <td className="border px-3 py-4 text-center">
        <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
      </td>
      <td className="border px-3 py-4 text-center">
        <div className="h-4 bg-gray-300 rounded w-32 mx-auto"></div>
      </td>
      <td className="border px-3 py-4 text-center">
        <div className="h-6 bg-gray-300 rounded w-24 mx-auto"></div>
      </td>
    </tr>
  );
}

export default function AdmitCards() {
  const [admitCards, setAdmitCards] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://api.sarkariresult6.com/wp-json/wp/v2/admit-card?per_page=${perPage}&page=${page}&orderby=date&order=desc`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setAdmitCards(data);
        setLoading(false);
      })
      .catch(() => {
        setAdmitCards([]);
        setLoading(false);
      });
  }, [page]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      <h1 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 text-center md:text-left">
        Latest Admit Cards / Hall Tickets 2026
      </h1>

      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm">
        <table className="w-full table-fixed text-xs sm:text-sm md:text-base">
          <thead>
            <tr className="bg-red-700 text-white">
              <th className="border px-4 py-3 text-left font-semibold">Exam / Post Name</th>
              <th className="border px-4 py-3 text-left font-semibold">Organization / Board</th>
              <th className="border px-4 py-3 text-center font-semibold">Exam Date</th>
              <th className="border px-4 py-3 text-center font-semibold">Status</th>
              <th className="border px-4 py-3 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              [...Array(perPage)].map((_, i) => (
                <SkeletonTableRow key={i} />
              ))
            ) : admitCards.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-10 text-gray-600 font-medium">
                  No admit cards available right now. Check back soon!
                </td>
              </tr>
            ) : (
              admitCards.map((card) => {
                const acf = card.acf || {};
                const status =
                  acf.status ||
                  (acf.download_link ? "Available" : "Not Released");

                return (
                  <tr
                    key={card.id}
                    className="hover:bg-gray-50 transition border-b last:border-b-0"
                  >
                    <td className="border px-4 py-3 font-medium">
                      <Link
                        href={`/admit-card/${card.slug}`}
                        className="text-blue-700 hover:underline hover:text-blue-900"
                      >
                        {card.title.rendered}
                      </Link>
                    </td>
                    <td className="border px-4 py-3">
                      {acf.organization || acf.board || "—"}
                    </td>
                    <td className="border px-4 py-3 text-center">
                      {acf.exam_date || "—"}
                    </td>
                    <td className="border px-4 py-3 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          status === "Available"
                            ? "bg-green-100 text-green-800"
                            : status.includes("Not Released")
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="border px-4 py-3 text-center">
                      <Link
                        href={`/admit-card/${card.slug}`}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded text-sm font-medium inline-block transition"
                      >
                        Click
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {!loading && admitCards.length > 0 && (
        <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 transition font-medium"
          >
            ← Previous
          </button>

          <span className="font-semibold text-gray-700">
            Page {page}
          </span>

          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded transition font-medium"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}