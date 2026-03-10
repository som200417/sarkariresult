import Blog from "@/ui/Blog";
import Pagination from "@/components/Pagination";
import fs from "fs/promises";
import path from "path";

export const revalidate = 300;
export const dynamic = "force-static";

async function getPosts(page = 1) {

  try {

    const filePath = path.join(
      process.cwd(),
      `public/data/combined-page-${page}.json`
    );

    const file = await fs.readFile(filePath, "utf8");

    return JSON.parse(file);

  } catch {

    return {
      posts: [],
      total: 0,
      pages: 1,
      page: 1
    };

  }

}

export default async function BlogPage({ searchParams }) {

  const params = await searchParams;
  const page = Number(params?.page || 1);

  const data = await getPosts(page);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <Blog posts={data?.posts || []} />

      <Pagination
        page={page}
        totalPages={data?.pages || 1}
        base="/blog"
      />

    </div>
  );
}