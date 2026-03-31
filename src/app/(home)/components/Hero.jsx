"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Hero() {
  const slides = [
    {
      // Direct Image Link
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
      title: "Empowering Lives for a Better Future",
      description: "Our mission is to stand by the underprivileged and work together for dignity.",
      buttonText: "Our Vision",
      buttonLink: "/about",
    },
    {
     
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070",
      title: "Your Small Act Can Change a Life",
      description: "Every contribution brings us closer to a world with quality education for all.",
      buttonText: "Join Us",
      buttonLink: "/contact",
    },
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013",
      title: "Building a Greener Tomorrow Together",
      description: "Join our environmental initiatives to ensure a sustainable future.",
      buttonText: "Projects",
      buttonLink: "/projects",
    },
  ];

  return (
    <section className="bg-white overflow-hidden">
      <Swiper
        effect={"fade"}
        speed={1500} 
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        className="mySwiper h-[80vh] md:h-[90vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative w-full h-full overflow-hidden">
             
                <motion.div 
                  className="absolute inset-0"
                  initial={{ scale: 1.2 }} 
                  animate={isActive ? { scale: 1 } : { scale: 1.2 }}
                  transition={{ duration: 6, ease: "easeOut" }} 
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover brightness-[0.5]"
                    priority={index === 0}
                  />
                </motion.div>

            
                <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center text-white bg-black/30">
                  
                  <div className="max-w-4xl mx-auto flex flex-col items-center">
                
                    {/* <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-green-500 font-bold tracking-[0.3em] uppercase text-[9px] mb-3 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5"
                    >
                      Sahayata Sammalan
                    </motion.span> */}

                
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

              
                    <motion.p 
                      initial={{ opacity: 0, y: 15 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-sm md:text-base font-medium mb-8 max-w-xl text-gray-200 opacity-90 leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      className="flex gap-4"
                    >
                      <a href={slide.buttonLink} className="bg-green-600 hover:bg-white hover:text-green-600 px-8 py-3.5 rounded-full text-white font-bold text-[10px] uppercase tracking-widest transition-all">
                        {slide.buttonText}
                      </a>
                      <a href="/donate" className="border border-white/40 hover:bg-white hover:text-black px-8 py-3.5 rounded-full text-white font-bold text-[10px] uppercase tracking-widest transition-all">
                        Donate Now
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet { background: white !important; height: 3px; width: 15px; border-radius: 2px; }
        .swiper-pagination-bullet-active { background: #16a34a !important; width: 30px; }
      `}</style>
    </section>
  );
}