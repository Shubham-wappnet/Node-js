/* eslint-disable prettier/prettier */
import { z } from 'zod';

export const createUserSchema = z
  .object({
    id:z.number(),
    name: z.string(),
    email:z.string(),
    age: z.number(),
    hobby: z.string(),
  })
  .required();

export type CreateUserDto = z.infer<typeof createUserSchema>;