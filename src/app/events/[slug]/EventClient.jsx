"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Heart,
  ArrowLeft,
  Share2,
  Users,
} from "lucide-react";

export default function EventClient({ event }) {
 
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(
    event.images?.[0] || event.thumbnail,
  );

  return (
    <main className="min-h-screen bg-white pb-20 font-sans text-[#0F172A]">
    
      <div className="relative w-full h-[40vh] md:h-[60vh] bg-slate-100">
        <Image
          src={event.thumbnail}
          alt="Main Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-6 left-6">
          <Link
            href="/events"
            className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-[#1E293B] font-bold text-sm shadow-lg hover:bg-emerald-600 hover:text-white transition-all"
          >
            <ArrowLeft size={18} /> Back
          </Link>
        </div>
      </div>

    
      <div className="container mx-auto px-4 max-w-4xl pt-12">
        <div className="flex flex-col gap-8">
   
          <div className="flex flex-wrap items-center gap-5 text-[#475569] text-[12px] font-bold uppercase tracking-widest">
            <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-lg">
              {event.category}
            </span>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-emerald-600" /> {event.date}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-emerald-600" /> {event.location}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight tracking-tight uppercase">
            {event.title}
          </h1>

      
          <div className="space-y-8">
            <p className="text-2xl text-[#1E293B] font-extrabold leading-relaxed border-l-8 border-emerald-500 pl-6 py-2 bg-slate-50 rounded-r-2xl">
              {event.shortDesc}
            </p>
            <div className="text-[#334155] text-lg md:text-xl leading-[1.8] whitespace-pre-line font-medium text-justify">
              {event.fullDetails}
            </div>
          </div>

    
          <div className="bg-[#0F172A] rounded-3xl p-8 md:p-10 my-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20">
                <Users className="text-white" size={32} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-[0.2em] mb-1">
                  Impacted
                </p>
                <p className="text-3xl font-black text-white">
                  {event.impactCount}
                </p>
              </div>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                <Heart size={20} fill="currentColor" /> Donate Now
              </button>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?`}
                target="_blank"
              >
                <button className="p-5 bg-white/10 border border-white/10 rounded-2xl text-white hover:bg-white/20 transition-all">
                  <Share2 size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>

      
        <div className="mt-24 border-t border-slate-100 pt-16">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-black text-[#0F172A] uppercase tracking-tighter">
              Event Gallery
            </h2>
            <p className="text-slate-500 font-bold text-sm mt-2 uppercase tracking-widest">
              Ground reality of our missions
            </p>
          </div>

        
          <div className="relative w-full h-[300px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white mb-8">
            <Image
              src={selectedGalleryImg}
              alt="Gallery Preview"
              fill
              className="object-cover transition-all duration-500"
            />
          </div>

       
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {event.images?.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedGalleryImg(img)}
                className={`relative w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden cursor-pointer transition-all border-4 ${
                  selectedGalleryImg === img
                    ? "border-emerald-500 scale-110 shadow-lg z-10"
                    : "border-white opacity-60 hover:opacity-100 hover:border-emerald-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`thumb-${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
