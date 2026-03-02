"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function SkeletonRow() {
  return (
    <tr className="animate-pulse">
      <td className="border px-4 py-4 text-center">
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
      </td>
    </tr>
  );
}

export default function AnswerKeys() {
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.sarkariresult6.com/wp-json/wp/v2/answer_keys?per_page=20&_fields=id,slug,title"
    )
      .then((res) => {
        if (!res.ok) throw new Error("API Error");
        return res.json();
      })
      .then((data) => {
        setKeys(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-700 text-white">
              <th className="border px-4 py-3 text-center">
                Exam / Answer Key Name
              </th>
            </tr>
          </thead>

          <tbody>
            {loading &&
              [...Array(10)].map((_, i) => <SkeletonRow key={i} />)}

            {!loading && error && (
              <tr>
                <td className="border px-4 py-10 text-center text-red-600">
                  Failed to load answer keys.
                </td>
              </tr>
            )}

            {!loading && !error && keys.length === 0 && (
              <tr>
                <td className="border px-4 py-10 text-center">
                  No answer keys available.
                </td>
              </tr>
            )}

            {!loading &&
              keys.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-4 text-center font-medium">
                    <Link
                      href={`/answer-key/${item.slug}`}
                      className="text-blue-700 hover:underline"
                    >
                      {item.title.rendered}
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}