// import Link from "next/link";

// import { LatestPost } from "~/app/_components/post";
// import { HydrateClient, api } from "~/trpc/server";
// import styles from "./index.module.css";

// export default async function Home() {
//   const hello = await api.post.hello({ text: "from tRPC" });

//   void api.post.getLatest.prefetch();

//   return (
//     <HydrateClient>
//       <main className={styles.main}>
//         <div className={styles.container}>
//           <h1 className={styles.title}>
//             Create <span className={styles.pinkSpan}>T3</span> App
//           </h1>
//           <div className={styles.cardRow}>
//             <Link
//               className={styles.card}
//               href="https://create.t3.gg/en/usage/first-steps"
//               target="_blank"
//             >
//               <h3 className={styles.cardTitle}>First Steps →</h3>
//               <div className={styles.cardText}>
//                 Just the basics - Everything you need to know to set up your database and
//                 authentication.
//               </div>
//             </Link>
//             <Link
//               className={styles.card}
//               href="https://create.t3.gg/en/introduction"
//               target="_blank"
//             >
//               <h3 className={styles.cardTitle}>Documentation →</h3>
//               <div className={styles.cardText}>
//                 Learn more about Create T3 App, the libraries it uses, and how to deploy it.
//               </div>
//             </Link>
//           </div>
//           <div className={styles.showcaseContainer}>
//             <p className={styles.showcaseText}>
//               {hello ? hello.greeting : "Loading tRPC query..."}
//             </p>
//           </div>

//           <LatestPost />
//         </div>
//       </main>
//     </HydrateClient>
//   );
// }

import { drizzle } from "drizzle-orm/libsql";
import { events } from "~/server/db/schema";

type events = {
  id: number;
  title: string;
  description: string;
  date: Date;
  location: string;
  createdAt: Date | null;
}[];

export default async function Home() {
  const db = drizzle(process.env.DATABASE_URL!);

  const allEvents: events = await db.select().from(events);
  console.log(allEvents);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {allEvents.map((event) => (
          <li key={event.id}>
            {event.title}: {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
