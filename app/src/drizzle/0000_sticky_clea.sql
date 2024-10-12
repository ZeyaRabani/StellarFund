-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "projects" (
	"project_id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"funding_goal" numeric(20, 2) NOT NULL,
	"token_symbol" varchar(10) NOT NULL,
	"total_tokens" integer NOT NULL,
	"status" varchar(50) DEFAULT 'active',
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "investments" (
	"investment_id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"project_id" text NOT NULL,
	"amount_invested" numeric(20, 2) NOT NULL,
	"tokens_received" integer NOT NULL,
	"invested_at" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "voting" (
	"vote_id" serial PRIMARY KEY NOT NULL,
	"investment_id" serial NOT NULL,
	"user_id" text NOT NULL,
	"vote" varchar(10) NOT NULL,
	"voted_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

*/