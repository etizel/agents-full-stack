import postgres from 'postgres';
import { env } from '../env.ts';
// This establishes a connection to the PostgreSQL database using the URL from the environment variables.

export const sql = postgres(env.DATABASE_URL)



