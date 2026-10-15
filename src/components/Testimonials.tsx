"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, Star, CheckCircle, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import WatermarkOverlay from "./WatermarkOverlay";
import { testimonialsList, ClientTestimonial } from "@/data/testimonialsData";
import { formatGradeLabel } from "@/constants/grades";

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllGrid, setShowAllGrid] = useState(false);
  const [isQuoteExpanded, setIsQuoteExpanded] = useState(false);

  const filteredTestimonials =
    selectedCategory === "ALL"
      ? testimonialsList
      : testimonialsList.filter((item) => item.category === selectedCategory);

  const safeIndex = currentIndex % filteredTestimonials.length;
  const current = filteredTestimonials[safeIndex] || filteredTestimonials[0];

  const handleNext = () => {
    setIsQuoteExpanded(false);
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setIsQuoteExpanded(false);
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const handleSelectFromGrid = (item: ClientTestimonial) => {
    const idx = filteredTestimonials.findIndex((t) => t.id === item.id);
    if (idx !== -1) {
      setIsQuoteExpanded(false);
      setCurrentIndex(idx);
    }
    const sectionEl = document.getElementById("testimonials");
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Helper to split quote into 2-3 sentences on mobile
  const sentences = current.quote.match(/[^.!?]+[.!?]+/g) || [current.quote];
  const isQuoteLong = sentences.length > 2;
  const truncatedQuote = isQuoteLong ? sentences.slice(0, 2).join(" ") : current.quote;

  const categories = [
    { key: "ALL", label: `SEMUA (${testimonialsList.length})` },
    { key: "KOST", label: "RUMAH KOST" },
    { key: "CAFE", label: "CAFE & RESTO" },
    { key: "COMMERCIAL", label: "KOMERSIAL / KANTOR" },
    { key: "RESIDENTIAL", label: "RUMAH TINGGAL" },
    { key: "INTERIOR", label: "INTERIOR CUSTOM" },
    { key: "RENOVASI", label: "RENOVASI" },
  ];

  return (
    <section
      id="testimonials"
      className="pt-10 pb-16 sm:pt-16 sm:pb-24 px-6 sm:px-12 md:px-16 bg-[#F7F4EE] border-b border-[#E8E2D6] scroll-mt-20"
      data-purpose="testimonials-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow Tag */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <span className="eyebrow-text text-[#C89B5C] font-mono tracking-widest">
            {"//"} ULASAN KLIEN
          </span>
          <div className="flex items-center gap-3 text-xs font-mono text-[#8A796D]">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Dari klien kami</span>
            </span>
            <span className="hidden sm:inline text-[#C4B5A5]">•</span>
            <span className="text-[11px] text-[#8A796D] italic">
              (Identitas nama disamarkan demi privasi &amp; NDA klien)
            </span>
          </div>
        </div>

        {/* Section Title, Description & Category Filter Tabs (Full Width Stack) */}
        <div className="mb-10 sm:mb-12 max-w-4xl">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-architectural text-[#1E1714] leading-tight">
            Kisah &amp; Pengalaman Klien Kami
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#66584E] leading-relaxed max-w-3xl">
            Kepercayaan yang dibangun dari 450+ proyek terselesaikan di Bandung, Jakarta, Semarang, dan Yogyakarta dengan transparansi biaya serta integritas mutu kerja.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.key);
                  setCurrentIndex(0);
                  setIsQuoteExpanded(false);
                }}
                className={`min-h-[40px] px-4 py-2 rounded-full border transition-all duration-200 ${
                  selectedCategory === cat.key
                    ? "bg-[#C89B5C] text-[#191412] border-[#C89B5C] font-bold shadow-sm"
                    : "bg-[#FFFDF9] text-[#7A695C] border-[#DCD5C9] hover:border-[#C89B5C] hover:text-[#1E1714]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Spotlight Card */}
        <div className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 md:p-16 border border-[#E8E2D6] shadow-sm mb-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Photo Column */}
            <div className="lg:col-span-5 relative aspect-[4/3] bg-[#EAE3D6] overflow-hidden rounded-2xl shadow-md border border-[#DCD5C9] select-none">
              <Image
                key={current.image}
                src={current.image}
                alt={current.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-all duration-700 ease-out pointer-events-none select-none"
                draggable={false}
              />
              {/* Watermark Protection */}
              <WatermarkOverlay />

              <div className="absolute top-4 left-4 z-30 flex items-center gap-2 bg-[#191412]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#FAF6F0] border border-[#C89B5C]/35 select-none">
                <MapPin className="w-3 h-3 text-[#C89B5C]" />
                <span>{current.city}</span>
              </div>

              <div className="absolute bottom-4 right-4 z-30 bg-[#191412]/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono text-[#EADBCE] border border-[#C89B5C]/30 select-none">
                {formatGradeLabel(current.budgetGrade)}
              </div>
            </div>

            {/* Testimonial Quote Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-[#C89B5C]">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C89B5C] text-[#C89B5C]" />
                      ))}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#1E1714] ml-1">
                      4,8 / 5
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#8A796D] bg-[#F7F4EE] px-3 py-1 rounded-full border border-[#E8E2D6]">
                    Tahun {current.year}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#C89B5C]/40 mb-3" />
                <div className="relative">
                  <blockquote
                    id={`quote-${current.id}`}
                    className={`text-base sm:text-xl md:text-2xl font-light leading-relaxed tracking-tight text-[#1E1714] italic transition-all duration-300 ${
                      !isQuoteExpanded ? "line-clamp-3" : ""
                    }`}
                  >
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  {/* Expand / Collapse Toggle Button (Desktop & Mobile) */}
                  <div className="pt-2">
                    <button
                      type="button"
                      aria-expanded={isQuoteExpanded}
                      aria-controls={`quote-${current.id}`}
                      onClick={() => setIsQuoteExpanded((prev) => !prev)}
                      className="min-h-[44px] py-2 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C89B5C] hover:text-[#1E1714] transition-colors group"
                    >
                      <span className="underline underline-offset-4">
                        {isQuoteExpanded ? "Tutup ulasan" : "Baca lebih lengkap"}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#C89B5C] group-hover:text-[#1E1714] transition-transform duration-200 ${
                          isQuoteExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8E2D6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-[#1E1714]">
                    {current.author}
                  </h4>
                  <p className="text-xs font-mono text-[#8A796D] uppercase tracking-wider mt-1">
                    {current.role} &bull; <strong className="text-[#1E1714] font-medium">{current.project}</strong>
                  </p>
                </div>

                {/* Next / Previous Controls */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#8A796D] mr-2">
                    {safeIndex + 1} / {filteredTestimonials.length}
                  </span>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Testimonial"
                    className="w-10 h-10 flex items-center justify-center border border-[#D6CCC2] text-[#1E1714] hover:border-[#C89B5C] hover:text-[#C89B5C] hover:bg-white transition-all rounded-full bg-[#FAF6F0]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Testimonial"
                    className="w-10 h-10 flex items-center justify-center border border-[#D6CCC2] text-[#1E1714] hover:border-[#C89B5C] hover:text-[#C89B5C] hover:bg-white transition-all rounded-full bg-[#FAF6F0]"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle to Expand / Collapse All 52 Client Testimonials Grid */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowAllGrid((prev) => !prev)}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#EFE9DF] hover:bg-[#C89B5C] hover:text-[#191412] text-[#1E1714] text-xs font-mono uppercase tracking-wider font-bold transition-all border border-[#DCD5C9] shadow-sm group"
          >
            <span>
              {showAllGrid
                ? `Tutup Arsip Ulasan (${filteredTestimonials.length})`
                : `Buka & Telusuri Seluruh ${filteredTestimonials.length} Ulasan Klien`}
            </span>
            {showAllGrid ? (
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>
        </div>

        {/* Expandable Grid of 50+ Testimonial Cards */}
        {showAllGrid && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 animate-in fade-in duration-300">
            {filteredTestimonials.map((item) => {
              const isSelected = item.id === current.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectFromGrid(item)}
                  className={`p-6 rounded-2xl bg-[#FFFDF9] border transition-all cursor-pointer flex flex-col justify-between hover:shadow-md ${
                    isSelected
                      ? "border-[#C89B5C] ring-2 ring-[#C89B5C]/30 bg-[#FFFBF5]"
                      : "border-[#E8E2D6] hover:border-[#C89B5C]"
                  }`}
                >
                  <div>
                    {/* Card Header: Rating, City & Category */}
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <div className="flex items-center gap-1 text-[#C89B5C]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#C89B5C] text-[#C89B5C]" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#F7F4EE] text-[#7A695C] border border-[#E8E2D6]">
                        {item.category}
                      </span>
                    </div>

                    {/* Short Quote Preview */}
                    <p className="text-xs sm:text-sm text-[#4A3E36] leading-relaxed italic line-clamp-4 mb-4">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Card Footer: Author & City */}
                  <div className="pt-3 border-t border-[#E8E2D6]/80 flex items-end justify-between gap-2">
                    <div>
                      <p className="text-xs font-bold text-[#1E1714]">{item.author}</p>
                      <p className="text-[11px] text-[#8A796D] truncate max-w-[200px]">{item.project}</p>
                      <p className="text-[10px] font-mono text-[#C89B5C] mt-0.5">{item.city}</p>
                    </div>
                    <span className="text-[10px] font-mono text-[#A8988B] whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
