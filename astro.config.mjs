import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const isProd = process.env.NODE_ENV === "production";

console.log({ isProd });

// https://astro.build/config
export default defineConfig({
  site: "https://abcdkbd.com",
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
    ...(isProd
      ? [
          partytown({
            config: {
              forward: ["dataLayer.push"]
            }
          })
        ]
      : []),
    sitemap(),
    mdx()
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
