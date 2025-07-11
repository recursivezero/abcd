import { z } from "zod";

export const storyPostSchema = z.object({
  url: z.string(),
  title: z.string(),
  description: z.string().optional(),
  author: z.string().optional(),
  image: z.string().optional(),
  date: z.string().optional(),
  category: z.string().optional(),
  readingTime: z.number().optional(),
  featured: z.boolean().optional(),
  tags: z.array(z.string()).optional()
});

export const storyCardSchema = z.object({
  post: storyPostSchema,
  height: z.union([z.string(), z.number()]).optional()
});

export type StoryPost = z.infer<typeof storyPostSchema>;
export type StoryCard = z.infer<typeof storyCardSchema>;
