import fs from "fs";
import path from "path";

const BASE = "https://api.sarkariresult6.com/wp-json/bea/v1";

const PER_PAGE = 10;
const MAX_PAGES = 20;

const DATA_DIR = path.join(process.cwd(), "public/data");

/* Ensure data folder exists */
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

/* Save JSON helper */
function saveJSON(file, data) {
  const filePath = path.join(DATA_DIR, `${file}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`✅ ${file}.json generated`);
}

/* Generate homepage JSON */
async function generateHome() {

  try {

    const res = await fetch(`${BASE}/home`);
    const data = await res.json();

    saveJSON("home", data);

  } catch (err) {

    console.error("❌ Home JSON failed:", err);

  }

}

/* Generate blog pagination JSON */
async function generateCombinedPages() {

  for (let page = 1; page <= MAX_PAGES; page++) {

    try {

      const res = await fetch(
        `${BASE}/combined?per_page=${PER_PAGE}&page=${page}`
      );

      const data = await res.json();

      saveJSON(`combined-page-${page}`, data);

    } catch (err) {

      console.error(`❌ combined-page-${page} failed`, err);

    }

  }

}

/* Run all generators */
async function generateAll() {

  console.log("🚀 Generating JSON cache...");

  await generateHome();

  await generateCombinedPages();

  console.log("🎉 JSON cache updated successfully");

}

generateAll();
