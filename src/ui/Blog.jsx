import Link from "next/link";

/* ROUTE MAPPER */
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

/* SHORT DESCRIPTION */
const getShortInfo = (post) =>
  post?.acf?.short_information ||
  post?.acf?.short_description ||
  post?.acf?.description ||
  "";

export default function Blog({ posts = [] }) {

  if (!posts.length) {
    return (
      <div className="py-10 text-center">
        No updates available.
      </div>
    );
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-[#6b0035] mb-6">
        All Latest Updates
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {posts.map((post) => (

          <div
            key={post.id}
            className="bg-white border rounded-xl shadow-sm p-5"
          >

            <h2 className="text-lg font-bold text-[#6b0035] mb-2">

              <Link
                href={mapRoute(post.type, post.slug)}
                prefetch={false}
              >
                {post?.title?.rendered}
              </Link>

            </h2>

            <p className="text-xs text-gray-500 mb-2">
              {post?.date &&
                new Date(post.date).toLocaleDateString("en-IN", {
                  timeZone: "Asia/Kolkata",
                })}
            </p>

            <p className="text-[15px] leading-7 text-gray-800 mb-4 line-clamp-3 font-serif">
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
    </>
  );
}