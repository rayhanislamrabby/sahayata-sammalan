"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHandHoldingHeart } from "react-icons/fa";
import navLogo from "../../../public/assets/navlogo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Members", href: "/members" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`sticky top-0 z-[100] w-full transition-all duration-300 bg-white ${
      scrolled ? "shadow-lg py-3" : "shadow-sm py-5"
    } border-b border-gray-100/50`}>
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between">
          
          {/* 1. Mobile Toggle & Logo (Left Section) */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-black hover:bg-gray-100 rounded-xl transition-colors"
            >
              <FaBars size={22} />
            </button>

            <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform group">
              <div className="w-10 h-10 relative bg-gray-50 rounded-xl p-1.5 border border-gray-100 shadow-sm group-hover:border-[#009661] transition-colors">
                <Image src={navLogo} fill alt="Sahayata Logo" className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter text-black uppercase">
                  SAHAYATA
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#009661]">
                  SAMMALAN
                </span>
              </div>
            </Link>
          </div>

          {/* 2. Desktop Navigation (Center - Text Black, Hover Green) */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="px-5 py-2 text-[12px] font-black uppercase tracking-widest text-black hover:text-[#009661] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Action Button (Right Section - Green Button, Hover Shadow) */}
          <div className="flex items-center">
            <Link 
              href="/donate" 
              className="flex items-center gap-2 bg-[#009661] px-6 py-3 rounded-full text-white text-[11px] font-black uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-green-200/60 hover:shadow-xl active:scale-95"
            >
              <FaHandHoldingHeart size={16} />
              <span>Donate</span>
            </Link>
          </div>

        </div>
      </div>

      {/* --- MOBILE SIDEBAR (Left Side) --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-[101]"
            />
            
            <motion.div 
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-[80%] max-w-xs h-screen bg-white lg:hidden z-[102] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col leading-none">
                   <span className="text-xl font-black text-black">SAHAYATA</span>
                   <span className="text-[10px] font-bold text-[#009661] tracking-widest uppercase">Sammalan</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-black p-2 hover:bg-gray-100 rounded-full transition-colors">
                   <FaTimes size={22} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 text-lg font-black text-black hover:text-[#009661] border-b border-gray-50 transition-all"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto">
                <Link 
                  href="/donate" 
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-3 bg-[#009661] py-5 rounded-2xl text-white font-black uppercase tracking-widest active:scale-95 transition-all shadow-lg hover:shadow-green-200"
                >
                  <FaHandHoldingHeart size={20} />
                  Donate Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}