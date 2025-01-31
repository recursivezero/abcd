// src/pages/api/survey.ts
import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'path';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    console.log('Received data in API:', data); // Debug log

    // Get the current working directory
    const cwd = process.cwd();
    console.log('Current working directory:', cwd); // Debug log

    // Create responses directory if it doesn't exist
    const responsesDir = path.join(cwd, 'public', 'responses');
    console.log('Attempting to create/access directory:', responsesDir); // Debug log

    try {
      await fs.mkdir(responsesDir, { recursive: true });
    } catch (mkdirError) {
      console.error('Error creating directory:', mkdirError);
      // Continue execution even if directory exists
    }

    // Fixed filename
    const filename = 'survey-responses.json';
    const filepath = path.join(responsesDir, filename);
    console.log('Writing file to:', filepath); // Debug log

    // Read existing data (if any)
    let existingData = [];
    try {
      const fileContent = await fs.readFile(filepath, 'utf-8');
      existingData = JSON.parse(fileContent);
    } catch (readError) {
      // If the file doesn't exist, we'll start with an empty array
      console.log('No existing file found, starting fresh.'); // Debug log
    }

    // Generate a unique ID and timestamp for the new entry
    const id = existingData.length > 0 ? existingData[existingData.length - 1].id + 1 : 1; // Auto-increment ID
    const timestamp = new Date().toISOString(); // Current timestamp in ISO format

    // Append new data to existing data with ID and timestamp
    const newEntry = {
      id,
      timestamp,
      ...data, // Spread the original data
    };
    existingData.push(newEntry);

    // Save updated data to JSON file
    try {
      await fs.writeFile(filepath, JSON.stringify(existingData, null, 2), 'utf-8');
      console.log('File updated successfully'); // Debug log
    } catch (writeError) {
      console.error('Error writing file:', writeError);
      throw writeError;
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Survey response saved successfully',
      filename: filename,
      id, // Return the ID of the new entry
      timestamp, // Return the timestamp of the new entry
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    // Log the full error
    console.error('Full error details:', error);

    return new Response(JSON.stringify({
      success: false,
      message: 'Failed to save survey response',
      error: error instanceof Error ? error.message : 'Unknown error',
      errorDetails: error // Include full error details in development
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}