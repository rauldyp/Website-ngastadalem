"use client";

import React from "react";
import Image from "next/image";

export default function LandscapeBreak() {
  return (
    <section className="relative w-full py-14 sm:py-20 overflow-hidden flex items-center justify-center">
      {/* Full-bleed Architectural Landscape Imagery (Project Cafe Kopi Loka) */}
      <Image
        src="/images/cafe-kopi-loka.jpg"
        alt="Karya arsitektur ruang komersial kafe oleh Ngastadalem Studio"
        fill
        sizes="100vw"
        className="object-cover object-center filter brightness-[0.45] contrast-[1.1]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#140F0D] via-black/75 to-[#140F0D]/85" />

      {/* Floating Principal Architect Statement */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
        <span className="inline-block text-[11px] font-mono uppercase tracking-[0.25em] text-[#C89B5C] font-semibold mb-4 bg-black/40 px-3.5 py-1 rounded-full border border-[#C89B5C]/30 backdrop-blur-sm">
          {"//"} PESAN DARI PRINCIPAL ARCHITECT
        </span>
        <blockquote className="text-xl sm:text-3xl md:text-4xl font-light tracking-tight italic max-w-2xl mx-auto leading-relaxed text-[#FAF6F0]">
          &ldquo;Transparan, tepat waktu, dan berdedikasi—kami merealisasikan harapan ruang Anda lewat manajemen lapangan yang terukur dan dilaporkan berkala.&rdquo;
        </blockquote>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs font-mono">
          <span className="font-sans font-bold text-sm sm:text-base text-white tracking-normal">
            Eka S.
          </span>
          <span className="hidden sm:inline text-[#C89B5C]">&bull;</span>
          <span className="text-[#D4C8BC] uppercase tracking-wider">
            Principal Architect Ngastadalem
          </span>
          <span className="hidden sm:inline text-[#C89B5C]">&bull;</span>
          <span className="text-[#A8988B] text-[11px]">
            Bandung &bull; Jakarta &bull; Semarang &bull; Yogyakarta
          </span>
        </div>
      </div>
    </section>
  );
}
