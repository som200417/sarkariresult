import fs from "fs/promises";
import path from "path";

const BASE = "https://api.sarkariresult6.com/wp-json/bea/v1";

async function saveJSON(file, data) {
  const filePath = path.join(process.cwd(), "public/data", `${file}.json`);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function POST() {
  try {

    // fetch home data
    const homeRes = await fetch(`${BASE}/home`);
    const homeData = await homeRes.json();

    await saveJSON("home", homeData);

    // fetch combined pages
    for (let page = 1; page <= 20; page++) {
      const res = await fetch(`${BASE}/combined?per_page=10&page=${page}`);
      const data = await res.json();
      await saveJSON(`combined-page-${page}`, data);
    }

    return Response.json({
      success: true,
      message: "JSON regenerated successfully"
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