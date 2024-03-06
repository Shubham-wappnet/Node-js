/* eslint-disable prettier/prettier */
import { z } from 'zod';
//import { IsEmail,IsString,IsNumber } from "class-validator";
export const createcatSchema = z
  .object({
    name: z.string(),
    age: z.number(),
    breed: z.string(),
    imageUrl:z.string()
  })
  .required();

export type CreateCatDto = z.infer<typeof createcatSchema>;