"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SearchPage() {
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

  return (
    <div className="site-container my-8">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for: <span>{query}</span>
      </h1>

      {loading && <p>Searching...</p>}

      {!loading && results.length === 0 && <p>No results found.</p>}

      <ul className="space-y-4">
        {results.map((item) => (
          <li key={item.id}>
            <Link href={`/${item.subtype}/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}