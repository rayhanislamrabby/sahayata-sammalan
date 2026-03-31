"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import partner1 from "../../../../public/patners/C3ER.png";
import partner2 from "../../../../public/patners/im.png";
import partner3 from "../../../../public/patners/ima.png";
import partner4 from "../../../../public/patners/imag.png";
import partner5 from "../../../../public/patners/images.png";
import partner6 from "../../../../public/patners/imagesss.png";

const partners = [
  { id: 1, src: partner1, name: "Climate Frontier" },
  { id: 2, src: partner2, name: "Global Platform Bangladesh" },
  { id: 3, src: partner3, name: "Dhaka North City Corporation" },
  { id: 4, src: partner4, name: "C3ER (BRAC University)" },
  { id: 5, src: partner5, name: "Waterkeepers Bangladesh" },
  { id: 6, src: partner6, name: "Brighters" },
];

export default function Partners() {
  return (
    <section className="py-15 bg-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
          Our Valued <span className="text-green-600">Partners</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto font-medium ">
          Empowering communities through collective action. We collaborate with
          leading organizations to scale innovative solutions and create a
          lasting social impact throughout the nation.
        </p>
      </div>

      <div className="relative flex items-center">
        <motion.div
          className="flex flex-nowrap gap-8 items-center shrink-0"
          animate={{ x: [0, -1500] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="group relative w-56 h-32 flex items-center justify-center p-8 bg-slate-50 rounded-4xl border border-slate-100 transition-all duration-500 overflow-hidden cursor-pointer shrink-0"
            >
              <div className="relative w-full h-full group-hover:opacity-0 group-hover:scale-75 transition-all duration-500 ease-in-out z-10">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/40 backdrop-blur-[2px] z-20">
                <span className="text-[10px] font-black uppercase text-center text-slate-950 leading-tight tracking-tighter break-words">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-30 pointer-events-none" />
      </div>
    </section>
  );
}
