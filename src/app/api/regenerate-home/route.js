import fs from "fs/promises";
import path from "path";

const BASE_V1 = "https://api.sarkariresult6.com/wp-json/bea/v1";
const BASE_WP = "https://api.sarkariresult6.com/wp-json/wp/v2";

const DATA_DIR = path.join(process.cwd(), "public/data");

async function saveJSON(file, data) {
  const filePath = path.join(DATA_DIR, `${file}.json`);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

async function fetchData(url) {
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }

  return res.json();
}

export async function POST() {

  try {

    /* HOME JSON */
    const home = await fetchData(`${BASE_V1}/home`);
    await saveJSON("home", home);

    /* CATEGORY JSON */

    const jobs = await fetchData(`${BASE_WP}/jobs?per_page=100`);
    await saveJSON("latest-jobs", jobs);

    const results = await fetchData(`${BASE_WP}/results?per_page=100`);
    await saveJSON("results", results);

    const admit = await fetchData(`${BASE_WP}/admit-card?per_page=100`);
    await saveJSON("admit-cards", admit);

    const answer = await fetchData(`${BASE_WP}/answer_keys?per_page=100`);
    await saveJSON("answer-keys", answer);

    const docs = await fetchData(`${BASE_WP}/documents?per_page=100`);
    await saveJSON("documents", docs);

    const admissions = await fetchData(`${BASE_WP}/admissions?per_page=100`);
    await saveJSON("admissions", admissions);

    /* COMBINED PAGES */

    for (let page = 1; page <= 20; page++) {

      const data = await fetchData(
        `${BASE_V1}/combined?per_page=10&page=${page}`
      );

      await saveJSON(`combined-page-${page}`, data);

    }

    return Response.json({
      success: true,
      message: "All JSON regenerated successfully"
    });

  } catch (err) {

    return Response.json({
      success: false,
      error: err.message
    });

  }

}

export async function GET() {
  return Response.json({ status: "API working" });
}