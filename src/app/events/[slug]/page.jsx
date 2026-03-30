import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { notFound } from "next/navigation";
import EventClient from "./EventClient";

export default async function EventPage({ params }) {
  const { slug } = await params;

  // 1. Database connection logic
  const eventsCollection = await dbConnect(collectionNameObj.eventCollection);
  
  // 2. Slug diye specific data khunje ber kora
  const eventData = await eventsCollection.findOne({ slug: slug });

  if (!eventData) return notFound();

  // 3. MongoDB object-ke plain JSON-e convert kora (Next.js requirement)
  const event = JSON.parse(JSON.stringify(eventData));

  return <EventClient event={event} />;
}