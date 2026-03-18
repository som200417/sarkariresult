"use client";

import Link from "next/link";
import UniversalExamSingle from "@/components/UniversalExamSingle";
import BottomSection from "@/components/BottomSection";
export default function JobSingle({ post }) {
  return (
    <div className="site-container my-6">

      <h1 className="text-xl md:text-2xl font-bold text-red-700">
        {post.title.rendered}
      </h1>

      {post.date && (
        <p className="text-xs text-gray-600 mt-1">
          Post Date:{" "}
          {new Date(post.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "Asia/Kolkata",
          })}
        </p>
      )}

      <UniversalExamSingle post={post} />

      {/* FOOTER LINKS */}
      <div className="border-t pt-6 mt-10 text-sm md:text-base">
        <div className="flex flex-col md:flex-row justify-between gap-4">

          <div>
            <span className="font-semibold text-gray-700">Previous:</span>
            <div>
              <Link
                href="/latest-jobs"
                className="text-blue-600 hover:underline"
              >
                Back to Latest Jobs List
              </Link>
            </div>
          </div>

          <div>
            <span className="font-semibold text-gray-700">About</span>
            <div>
              <Link href="/about-us" className="text-blue-600 hover:underline">
                Sarkari Result
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* RELATED POSTS */}
      <div className="mt-12 border border-gray-400">
        <div className="bg-red-700 text-white font-bold text-center py-3">
          Related Posts
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[
            "UP Police Result",
            "Bharat Result",
            "Bihar Police Result",
            "Sarkari Exam",
            "Sarkari Result Hindi",
            "Sarkari Result NTPC",
            "Sarkari Result 2025",
            "Sarkari Result",
            "Sarkari",
            "Sarkari Naukri",
            "Sarkari Result 10th",
            "Sarkari Result Center",
            "Sarkari Result 10+2",
            "Sarkariresult",
            "Sarkari Result SSC",
          ].map((title, idx) => (
            <Link
              key={idx}
              href="/latest-jobs"
              className="border border-gray-400 text-center py-4 text-blue-700 font-medium hover:underline hover:bg-gray-50 transition"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>

      {/* DISCOVER MORE */}
      <div className="mt-10 border border-gray-300 rounded overflow-hidden shadow-sm">
        <div className="bg-gray-100 font-semibold py-3 px-4">
          Discover More
        </div>

        <div className="p-4 bg-white space-y-3">
          <Link href="/blog" className="block text-blue-600 hover:underline">
            Educational Resources
          </Link>
          <Link href="/blog" className="block text-blue-600 hover:underline">
            Government & Public Sector Jobs
          </Link>
          <Link href="/blog" className="block text-blue-600 hover:underline">
            Primary & Secondary Schooling
          </Link>
        </div>
      </div>
            <BottomSection />
    </div>
  );
}