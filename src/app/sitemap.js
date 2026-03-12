    import fs from "fs";
import path from "path";

const SITE = "https://sarkariresult6.com";

function readJson(file) {
  try {
    const filePath = path.join(process.cwd(), "public/data", file);
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export default function sitemap() {
  const jobs = readJson("latest-jobs.json");
  const results = readJson("results.json");
  const admit = readJson("admit-cards.json");
  const answer = readJson("answer-keys.json");
  const docs = readJson("documents.json");
  const admission = readJson("admissions.json");

  const urls = [];

  jobs.forEach((p) =>
    urls.push({
      url: `${SITE}/latest-jobs/${p.slug}`,
      lastModified: new Date(),
    })
  );

  results.forEach((p) =>
    urls.push({
      url: `${SITE}/results/${p.slug}`,
      lastModified: new Date(),
    })
  );

  admit.forEach((p) =>
    urls.push({
      url: `${SITE}/admit-card/${p.slug}`,
      lastModified: new Date(),
    })
  );

  answer.forEach((p) =>
    urls.push({
      url: `${SITE}/answer-key/${p.slug}`,
      lastModified: new Date(),
    })
  );

  docs.forEach((p) =>
    urls.push({
      url: `${SITE}/document/${p.slug}`,
      lastModified: new Date(),
    })
  );

  admission.forEach((p) =>
    urls.push({
      url: `${SITE}/admission/${p.slug}`,
      lastModified: new Date(),
    })
  );

  return [
    {
      url: SITE,
      lastModified: new Date(),
    },
    {
      url: `${SITE}/latest-jobs`,
      lastModified: new Date(),
    },
    {
      url: `${SITE}/results`,
      lastModified: new Date(),
    },
    {
      url: `${SITE}/admit-card`,
      lastModified: new Date(),
    },
    {
      url: `${SITE}/answer-key`,
      lastModified: new Date(),
    },
    {
      url: `${SITE}/document`,
      lastModified: new Date(),
    },
    {
      url: `${SITE}/admission`,
      lastModified: new Date(),
    },
    ...urls,
  ];
}