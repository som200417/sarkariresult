import fs from "fs/promises";
import path from "path";
import Results from "@/ui/ResultList";
import ResultsPagination from "@/components/ResultsPagination";

export const revalidate = 300;
export const dynamic = "force-static";

export const metadata = {
  title: "Latest Results 2026 | Sarkari Result",
  description:
    "Check latest government exam results including SSC, UPSC, Railway, Bank and more.",
  alternates: {
    canonical: "https://sarkariresult6.com/results",
  },
};

async function getResults(page = 1) {
  try {

    const filePath = path.join(
      process.cwd(),
      "public/data/results.json"
    );

    const file = await fs.readFile(filePath, "utf8");

    const allResults = JSON.parse(file) || [];

    const perPage = 10;

    const start = (page - 1) * perPage;

    const results = allResults.slice(start, start + perPage);

    const totalPages = Math.ceil(allResults.length / perPage);

    return { results, totalPages };

  } catch (err) {

    console.error("Results JSON error:", err);

    return { results: [], totalPages: 1 };

  }
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