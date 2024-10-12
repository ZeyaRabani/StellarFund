import { pgTable, text, varchar, numeric, integer, timestamp, serial } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"




export const projects = pgTable("projects", {
	projectId: text("project_id").primaryKey().notNull(),
	userId: text("user_id").notNull(),
	title: varchar({ length: 255 }).notNull(),
	description: text().notNull(),
	fundingGoal: numeric("funding_goal", { precision: 20, scale: 2 }).notNull(),
	tokenSymbol: varchar("token_symbol", { length: 10 }).notNull(),
	totalTokens: integer("total_tokens").notNull(),
	status: varchar({ length: 50 }).default('active'),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
});

export const investments = pgTable("investments", {
	investmentId: serial("investment_id").primaryKey().notNull(),
	userId: text("user_id").notNull(),
	projectId: text("project_id").notNull(),
	amountInvested: numeric("amount_invested", { precision: 20, scale: 2 }).notNull(),
	tokensReceived: integer("tokens_received").notNull(),
	investedAt: timestamp("invested_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
});

export const voting = pgTable("voting", {
	voteId: serial("vote_id").primaryKey().notNull(),
	investmentId: serial("investment_id").notNull(),
	userId: text("user_id").notNull(),
	vote: varchar({ length: 10 }).notNull(),
	votedAt: timestamp("voted_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
});