"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ProjectGallery = ({
  images,
  videos,
  imagePagination,
  videoPagination,
}) => {
  const [activeTab, setActiveTab] = useState("image");
  const [activeCategory, setActiveCategory] = useState("All");

  const [selectedImgIdx, setSelectedImgIdx] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    "All",
    ...new Set(images.map((img) => img.category).filter(Boolean)),
  ];
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const nextImg = () =>
    setSelectedImgIdx((prev) => (prev + 1) % filteredImages.length);
  const prevImg = () =>
    setSelectedImgIdx(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length,
    );

  return (
    <div className="w-full">
      <div className="flex justify-center mb-12">
        <div className="bg-white p-1 rounded-full border shadow-sm flex overflow-hidden">
          {["image", "video"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setActiveCategory("All");
              }}
              className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === tab
                  ? "bg-emerald-600 text-white"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab === "image" ? "Pictures" : "Videos"}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {activeTab === "image" && (
          <aside className="w-full lg:w-56">
            <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm sticky top-24">
              <h3 className="text-[10px] font-black uppercase text-black mb-4 px-2 tracking-[0.2em]">
                Categories
              </h3>

              <div className="flex flex-col gap-1">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;

                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`group relative flex items-center gap-3 px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-tighter transition-all duration-300
              ${
                isActive
                  ? "bg-[#009661] text-emerald-950 shadow-md shadow-[#009661]/20"
                  : "text-slate-500 hover:bg-slate-50 hover:text-black"
              }`}
                    >
                      <div
                        className={`w-1 h-3 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-white"
                            : "bg-slate-200 group-hover:bg-slate-400"
                        }`}
                      />

                      <span className="relative z-10">{cat}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        )}

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {(activeTab === "image" ? filteredImages : videos).map(
              (item, idx) => (
                <motion.div
                  layout
                  key={item._id}
                  onClick={() =>
                    activeTab === "image"
                      ? setSelectedImgIdx(idx)
                      : setSelectedVideo(item)
                  }
                  className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                    <Image
                      src={item.type === "video" ? item.thumbnail : item.src}
                      alt={item.title || "Gallery Item"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <svg
                            className="w-6 h-6 fill-emerald-600 ml-1"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-800 text-sm uppercase truncate">
                      {item.title || item.category || "Untitled Mission"}
                    </h3>
                  </div>
                </motion.div>
              ),
            )}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            {[
              ...Array(
                activeTab === "image"
                  ? imagePagination.total
                  : videoPagination.total,
              ),
            ].map((_, i) => (
              <Link
                key={i}
                href={`/gallery?${activeTab === "image" ? `p=${i + 1}&vp=${videoPagination.current}` : `p=${imagePagination.current}&vp=${i + 1}`}`}
                className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold text-xs transition ${
                  (activeTab === "image"
                    ? imagePagination.current
                    : videoPagination.current) ===
                  i + 1
                    ? "bg-emerald-600 text-white"
                    : "bg-white border text-slate-400"
                }`}
              >
                {i + 1}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImgIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImgIdx(null)}
              className="absolute top-8 right-8 text-white text-4xl"
            >
              &times;
            </button>
            <button
              onClick={prevImg}
              className="absolute left-4 md:left-10 text-white bg-white/10 p-4 rounded-full"
            >
              ❮
            </button>

            <motion.div
              key={selectedImgIdx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-5xl h-[75vh] text-center"
            >
              <Image
                src={filteredImages[selectedImgIdx].src}
                alt="Popup Image"
                fill
                sizes="100vw"
                className="object-contain rounded-lg shadow-2xl"
              />
              <p className="absolute bottom-10 left-0 right-0 text-white font-bold uppercase tracking-widest text-center">
                {filteredImages[selectedImgIdx].category}
              </p>
            </motion.div>

            <button
              onClick={nextImg}
              className="absolute right-4 md:right-10 text-white bg-white/10 p-4 rounded-full"
            >
              ❯
            </button>
          </motion.div>
        )}

        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-8 right-8 text-white text-4xl"
            >
              &times;
            </button>
            <div className="w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeUrl?.split("v=")[1] || selectedVideo.youtubeUrl?.split("/").pop()}`}
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;
