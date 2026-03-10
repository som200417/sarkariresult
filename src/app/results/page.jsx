import Results from "@/ui/ResultList";
import ResultsPagination from "@/components/ResultsPagination";

export const revalidate = 300;
export const dynamic = "force-static";

async function getResults(page = 1) {

  const res = await fetch(
    `https://api.sarkariresult6.com/wp-json/wp/v2/results?per_page=10&page=${page}&_fields=id,slug,title`,
    {
      cache: "force-cache",
      next: { revalidate: 300 }
    }
  );

  const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;

  const results = await res.json();

  return { results, totalPages };
}

export default async function Page({ searchParams }) {

  const params = await searchParams;
  const page = Number(params?.page) || 1;

  const { results, totalPages } = await getResults(page);

  return (
    <>
      <Results results={results} />

      <ResultsPagination page={page} totalPages={totalPages} />
    </>
  );
}