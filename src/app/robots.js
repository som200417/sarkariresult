export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/data/", "/api/"],
      },
    ],
    sitemap: "https://sarkariresult6.com/sitemap.xml",
  };
}