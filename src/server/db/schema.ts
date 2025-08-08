import { sql } from "drizzle-orm";
import { sqliteTable } from "drizzle-orm/sqlite-core";

export const events = sqliteTable('events', 
	(d) => ({
		id: d.integer("id", {mode: 'number'}).primaryKey({autoIncrement: true}),
		title: d.text("title").notNull(),
		description: d.text('description').notNull(),
		date: d.integer('date', { mode: 'timestamp'}).notNull(),
		location: d.text('location').notNull(),
		createdAt: d.integer('createdAt', { mode: 'timestamp' }).default(sql`(unixepoch())`)
	})
)