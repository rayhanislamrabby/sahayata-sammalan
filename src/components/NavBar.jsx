"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import navLogo from "../../public/assets/navlogo.png";

export default function NavBar() {
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
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="navbar container mx-auto px-4 min-h-[75px]">
        
        {/* 1. Mobile & Logo Section */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 mr-2 hover:bg-green-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl bg-white rounded-2xl w-64 border border-green-50 gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="py-3 font-bold text-gray-700 hover:text-green-600 hover:bg-green-50 active:bg-green-100">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform">
            <div className="w-11 h-11 relative bg-green-50 rounded-xl p-1 shadow-sm border border-green-100">
              <Image src={navLogo} fill alt="Sahayata Logo" className="object-contain p-1" />
            </div>
            <div className="flex flex-col leading-tight hidden sm:flex">
              <span className="text-xl font-black tracking-tighter text-gray-800">
                SAHAYATA
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-green-600">
                SAMMALAN
              </span>
            </div>
          </Link>
        </div>

        {/* 2. Desktop Navigation (Center) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="px-4 py-2 text-[13px] font-extrabold uppercase tracking-widest text-gray-600 hover:text-green-600 hover:bg-green-50/50 rounded-full transition-all"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Action Button (End) - Green Theme */}
        <div className="navbar-end">
          <Link 
            href="/donate" 
            className="btn bg-green-600 hover:bg-green-700 rounded-full px-10 text-white font-bold border-none shadow-lg shadow-green-200/50 hover:scale-105 active:scale-95 transition-all tracking-wide"
          >
            DONATE
          </Link>
        </div>

      </div>
    </nav>
  );
}