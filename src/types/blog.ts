import { z } from "astro:content";

const urlSchema = z.string().refine(
  (url) => {
    return url.startsWith("/") || url.match(/^https?:\/\//);
  },
  { message: "Must be a valid URL or local path" }
);

// Zod schemas
export const blogPostSchema = z.object({
  title: z.string().max(100),
  description: z.string().optional(),
  image: z.string().optional(),
  author: z.string().optional(),
  date: z.string().or(z.date()).optional(),
  url: urlSchema
});

export const blogCardSchema = z.object({
  post: blogPostSchema,
  height: z.union([z.string(), z.number()]).optional()
});

export const blogMetaSchema = z.object({
  title: z.string().max(60),
  description: z.string().optional()
});

// Derive TypeScript types from Zod schemas
export type BlogPost = z.infer<typeof blogPostSchema>;
export type BlogCardProps = z.infer<typeof blogCardSchema>;
export type BlogMeta = z.infer<typeof blogMetaSchema>;
