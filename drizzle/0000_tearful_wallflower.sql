CREATE TABLE `events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`image` text NOT NULL,
	`description` text NOT NULL,
	`date` integer NOT NULL,
	`location` text NOT NULL,
	`createdAt` integer DEFAULT (unixepoch())
);
