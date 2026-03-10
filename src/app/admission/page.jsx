import Admissions from "@/ui/Admissions";

const API = "https://api.sarkariresult6.com/wp-json/wp/v2/admissions";

export const revalidate = 300;
export const dynamic = "force-static";

export const metadata = {
  title: "Latest Admissions 2026 – Sarkari Result",
  description:
    "Latest government and university admissions 2026 with last date, status and details.",
};

async function getAdmissions(page = 1) {
  try {
    const res = await fetch(
      `${API}?per_page=10&page=${page}&orderby=date&order=desc&_fields=id,slug,title`,
      {
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      return { data: [], totalPages: 1 };
    }

    const totalPages = Number(res.headers.get("X-WP-TotalPages") || 1);
    const data = await res.json();

    return {
      data: Array.isArray(data) ? data : [],
      totalPages,
    };
  } catch (error) {
    console.error("Admissions fetch error:", error);
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