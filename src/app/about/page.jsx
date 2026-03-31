"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { label: "Nationwide Impact", value: "40+" },
    { label: "Active Volunteers", value: "3,000+" },
    { label: "Founded Year", value: "2020" },
    { label: "SDGs Aligned", value: "14+" },
  ];

  const programs = [
    {
      title: "Help & Support",
      desc: "Our core mission is to act as a primary support system for orphans and the destitute. We provide long-term rehabilitation, monthly stipends, and emotional support to ensure that no child or helpless individual feels abandoned by society. Every case is handled with 100% transparency and personal care.",
      icon: "🤝",
    },
    {
      title: "Iftar Sharing",
      desc: "During the holy month of Ramadan, our 'Dastarkhwan' project reaches thousands of fasting individuals who struggle to afford a basic meal. We ensure high-quality, nutritious Iftar packs are distributed in hospitals, slums, and streets, fostering a spirit of brotherhood and collective spiritual growth.",
      icon: "🌙",
    },
    {
      title: "Blood Donation",
      desc: "Sahayata Sammalan maintains an active, 24/7 digital blood bank network. We bridge the critical gap between donors and patients during medical emergencies. Our volunteers are trained to coordinate rapid responses for rare blood groups, saving lives across the country every single day.",
      icon: "🩸",
    },
    {
      title: "Cloth Banking",
      desc: "Beyond just giving old clothes, our Cloth Bank focuses on dignity. We collect, clean, and categorize quality apparel for seasonal distribution. During harsh winters, we run specialized 'Warmth Drives' to provide high-quality blankets and winter wear to those sleeping under the open sky.",
      icon: "👕",
    },
    {
      title: "Tree Plantation",
      desc: "Recognizing the climate crisis, we have committed to planting thousands of native fruit-bearing and medicinal trees annually. Our 'Green Shield' initiative involves local youth in nursing these saplings until they are self-sustained, ensuring a cooler and healthier environment for the next generation.",
      icon: "🌳",
    },
    {
      title: "Food Banking",
      desc: "We fight the dual crisis of food waste and hunger. Our team coordinates with event planners and households to collect surplus fresh food, which is then safely redistributed to homeless shelters. We also provide 'Dry Ration Packs' to families facing extreme financial hardship.",
      icon: "🍱",
    },
    {
      title: "Quran Education",
      desc: "Our 'Noor' project provides free, accessible Quranic and ethical education to children who cannot afford traditional Madrasah fees. We focus on teaching the true essence of Islam—peace, honesty, and service to humanity—building a foundation of strong moral character in the youth.",
      icon: "📖",
    },
    {
      title: "Medical Camp",
      desc: "Health is a fundamental right, not a luxury. We organize monthly specialized medical camps featuring expert doctors, free diagnostic tests, and essential medicine distribution. For chronic cases, we provide financial assistance for surgeries and long-term treatments through our welfare fund.",
      icon: "🏥",
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans overflow-hidden">
      <section className="relative py-20 bg-emerald-900 text-white border-b border-emerald-800">
        <div className="container mx-auto px-6 relative z-10 text-center space-y-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-2"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-200">
              Sahayata Sammalan • Est. 2020
            </span>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]"
          >
            Empowering <br />{" "}
            <span className="text-emerald-400 italic">Humanity Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto font-medium text-base md:text-lg leading-relaxed pt-2"
          >
            A dedicated movement born in 2020, Sahayata Sammalan is a global
            family committed to compassion, justice, and sustainable growth for
            all.
          </motion.p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100"
              >
                <h4 className="text-3xl font-black text-emerald-700">
                  {stat.value}
                </h4>
                <p className="text-[9px] uppercase tracking-widest text-emerald-900/40 font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight uppercase tracking-tighter">
                Transparency & <br />{" "}
                <span className="text-emerald-600">Pure Intentions</span>
              </h2>
              <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
                <p>
                  Sahayata Sammalan operates on the principle of{" "}
                  <strong>Amanah</strong> (Trust). We understand that every
                  penny donated is a responsibility we carry. Since 2020, we
                  have optimized our operations to ensure that your support
                  reaches the intended beneficiaries directly, with zero
                  middleman interference.
                </p>
                <p>
                  Our mission is not just to provide temporary relief, but to
                  create a cycle of empowerment where the helped eventually
                  becomes the helper. We are a community-driven platform where
                  every volunteer is a shareholder of the reward (Sadaqah).
                </p>
              </div>
              <div className="pt-4">
                <blockquote className="border-l-4 border-emerald-600 pl-6 italic text-gray-800 font-bold text-xl py-2 bg-emerald-50/50 rounded-r-2xl">
                  Building a bridge between the generous and the needy through
                  integrity.
                </blockquote>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 hover:bg-emerald-50 transition-colors">
                <h3 className="text-lg font-black text-gray-900 mb-2 uppercase tracking-tight">
                  Financial Accountability
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  We maintain open ledgers for our major projects. Donors
                  receive updates and photo proofs of how their contributions
                  changed lives on the ground.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 hover:bg-emerald-50 transition-colors">
                <h3 className="text-lg font-black text-gray-900 mb-2 uppercase tracking-tight">
                  Grassroot Reach
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  Our volunteers live within the communities they serve. This
                  allows us to identify the most silent needy families who never
                  ask for help publicly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">
              Our <span className="text-emerald-600">Legacy of Good</span>
            </h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto italic">
              From spiritual growth to emergency healthcare, our specialized
              wings are dedicated to serving humanity in every possible way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-6 bg-emerald-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {prog.icon}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-4 uppercase tracking-tight group-hover:text-emerald-600">
                  {prog.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                  {prog.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center bg-white">
        <div className="container mx-auto px-6 max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
            Your Trust, <span className="text-emerald-600">Our Motivation</span>
          </h2>
          <p className="text-gray-500 font-medium">
            Join Sahayata Sammalan today and help us write the next chapter of
            human welfare.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-black transition-all"
            >
              Join as Volunteer
            </Link>

            <Link
              href="/donate"
              className="border-2 border-emerald-600 text-emerald-600 px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
