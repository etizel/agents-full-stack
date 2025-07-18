import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { db } from '../../db/connection.ts'
import { schema } from '../../db/schema/index.ts'
 
// biome-ignore lint/suspicious/useAwait: <this is an async route handler>
 export const getRoomsRoute: FastifyPluginAsyncZod = async (app) => {
  app.get('/rooms', async()  => {
    const result = await db.select({
      id: schema.rooms.id,
      name: schema.rooms.name,
      description: schema.rooms.description,
    }).from(schema.rooms).orderBy(schema.rooms.createdAt)

    return result
  } )
}