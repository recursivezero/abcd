import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
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
  integrations: [
    mdx(),
    react({
      experimentalReactChildren: true
    }),
    tailwind({
      applyBaseStyles: false,
      nesting: true
    })
  ],
  style: {
    global: true // Ensure global styles are applied
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
  //adapter: node({ mode: "standalone" })
});
