
import { Fragment } from "react/jsx-runtime";
import EventList from "./_components/events/event-list";
import { api } from "~/trpc/server";

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

  const events: events = await api.event.getAllEvents();

  return (
    <Fragment>
      {/* <EventsSearch onSearch={findEventsHandler} /> */}
      <EventList items={events} />
    </Fragment>
  );
}
