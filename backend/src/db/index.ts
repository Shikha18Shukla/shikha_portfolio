import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema.js'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('DATABASE_URL is not set. Copy .env.example to .env and fill it in.')
}

// A small connection pool is plenty for a portfolio contact form.
const client = postgres(connectionString, { max: 5 })

export const db = drizzle(client, { schema })
