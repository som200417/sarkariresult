import Home from "@/ui/Home";
import fs from "fs/promises";
import path from "path";

export const revalidate = 0;

export const metadata = {
  title: "Sarkari Result 2026 – Latest Jobs, Admit Card, Results",
  description:
    "Sarkari Result 2026: Latest Government Jobs, Admit Cards, Results, Answer Keys and Admissions. Fastest updates.",
  alternates: {
    canonical: "https://sarkariresult6.com",
  },
  openGraph: {
    title: "Sarkari Result 2026 – Latest Jobs, Admit Card, Results",
    description:
      "Sarkari Result 2026: Latest Government Jobs, Admit Cards, Results, Answer Keys and Admissions.",
    url: "https://sarkariresult6.com",
    siteName: "Sarkari Result",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

async function getHomeData() {
   const res = await fetch(
    "https://www.sarkariresult6.com/data/home.json",
    { cache: "no-store" }
  );

  return res.json();
}


export default async function Page() {
  const homeData = await getHomeData();
  return <Home homeData={homeData} />;
}