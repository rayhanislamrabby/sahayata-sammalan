"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const MemberCard = ({ member }) => {
  const { name, designation, image, description, social } = member;

  return (
    <div 
      className="relative bg-white border border-slate-200 shadow-md overflow-hidden flex flex-col items-center p-4 rounded-xl w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
 
      <div className="relative w-full aspect-square mb-4 overflow-hidden bg-gray-50 border border-slate-100 rounded-lg">
        <Image
          src={image || "/placeholder.jpg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>


      <div className="flex flex-col grow text-center w-full">
 
        <h3 className="text-[16px] font-bold text-[#0F172A] leading-tight mb-1 uppercase tracking-tight">
          {name}
        </h3>
        <p className="text-[#009661] font-semibold text-[11px] uppercase tracking-wider mb-3">
          {designation}
        </p>
        
   
        {description && (
          <p className="text-[#475569] text-[12px] leading-snug mb-4 font-normal border-t pt-3 border-slate-100 line-clamp-2">
            {description}
          </p>
        )}
      </div>

   
      <div className="mt-auto flex items-center justify-center gap-5 border-t border-slate-100 w-full pt-4">
        <a href={social?.facebook || "#"} target="_blank" rel="noopener noreferrer" className="text-[#0F172A] hover:text-[#009661] text-base transition-colors">
          <FaFacebookF />
        </a>
        <a href={social?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="text-[#0F172A] hover:text-[#009661] text-base transition-colors">
          <FaLinkedinIn />
        </a>
        <a href={social?.twitter || "#"} target="_blank" rel="noopener noreferrer" className="text-[#0F172A] hover:text-[#009661] text-base transition-colors">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default MemberCard;