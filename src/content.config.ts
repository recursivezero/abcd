import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

export const blogSchema = z.object({
  title: z.string().max(60),
  slug: z.string().optional(),
  publishDate: z
    .string()
    .or(z.date())
    .transform((val) => new Date(val)),
  tags: z.array(z.string()).default(["rz"]),
  draft: z.boolean().default(false),
  author: z.string().optional(),
  image: z.string().optional(),
  description: z.string().optional()
});

export const articleSchema = z.object({
  title: z.string(),
  author: z.string(),
  description: z.string().optional(),
  date: z.date().optional()
});

export const storySchema = z.object({
  title: z.string().max(80),
  slug: z
    .string()
    .optional()
    .transform((val) => (val ? val.toLowerCase().replace(/\s+/g, "-") : undefined)),
  publishDate: z
    .string()
    .or(z.date())
    .transform((val) => new Date(val)),
  tags: z.array(z.string()).default(["story"]),
  draft: z.boolean().default(false),
  author: z.string().optional(),
  image: z.string().optional(),
  description: z.string().optional(),
  category: z.string().optional(),
  readingTime: z.number().optional(),
  featured: z.boolean().default(false)
});

export const collections = {
  blogs: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: blogSchema
  }),
  articles: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/article" }),
    schema: articleSchema
  }),
  stories: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/stories" }),
    schema: storySchema
  })
};

export type BlogSchema = z.infer<typeof blogSchema>;
export type StorySchema = z.infer<typeof storySchema>;
