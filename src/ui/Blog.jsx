"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/* ---------------- ROUTE MAPPER ---------------- */
const mapRoute = (type, slug) => {
  switch (type) {
    case "jobs":
      return `/latest-jobs/${slug}`;
    case "results":
      return `/results/${slug}`;
    case "admit-card":
      return `/admit-card/${slug}`;
    case "answer_keys":
      return `/answer-key/${slug}`;
    case "documents":
      return `/document/${slug}`;
    case "admissions":
      return `/admission/${slug}`;
    default:
      return `/${slug}`;
  }
};

/* ---------------- SHORT DESCRIPTION ---------------- */
const getShortInfo = (post) =>
  post?.acf?.short_information ||
  post?.acf?.short_description ||
  post?.acf?.description ||
  "";

export default function Blog({ initialData, initialPage }) {
  const router = useRouter();
  const [page, setPage] = useState(initialPage);
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const posts = Array.isArray(data?.posts) ? data.posts : [];
  const totalPages = data?.pages || 1;

  useEffect(() => {
    if (page === initialPage) return;

    setLoading(true);

    fetch(
      `https://api.sarkariresult6.com/wp-json/bea/v1/combined?per_page=10&page=${page}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
        router.push(`/blog?page=${page}`, { scroll: false });
      })
      .catch(() => setLoading(false));

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (loading && posts.length === 0) {
    return (
      <div className="site-container py-10 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="site-container py-8">
      <h1 className="text-2xl font-bold text-[#6b0035] mb-6">
        All Latest Updates
      </h1>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border rounded-xl shadow-sm p-5"
          >
            <h2 className="text-lg font-bold text-[#6b0035] mb-2">
              <Link href={mapRoute(post.type, post.slug)}>
                {post?.title?.rendered}
              </Link>
            </h2>

            <p className="text-xs text-gray-500 mb-2">
              {post?.date &&
                new Date(post.date).toLocaleDateString("en-IN", {
                  timeZone: "Asia/Kolkata",
                })}
            </p>

            <p className="text-[15px] leading-7 text-gray-800 mb-4 line-clamp-3 font-serif tracking-wide">
              {getShortInfo(post)}
            </p>

            <Link
              href={mapRoute(post.type, post.slug)}
              className="inline-block bg-[#6b0035] text-white px-4 py-1 rounded text-sm"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10 flex-wrap">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                page === i + 1
                  ? "bg-[#6b0035] text-white"
                  : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}