import { z } from 'zod';

export const createUserSchema = z.object({
    username: z.string(),
    phoneNumber: z.string().min(10).optional(),
    password: z.string().min(4),
});

export const updateUserSchema = z.object({
    username: z.string(),
    phoneNumber: z.string().min(10).optional(),
    password: z.string().min(4),
});
