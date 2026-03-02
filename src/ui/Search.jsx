"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    fetch(
      `https://api.sarkariresult6.com/wp-json/wp/v2/search?search=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data || []);
        setLoading(false);
      })
      .catch(() => {
        setResults([]);
        setLoading(false);
      });
  }, [query]);

  const mapRoute = (type, slug) => {
    switch (type) {
      case "jobs":
        return `/latest-jobs/${slug}`;
      case "admit_cards":
        return `/admit-card/${slug}`;
      case "answer_keys":
        return `/answer-key/${slug}`;
      case "documents":
        return `/document/${slug}`;
      case "admissions":
        return `/admission/${slug}`;
      case "results":
        return `/results/${slug}`;
      default:
        return null;
    }
  };

  return (
    <div className="site-container my-8">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for:{" "}
        <span className="text-[#6b0035]">{query}</span>
      </h1>

      {loading && <p>Searching...</p>}

      {!loading && results.length === 0 && (
        <p>No results found.</p>
      )}

      <ul className="space-y-4">
        {results.map((item) => {
          const path = mapRoute(item.subtype, item.slug);
          if (!path) return null;

          return (
            <li
              key={item.id}
              className="border border-black p-4 hover:bg-gray-50"
            >
              <Link
                href={path}
                className="text-[#6b0035] font-semibold hover:underline"
              >
                {item.title}
              </Link>

              <div className="text-xs text-gray-500 mt-1 capitalize">
                {item.subtype.replace("_", " ")}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}