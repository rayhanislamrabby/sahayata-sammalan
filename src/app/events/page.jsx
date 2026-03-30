import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

export default async function Events() {
  const eventsCollection = await dbConnect(collectionNameObj.eventCollection);
  const data = await eventsCollection.find({}).toArray();

  if (!data || data.length === 0) return null;

  return (
    <section className="py-20 bg-white font-sans">
      {/* Container width bariye 7xl kora hoyeche (X-axis e boro) */}
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section (Matching Image Style) */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[10px] md:text-xs font-black text-emerald-600 uppercase tracking-[0.3em] mb-4">
            Our Ongoing Events
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-6">
            Latest <span className="text-emerald-600">Impact</span> Events
          </h2>
          <div className="w-12 h-1.5 bg-emerald-500 rounded-full mb-8"></div>
          <p className="text-slate-600 text-sm md:text-lg max-w-2xl leading-relaxed font-medium">
            Providing sustainable solutions through community-driven initiatives in health, education, and emergency relief.
          </p>
        </div>

        {/* Grid with Emerald Border */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((event) => (
            <Link
              key={event._id.toString()}
              href={`/events/${event.slug}`}
              className="group flex flex-col bg-white border-2 border-emerald-500 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={event.thumbnail || (event.images && event.images[0])}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg">
                    {event.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin size={14} className="text-emerald-500" />
                    <span className="text-xs font-medium">
                      {event.location}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {event.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-3">
                  {event.shortDesc}
                </p>

                {/* Footer Section */}
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                      Contribution
                    </p>
                    <p className="text-lg font-black text-slate-800">
                      {event.impactCount}
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}