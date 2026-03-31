"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaCheckCircle, FaUniversity, FaTimes, FaMobileAlt, FaHandHoldingHeart, FaWallet } from 'react-icons/fa';

const Donate = () => {
  const [showBankModal, setShowBankModal] = useState(false);

  const paymentMethods = [
    { id: 1, name: "bKash (Personal)", number: "01785305266", color: "text-[#D12053]", bgColor: "bg-[#D12053]/10" },
    { id: 2, name: "Nagad (Merchant)", number: "01XXX-XXXXXX", color: "text-[#F7941D]", bgColor: "bg-[#F7941D]/10" },
    { id: 3, name: "Rocket (Personal)", number: "01XXX-XXXXXX", color: "text-[#8C3494]", bgColor: "bg-[#8C3494]/10" },
  ];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden" id="donate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      
        <div className="text-center mb-10 md:mb-20">
          <p className="text-[#009661] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2">Support Our Cause</p>
          <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tighter leading-tight">
            Make a <span className="text-[#009661]">Donation</span>
          </h2>
          <div className="w-12 md:w-16 h-1 bg-[#009661] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
     
          <div className="flex flex-col items-center lg:items-start space-y-6 md:space-y-8 order-2 lg:order-1 w-full">
            <div className="w-full bg-[#0F172A] p-6 md:p-12 rounded-4xl text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#009661]/10 rounded-bl-full"></div>
               <h3 className="text-xl md:text-3xl font-black uppercase mb-6 flex items-center justify-center lg:justify-start gap-3 tracking-tight">
                  <FaHandHoldingHeart className="text-[#009661] shrink-0" /> Why Donate?
               </h3>
               <ul className="space-y-4 md:space-y-6">
                  {[
                    "100% Transparency in usage",
                    "Direct impact on rural education",
                    "Tax exemption benefits available"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start justify-center lg:justify-start gap-3 text-gray-300 font-bold text-sm md:text-lg leading-snug text-center lg:text-left">
                      <FaCheckCircle className="text-[#009661] mt-1 shrink-0" size={18} /> 
                      <span className="words">{text}</span>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 p-4 border border-slate-100 rounded-2xl bg-slate-50 w-full max-w-md lg:max-w-none">
                <FaHeart className="text-red-500 animate-pulse shrink-0" size={20} />
                <p className="text-[#0F172A] font-black uppercase tracking-widest text-[9px] md:text-xs">Every Taka counts for a childs future</p>
            </div>
          </div>

   
          <div className="w-full bg-white border border-slate-100 p-6 md:p-10 rounded-4xl shadow-xl order-1 lg:order-2">
            <h3 className="text-lg md:text-2xl font-black text-[#0F172A] uppercase mb-6 flex items-center justify-center lg:justify-start gap-2 tracking-tighter text-center lg:text-left">
              <FaWallet className="text-[#009661] shrink-0" /> 
              <span>Together We Can <span className="text-[#009661]">Change Lives</span></span>
            </h3>

            <div className="space-y-3 md:space-y-4">
       
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="p-3 md:p-4 border border-slate-100 rounded-xl bg-slate-50 flex items-center gap-3 transition-all hover:border-[#009661] hover:bg-white">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${method.bgColor} flex items-center justify-center ${method.color} shrink-0`}>
                      <FaMobileAlt size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[#0F172A] font-bold text-[9px] uppercase opacity-60 leading-none mb-1 truncate">{method.name}</p>
                      <p className="text-[#0F172A] font-black text-xs md:text-base tracking-tight break-all leading-tight">{method.number}</p>
                    </div>
                  </div>
                ))}
              </div>
              
       
              <button 
                onClick={() => setShowBankModal(true)}
                className="p-4 md:p-5 border-2 border-dashed border-[#0F172A]/20 rounded-xl bg-[#0F172A]/5 flex items-center justify-between transition-all hover:border-[#009661] group w-full mt-2"
              >
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg bg-[#0F172A] flex items-center justify-center text-white shrink-0 group-hover:bg-[#009661] transition-colors shadow-md">
                    <FaUniversity size={20} className="md:size-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#0F172A] font-black text-xs md:text-base tracking-tighter uppercase leading-none mb-1">Bank Transfer</p>
                    <p className="text-[#009661] font-bold text-[9px] md:text-[10px] uppercase tracking-wider">Click for info</p>
                  </div>
                </div>
                <FaCheckCircle className="text-[#009661] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" size={16} />
              </button>
            </div>

            <p className="text-center text-gray-400 text-[8px] md:text-[10px] mt-6 uppercase tracking-[0.3em] font-black opacity-40">
               Secure Payment Gateway
            </p>
          </div>

        </div>
      </div>

 
      <AnimatePresence>
        {showBankModal && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowBankModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white w-full max-w-[90%] sm:max-w-md rounded-3xl shadow-2xl overflow-hidden p-6 md:p-10 border border-slate-100"
            >
              <button onClick={() => setShowBankModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 p-2 bg-slate-50 rounded-full">
                <FaTimes size={16} />
              </button>
              <div className="text-center mb-6 md:mb-8">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-[#009661]/10 rounded-full flex items-center justify-center mx-auto mb-3 text-[#009661]">
                  <FaUniversity size={28} className="md:size-9" />
                </div>
                <h3 className="text-lg md:text-2xl font-black text-[#0F172A] uppercase tracking-tighter">Bank Info</h3>
              </div>
              <div className="space-y-4 bg-slate-50 p-5 md:p-8 rounded-2xl border border-slate-200/50">
                <div className="break-words">
                  <p className="text-[8px] md:text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Account Name</p>
                  <p className="text-[#0F172A] font-bold text-xs md:text-sm uppercase leading-tight">Sahayata Sammalan Foundation</p>
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Account Number</p>
                  <p className="text-[#009661] font-black text-lg md:text-2xl tracking-tighter leading-none break-all">123.456.789.000</p>
                </div>
                <div className="break-words">
                  <p className="text-[8px] md:text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Bank & Branch</p>
                  <p className="text-[#0F172A] font-bold text-xs md:text-sm uppercase leading-tight">Dutch-Bangla Bank PLC <br/><span className="text-gray-400 text-[10px] font-medium lowercase italic">Banani Branch</span></p>
                </div>
              </div>
              <button onClick={() => setShowBankModal(false)} className="w-full mt-6 md:mt-8 bg-[#0F172A] text-white font-black py-4 rounded-xl uppercase tracking-widest text-[9px] md:text-[10px] hover:bg-[#009661] active:scale-95 transition-all">
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Donate;