// src/pages/api/survey.ts
import type { APIRoute } from "astro";
import fs from "node:fs/promises";
import path from "node:path";

export const prerender = true;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const responsesDir = path.join(process.cwd(), "public", "responses");
    await fs.mkdir(responsesDir, { recursive: true });

    const filename = "survey-responses.json";
    const filepath = path.join(responsesDir, filename);

    let existingData = [];
    try {
      const fileContent = await fs.readFile(filepath, "utf-8");
      existingData = JSON.parse(fileContent);
    } catch {}

    const id = existingData.length > 0 ? existingData[existingData.length - 1].id + 1 : 1;
    const timestamp = new Date().toISOString();

    const newEntry = { id, timestamp, ...data };
    existingData.push(newEntry);

    await fs.writeFile(filepath, JSON.stringify(existingData, null, 2), "utf-8");

    return new Response(
      JSON.stringify({
        success: true,
        message: "Survey response saved successfully",
        filename,
        id,
        timestamp
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to save survey response",
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      { status: 500 }
    );
  }
};
