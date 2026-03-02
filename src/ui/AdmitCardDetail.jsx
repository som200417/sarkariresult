"use client";

import UniversalExamSingle from "../components/UniversalExamSingle";

export default function AdmitCardDetail({ post }) {
  return (
    <div className="site-container my-8 max-w-5xl mx-auto px-4 sm:px-5 md:px-6">

      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-700 mb-3">
        {post.title.rendered}
      </h1>

      {post.date && (
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-6">
          Updated:{" "}
          {new Date(post.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "Asia/Kolkata",
          })}
        </p>
      )}

      {post.content?.rendered && (
        <div
          className="prose prose-sm sm:prose-base max-w-none mb-10 text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      )}

      <UniversalExamSingle post={post} />
    </div>
  );
}