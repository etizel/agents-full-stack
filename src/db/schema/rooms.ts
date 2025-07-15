import { create } from "domain";
import { name } from "drizzle-orm";
import { pgTable, PgTimestamp, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const rooms = pgTable('rooms', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  description: text(),
  createdAt: timestamp().notNull().defaultNow(),

})