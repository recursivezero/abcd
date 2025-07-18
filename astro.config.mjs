import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://parixan.xyz",
  output: "static",
  build: {
    format: "directory"
  },
  prefetch: {
    prefetchAll: true
  },
  devToolbar: {
    enabled: false
  },
  experimental: {
    svg: true
  },
  integrations: [sitemap(), mdx()],
  style: {
    global: true // Ensure global styles are applied
  },
  //redirects: {
  //  "/en/nakshtra": "/nakshtra",
  //  "/blog": "https://xkeshav.com/blog"
  //},
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
  //adapter: node({ mode: "standalone" })
});
