import Home from "@/ui/Home";

export const revalidate = 60; // cache 60 seconds

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
    "https://api.sarkariresult6.com/wp-json/bea/v1/home",
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Home API failed");
  }

  return res.json();
}

export default async function Page() {
  const homeData = await getHomeData();
  return <Home homeData={homeData} />;
}