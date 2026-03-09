import { Suspense } from "react";
import Results from "@/ui/ResultList";

/* =========================
   SEO (SERVER SIDE)
========================= */
export function generateMetadata({ searchParams }) {
  const page = Number(searchParams?.page) || 1;

  const baseUrl = "https://sarkariresult6.com/results";

  const title =
    page > 1
      ? `Latest Sarkari Results – Page ${page} | Sarkari Result`
      : `Latest Sarkari Results | Sarkari Result`;

  const description =
    page > 1
      ? `Latest Sarkari Exam Results Page ${page} – Sarkari Result`
      : `Latest Sarkari Exam Results – Sarkari Result`;

  return {
    title,
    description,
    alternates: {
      canonical: page === 1 ? baseUrl : `${baseUrl}?page=${page}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =========================
   PAGE RENDER
========================= */

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Results />
    </Suspense>
  );
}