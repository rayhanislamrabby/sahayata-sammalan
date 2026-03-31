"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaEnvelope, FaUndoAlt, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6 relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#009661]/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#009661]/5 blur-[100px] rounded-full"></div>

      <div className="max-w-xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl md:text-9xl font-black text-white/10 uppercase tracking-tighter select-none">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Page not <span className="text-[#009661]">found</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-bold mb-12 leading-relaxed uppercase tracking-[0.15em] max-w-md mx-auto">
            Sorry, we couldnt find the page you were looking for.{" "}
            <br className="hidden md:block" />
            You may have entered the wrong link.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/" className="w-full sm:w-auto">
            <button className="w-full flex items-center justify-center gap-3 px-10 py-4 bg-[#009661] text-white font-black uppercase text-[11px] tracking-[0.2em] rounded-xl hover:shadow-[0_15px_40px_-10px_rgba(0,150,97,0.5)] transition-all active:scale-95 group">
              <FaHome className="text-sm group-hover:-translate-x-1 transition-transform" />
              Back to home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full flex items-center justify-center gap-3 sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white font-black uppercase text-[11px] tracking-[0.2em] rounded-xl hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 group"
          >
            <FaUndoAlt className="text-xs group-hover:rotate-x-45 transition-transform" />
            Return
          </button>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5">
          <p className="text-gray-500 text-[9px] font-black uppercase tracking-[0.3em] mb-6">
            Need immediate help?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-white/40 font-black uppercase text-[10px] tracking-[0.25em] hover:text-[#009661] transition-all group"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#009661]/20 transition-colors">
              <FaEnvelope className="text-[#009661]" />
            </div>
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
