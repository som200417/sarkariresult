import Blog from "@/ui/Blog";

const BASE =
  "https://api.sarkariresult6.com/wp-json/bea/v1/combined";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
async function getPosts(page = 1) {
  try {
    const res = await fetch(
      `${BASE}?per_page=10&page=${page}`,
    { cache: "no-store" }
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
export async function generateMetadata(props) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page || 1);

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

export default async function BlogPage(props) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page || 1);

  const data = await getPosts(page);

  return (
    <Blog
      initialData={data}
      initialPage={page}
    />
  );
}