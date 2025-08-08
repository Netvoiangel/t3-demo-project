CREATE TABLE `events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`date` integer NOT NULL,
	`location` text NOT NULL,
	`createdAt` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
DROP TABLE `t3-demo-project_post`;