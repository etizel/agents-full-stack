import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { rooms } from "./rooms.ts";

export const questions = pgTable('questions', {
  roomId: uuid().references(() => rooms.id).notNull(),
  id: uuid().primaryKey().defaultRandom(),
  question: text().notNull(),
  answer: text(),
  createdAt: timestamp().notNull().defaultNow(),

})