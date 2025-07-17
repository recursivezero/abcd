import { z } from 'zod';

export const subscriptionSchema = z.object({
  followerId: z.string().min(1, "Follower ID is required"),
  followingId: z.string().min(1, "Following ID is required"),
});