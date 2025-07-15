import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),   
  DATABASE_URL: z.string().url().default('postgres://user:password@localhost:5432/mydb')
});

export const env = envSchema.parse(process.env)

