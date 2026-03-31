"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    { id: "fb", icon: <FaFacebookF />, url: "#" },
    { id: "li", icon: <FaLinkedinIn />, url: "#" },
    { id: "tw", icon: <FaTwitter />, url: "#" },
  ];

  const contactDetails = [
    {
      id: 1,
      title: "Call Us",
      value: "+880 1234 567 890",
      icon: <FaPhoneAlt size={18} />,
    },
    {
      id: 2,
      title: "Email Us",
      value: "info@sohozogita.com",
      icon: <FaEnvelope size={18} />,
    },
    {
      id: 3,
      title: "Location",
      value: "Dhaka, Bangladesh",
      icon: <FaMapMarkerAlt size={18} />,
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-[#009661] font-bold text-xs uppercase tracking-[0.3em] mb-2 text-center">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tighter text-center">
            Contact <span className="text-[#009661]">Us</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#009661] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-[#0F172A] mb-6 uppercase tracking-tight">
                Contact Information
              </h3>
              <p className="text-gray-500 text-sm mb-10 font-medium">
                Have questions or want to collaborate? Reach out to us through
                any of these channels.
              </p>

              <div className="space-y-8">
                {contactDetails.map((item) => (
                  <div key={item.id} className="flex items-start gap-5 group">
                    <div className="bg-[#009661] p-3.5 rounded-xl text-white shadow-lg shadow-green-100 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-lg font-bold text-[#0F172A]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-10 mt-10 border-t border-slate-100">
              <h4 className="text-[#0F172A] text-xs uppercase tracking-wider font-black mb-5">
                Follow Our Socials
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    whileHover={{ y: -3 }}
                    className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center transition-all text-[#0F172A] hover:bg-[#009661] hover:text-white hover:border-[#009661] shadow-sm"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-2xl shadow-md">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#0F172A] text-[11px] uppercase font-black mb-2 tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#009661] focus:ring-1 focus:ring-[#009661] outline-none transition-all text-sm bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-[#0F172A] text-[11px] uppercase font-black mb-2 tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#009661] focus:ring-1 focus:ring-[#009661] outline-none transition-all text-sm bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#0F172A] text-[11px] uppercase font-black mb-2 tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject of your message"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#009661] focus:ring-1 focus:ring-[#009661] outline-none transition-all text-sm bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-[#0F172A] text-[11px] uppercase font-black mb-2 tracking-wider">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#009661] focus:ring-1 focus:ring-[#009661] outline-none transition-all text-sm resize-none bg-slate-50/50"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#009661] text-white font-black py-4 rounded-xl shadow-lg shadow-green-100 hover:bg-[#0F172A] transition-all uppercase tracking-[0.2em] text-xs"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
