"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How can I make a donation to Sahayata?",
    answer: "You can donate easily through our website using bKash, Nagad, or Bank Transfer. Visit our 'Donate' page to see all available payment methods and secure gateways."
  },
  {
    question: "Is my personal and payment information secure?",
    answer: "Absolutely. We use industry-standard SSL encryption to ensure your data is 100% secure. We never store your credit card information on our servers."
  },
  {
    question: "Where does my donated money go?",
    answer: "Every penny you donate is used for our active projects like child education, healthcare support, and emergency relief funds. We maintain 100% transparency with our audit reports."
  },
  {
    question: "Can I join as a volunteer or member?",
    answer: "Yes! We are always looking for passionate people. You can apply through our 'Members' page or send us an email with your interests and skills."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#009661] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
            Common Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mt-2 uppercase tracking-tighter">
            Frequently Asked <span className="text-[#009661] italic">Questions</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#009661] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-[20px] transition-all duration-300 ${
                activeIndex === index ? "border-[#009661] shadow-xl shadow-green-50" : "border-gray-100 bg-gray-50/50"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`text-sm md:text-base font-black uppercase tracking-tight transition-colors ${
                  activeIndex === index ? "text-[#009661]" : "text-[#0F172A]"
                }`}>
                  {item.question}
                </span>
                <span className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-[#009661]" : "text-gray-400"}`}>
                  {activeIndex === index ? <FaMinus size={18} /> : <FaPlus size={18} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed font-medium">
                      <div className="pt-2 border-t border-gray-100">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}