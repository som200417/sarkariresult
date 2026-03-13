import fs from "fs";
import path from "path";

/* API Bases */
const BASE_V1 = "https://api.sarkariresult6.com/wp-json/bea/v1";
const BASE_WP = "https://api.sarkariresult6.com/wp-json/wp/v2";

/* Pagination */
const PER_PAGE = 10;
const MAX_PAGES = 20;

/* Data folder */
const DATA_DIR = path.join(process.cwd(), "public/data");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function saveJSON(file, data) {

  const filePath = path.join(DATA_DIR, `${file}.json`);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  console.log(`✅ ${file}.json generated`);

}

/* Fetch helper */
async function fetchData(url) {

  const res = await fetch(url, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status} → ${url}`);
  }

  return res.json();
}

/* Category JSON (WordPress REST) */
async function generateCategory(endpoint, file) {

  try {

    const data = await fetchData(
      `${BASE_WP}/${endpoint}?per_page=100&_=${Date.now()}`
    );

    saveJSON(file, data);

  } catch (err) {

    console.error(`❌ ${file}.json failed`, err);

  }

}

/* Generate all CPT JSON */
async function generateCategories() {

  console.log("📦 Generating category JSON...");

  await Promise.all([

    generateCategory("jobs", "latest-jobs"),
    generateCategory("results", "results"),
    generateCategory("admit-card", "admit-cards"),
    generateCategory("answer_keys", "answer-keys"),
    generateCategory("documents", "documents"),
    generateCategory("admissions", "admissions")

  ]);

}

/* Combined pages */
async function generateCombinedPages() {

  console.log("📄 Generating combined pages...");

  const tasks = [];

  for (let page = 1; page <= MAX_PAGES; page++) {

    const url = `${BASE_V1}/combined?per_page=${PER_PAGE}&page=${page}&_=${Date.now()}`;

    tasks.push(

      fetchData(url)
        .then(data => saveJSON(`combined-page-${page}`, data))
        .catch(err =>
          console.error(`❌ combined-page-${page} failed`, err)
        )

    );

  }

  await Promise.all(tasks);

}

/* Home JSON */
async function generateHome() {

  console.log("🏠 Generating home.json");

  try {

    const data = await fetchData(
      `${BASE_V1}/home?_=${Date.now()}`
    );

    saveJSON("home", data);

  } catch (err) {

    console.error("❌ home.json failed:", err);

  }

}

/* Run generator */
async function generateAll() {

  console.log("🚀 Generating JSON cache...");

  /* categories first */
  await generateCategories();

  /* combined pages */
  await generateCombinedPages();

  /* home LAST */
  await generateHome();

  console.log("🎉 JSON cache updated successfully");

}

generateAll();