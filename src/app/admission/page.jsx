import fs from "fs/promises";
import path from "path";
import Admissions from "@/ui/Admissions";

export const revalidate = 300;
export const dynamic = "force-static";

export const metadata = {
  title: "Latest Admissions 2026 – Sarkari Result",
  description:
    "Latest government and university admissions 2026 with last date, status and details.",
};

async function getAdmissions(page = 1) {
  try {

    const filePath = path.join(
      process.cwd(),
      "public/data/admissions.json"
    );

    const file = await fs.readFile(filePath, "utf8");

    const allData = JSON.parse(file) || [];

    const perPage = 10;

    const start = (page - 1) * perPage;

    const paginated = allData.slice(start, start + perPage);

    const totalPages = Math.ceil(allData.length / perPage);

    return {
      data: paginated,
      totalPages,
    };

  } catch (error) {

    console.error("Admissions JSON error:", error);

    return { data: [], totalPages: 1 };

  }
}

export default async function AdmissionsPage({ searchParams }) {

  const params = await searchParams;

  const page = Number(params?.page) || 1;

  const { data, totalPages } = await getAdmissions(page);

  return (
    <Admissions
      admissions={data}
      page={page}
      totalPages={totalPages}
    />
  );
}