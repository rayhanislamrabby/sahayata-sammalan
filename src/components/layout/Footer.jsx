"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import navLogo from "../../../public/assets/navlogo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, color: "hover:bg-[#1877F2]", href: "#" },
    { icon: <FaTwitter />, color: "hover:bg-[#1DA1F2]", href: "#" },
    { icon: <FaInstagram />, color: "hover:bg-[#E4405F]", href: "#" },
    { icon: <FaLinkedinIn />, color: "hover:bg-[#0A66C2]", href: "#" },
    { icon: <FaYoutube />, color: "hover:bg-[#FF0000]", href: "#" },
  ];

  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-12 pb-6 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* 1. Brand Section */}
          <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 relative bg-white rounded-xl p-1.5 shadow-md group-hover:-rotate-3 transition-transform">
                <Image
                  src={navLogo}
                  fill
                  alt="Sahayata Logo"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter text-white uppercase">
                  SAHAYATA
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#009661] uppercase">
                  SAMMALAN
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-gray-400 font-medium">
              Standing by humanity, building a better future together through
              education and care.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-1">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white text-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Links Wrapper (Mobile: 2 Columns | Desktop: Individual Columns) */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-8">
            {/* Navigation */}
            <div className="text-left">
              <h3 className="text-white font-black text-base mb-6 uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#009661]"></span> Navigation
              </h3>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#009661] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-[#009661] transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="hover:text-[#009661] transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-[#009661] transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="text-left">
              <h3 className="text-white font-black text-base mb-6 uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#009661]"></span> Support
              </h3>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
                <li>
                  <Link
                    href="/donate"
                    className="hover:text-[#009661] transition-colors"
                  >
                    Donate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-[#009661] transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#009661] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-[#009661] transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Contact Info */}
          <div className="text-center lg:text-left pt-6 lg:pt-0 border-t border-white/5 lg:border-none">
            <h3 className="text-white font-black text-base mb-6 uppercase tracking-widest flex items-center justify-center lg:justify-start gap-2">
              <span className="w-6 h-[2px] bg-[#009661]"></span> Contact
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex flex-col lg:flex-row items-center gap-2 text-gray-400">
                <span className="text-[#009661] font-black tracking-widest">
                  ADDRESS:
                </span>
                <span className="font-medium">Dhaka, Bangladesh</span>
              </li>
              <li className="flex flex-col lg:flex-row items-center gap-2 text-gray-400">
                <span className="text-[#009661] font-black tracking-widest">
                  EMAIL:
                </span>
                <span className="font-medium">info@sahayata.org</span>
              </li>
              <li className="flex flex-col lg:flex-row items-center gap-2 text-white">
                <span className="text-[#009661] font-black tracking-widest">
                  PHONE:
                </span>
                <span className="tracking-widest font-black">
                  +880 1234 567 890
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
          <p>© {currentYear} Sahayata Sammalan. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            Developed By:{" "}
            <span className="text-[#009661] font-black hover:underline cursor-pointer">
              <Link
                href="https://rabby-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RABBY
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
