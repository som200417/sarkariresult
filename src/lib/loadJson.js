import fs from "fs/promises";
import path from "path";

export async function loadCategory(file, page = 1, perPage = 10) {
  try {

    const filePath = path.join(
      process.cwd(),
      "public/data",
      file
    );

    const json = await fs.readFile(filePath, "utf8");

    const allData = JSON.parse(json) || [];

    const start = (page - 1) * perPage;

    return {
      data: allData.slice(start, start + perPage),
      totalPages: Math.ceil(allData.length / perPage),
    };

  } catch (err) {

    console.error(`Error loading ${file}`, err);

    return {
      data: [],
      totalPages: 1,
    };

  }
}