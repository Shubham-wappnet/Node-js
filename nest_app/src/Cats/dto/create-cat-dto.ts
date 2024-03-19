/* eslint-disable prettier/prettier */
import { z } from 'zod';

export const createcatSchema = z
  .object({
    name: z.string(),
    age: z.number(),
    breed: z.string(),
    imageUrl:z.string().optional(),
    password:z.string()
  }).required();
  export function excludePasswordFromDto(dto: any): any {
    const { password, ...rest } = dto;
    return rest;
  }
  


export type CreateCatDto = z.infer<typeof createcatSchema>;