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

    // Generate unique filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `survey-response-${timestamp}.json`;
    const filepath = path.join(responsesDir, filename);
    console.log('Writing file to:', filepath); // Debug log

    // Save response to JSON file
    try {
      await fs.writeFile(filepath, JSON.stringify(data, null, 2), 'utf-8');
      console.log('File written successfully'); // Debug log
    } catch (writeError) {
      console.error('Error writing file:', writeError);
      throw writeError;
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Survey response saved successfully',
      filename: filename
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