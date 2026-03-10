import Blog from "@/ui/Blog";
import Pagination from "@/components/Pagination";

const BASE = "https://api.sarkariresult6.com/wp-json/bea/v1/combined";

export const revalidate = 300;
export const dynamic = "force-static";

async function getPosts(page = 1) {
  try {
    const res = await fetch(
      `${BASE}?per_page=10&page=${page}`,
      {
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) throw new Error();

    return await res.json();
  } catch {
    return {
      posts: [],
      total: 0,
      pages: 1,
      page: 1,
    };
  }
}

export async function generateMetadata({ searchParams }) {

  const params = await searchParams;
  const page = Number(params?.page || 1);

  return {
    title:
      page > 1
        ? `All Updates – Page ${page} | SarkariResult6`
        : "All Latest Updates 2026 | SarkariResult6",

    description:
      "Latest government job updates, results, admit cards, answer keys and admissions.",

    alternates: {
      canonical: `https://www.sarkariresult6.com/blog${
        page > 1 ? `?page=${page}` : ""
      }`,
    },
  };
}

export default async function BlogPage({ searchParams }) {

  const params = await searchParams;
  const page = Number(params?.page || 1);

  const data = await getPosts(page);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <Blog posts={data.posts} />

      <Pagination
        page={page}
        totalPages={data.pages}
        base="/blog"
      />

    </div>
  );
}