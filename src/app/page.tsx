import { drizzle } from "drizzle-orm/libsql";

import { Fragment } from "react/jsx-runtime";
import { events } from "~/server/db/schema";
import EventList from "./_components/events/event-list";

type events = {
  id: number;
  title: string;
  description: string;
  date: Date;
  location: string;
  createdAt: Date | null;
}[];

export default async function AllEventsPage() {
  // const events = getAllEvents();


  // function findEventsHandler(year, month) {
  //     const fullpath = `/events/${year}/${month}`;

  //     router.push(fullpath);
  // }

  const db = drizzle(process.env.DATABASE_URL!);

  const allEvents: events = await db.select().from(events);

  return (
    <Fragment>
      {/* <EventsSearch onSearch={findEventsHandler} /> */}
      <EventList items={allEvents} />
    </Fragment>
  );
}
