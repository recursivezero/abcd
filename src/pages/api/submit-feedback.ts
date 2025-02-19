// src/pages/api/submit-feedback.ts
import type { APIRoute } from "astro";
import fs from "node:fs/promises";
import path from "node:path";

// Add this line to enable server-side rendering
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Get the raw body and parse it manually
    const data = await request.json();
    const name = data.name?.trim();
    const feedback = data.feedback?.trim();

    // Validate input
    if (!name || !feedback) {
      return new Response(JSON.stringify({ error: "Name and feedback are required." }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    const newFeedback = {
      id: Date.now(),
      name,
      feedback,
      timestamp: new Date().toISOString()
    };

    const dataDir = path.join(process.cwd(), "src/data");
    const filePath = path.join(dataDir, "feedback.json");

    // Ensure the data directory exists
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    // Read and update existing feedback
    let existingFeedback = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      existingFeedback = JSON.parse(fileContent);
      if (!Array.isArray(existingFeedback)) throw new Error();
    } catch {
      existingFeedback = [];
    }

    existingFeedback.push(newFeedback);
    await fs.writeFile(filePath, JSON.stringify(existingFeedback, null, 2), "utf-8");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (err) {
    console.error("Error processing feedback:", err);
    return new Response(JSON.stringify({ error: "An error occurred while saving your feedback." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
