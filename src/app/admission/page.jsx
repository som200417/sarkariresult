import Admissions from "@/ui/Admissions";

const API = "https://api.sarkariresult6.com/wp-json/wp/v2/admissions";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function getAdmissions(page = 1) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5 sec safety

    const res = await fetch(
      `${API}?per_page=10&page=${page}&orderby=date&order=desc&_fields=id,slug,title,acf`,
      {
        cache: "no-store",
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);

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

export const metadata = {
  title: "Latest Admissions 2026 – Sarkari Result",
  description:
    "Latest government and university admissions 2026 with last date, status and details.",
};

export default async function AdmissionsPage() {
  const { data, totalPages } = await getAdmissions(1);

  return (
    <Admissions
      initialAdmissions={data}
      initialTotalPages={totalPages}
    />
  );
}