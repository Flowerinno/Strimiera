import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.string().min(4).default('development'),
  PORT: z.coerce.number().optional().default(8000),
  DATABASE_URL: z.string().min(1),
  MOVIEDB_API_KEY: z.string().min(1),
  JWT_SECRET: z.string().min(1),
  COOKIE_SECRET: z.string().min(1),
});

export type Env = z.infer<typeof envSchema>;
