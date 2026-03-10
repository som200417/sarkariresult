import { exec } from "child_process";

export async function GET() {
  return new Promise((resolve) => {
    exec("node scripts/generate-home-json.js", (error, stdout, stderr) => {
      if (error) {
        resolve(
          Response.json({
            status: "error",
            message: stderr,
          })
        );
        return;
      }

      resolve(
        Response.json({
          status: "success",
          message: stdout,
        })
      );
    });
  });
}