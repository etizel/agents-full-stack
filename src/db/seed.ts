import { reset, seed } from 'drizzle-seed'
import { schema } from './schema/index.ts'
import { db } from './connection.ts'

await reset(db, schema)
await seed(db, schema)