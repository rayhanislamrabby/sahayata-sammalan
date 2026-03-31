import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { notFound } from "next/navigation";
import EventClient from "./EventClient";

export default async function EventPage({ params }) {
  const { slug } = await params;

  const eventsCollection = await dbConnect(collectionNameObj.eventCollection);

  const eventData = await eventsCollection.findOne({ slug: slug });

  if (!eventData) return notFound();


  const event = JSON.parse(JSON.stringify(eventData));

  return <EventClient event={event} />;
}