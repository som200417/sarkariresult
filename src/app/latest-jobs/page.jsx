import JobsTable from "@/ui/JobsTable";
import Pagination from "@/components/Pagination";

export const revalidate = 300;
export const dynamic = "force-static";
async function getJobs(page = 1) {

  const res = await fetch(
  `https://api.sarkariresult6.com/wp-json/wp/v2/jobs?per_page=10&page=${page}&_fields=id,slug,title,acf`,
  {
    cache: "force-cache",
    next: { revalidate: 300 }
  }
);

  const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;

  const jobs = await res.json();

  return { jobs, totalPages };
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