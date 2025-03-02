import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
// import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://parixan.xyz",
  build: {
    format: "file"
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
    // icons(),
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
  },
  output: "server",
  adapter: node({ mode: "standalone" })
});
