import fs from "fs/promises";
import path from "path";
import JobsTable from "@/ui/JobsTable";
import Pagination from "@/components/Pagination";

export const revalidate = 300;
export const dynamic = "force-static";

export const metadata = {
  title: "Latest Government Jobs 2026 | Sarkari Result",
  description:
    "Check latest government jobs, online forms, eligibility and last date updates.",
  alternates: {
    canonical: "https://sarkariresult6.com/latest-jobs",
  },
};

async function getJobs(page = 1) {
  try {

    const filePath = path.join(
      process.cwd(),
      "public/data/latest-jobs.json"
    );

    const file = await fs.readFile(filePath, "utf8");

    const allJobs = JSON.parse(file) || [];

    const perPage = 10;

    const start = (page - 1) * perPage;

    const jobs = allJobs.slice(start, start + perPage);

    const totalPages = Math.ceil(allJobs.length / perPage);

    return { jobs, totalPages };

  } catch (err) {

    console.error("Jobs JSON error:", err);

    return { jobs: [], totalPages: 1 };

  }
}

export default async function Page({ searchParams }) {

  const params = await searchParams;

  const page = Number(params?.page) || 1;

  const { jobs, totalPages } = await getJobs(page);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      <h1 className="text-2xl font-bold mb-6">
        Latest Jobs
      </h1>

      <JobsTable jobs={jobs} />

      <Pagination page={page} totalPages={totalPages} />

    </div>
  );
}