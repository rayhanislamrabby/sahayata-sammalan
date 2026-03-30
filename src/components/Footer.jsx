"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import navLogo from "../../public/assets/navlogo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Brand Section */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 relative bg-white rounded-xl p-1 shadow-sm">
                <Image src={navLogo} fill alt="Sahayata Logo" className="object-contain p-1" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black tracking-tighter text-white">
                  SAHAYATA
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-green-500">
                  SAMMALAN
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-gray-400">
              Amader lokkho holo manush-er pashe darano ebong ekshathe kaj kore ekti shundor somaj toiri kora. Apnar ekti choto shohayata onk boro poriborton ante pare.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="#" className="btn btn-circle btn-sm bg-gray-800 border-none hover:bg-green-600 text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="btn btn-circle btn-sm bg-gray-800 border-none hover:bg-green-600 text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-green-600 pl-3">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-green-500 transition-colors">Our Projects</Link></li>
              <li><Link href="/events" className="hover:text-green-500 transition-colors">Upcoming Events</Link></li>
              <li><Link href="/members" className="hover:text-green-500 transition-colors">Members</Link></li>
            </ul>
          </div>

          {/* 3. Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-green-600 pl-3">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/donate" className="hover:text-green-500 transition-colors">Donate Now</Link></li>
              <li><Link href="/contact" className="hover:text-green-500 transition-colors">Contact Support</Link></li>
              <li><Link href="/faq" className="hover:text-green-500 transition-colors">FAQs</Link></li>
              <li><Link href="/privacy" className="hover:text-green-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-green-600 pl-3">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@sahayata.org</span>
              </li>
              <li className="flex items-center gap-3 font-bold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+880 1234 567 890</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-500">
          <p>© {currentYear} Sahayata Sammalan. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Developed by <span className="text-green-600 font-bold">Your Name</span>
          </div>
        </div>
      </div>
    </footer>
  );
}