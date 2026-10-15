"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    target: 20,
    suffix: "+",
    label: "Tahun Pengalaman",
    description: "Berdiri sejak 2006, melayani klien di Bandung, Jakarta, Semarang, dan Yogyakarta beserta wilayah di sekitarnya.",
  },
  {
    target: 450,
    suffix: "+",
    label: "Proyek Selesai",
    description: "Dari hunian, kos eksklusif, dan kafe hingga bangunan komersial di Bandung, Jakarta, Semarang, dan Yogyakarta.",
  },
  {
    target: 98,
    suffix: "%",
    label: "Klien Puas",
    description: "Berkat RAB yang transparan, pengerjaan yang presisi, dan garansi yang jelas.",
  },
];

export default function AboutMilestones() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(
              stats.map((s) => Math.floor(easeProgress * s.target))
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(stats.map((s) => s.target));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 bg-[#F7F4EE] border-b border-[#E8E2D6]"
      data-purpose="about-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow Tag */}
        <div className="flex items-center gap-4 mb-10">
          <span className="eyebrow-text text-[#C89B5C] font-mono tracking-widest">
            02 &nbsp;{"//"} TENTANG STUDIO
          </span>
          <span className="h-[1px] w-28 bg-[#C89B5C]/40" />
        </div>

        {/* Main Philosophy Statement */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-architectural leading-[1.08] text-[#1E1714]">
              Menjawab Tantangan dan Harapan Anda.
            </h2>
            <p className="mt-4 text-lg text-[#C89B5C] font-medium tracking-wide">
              Ngastadalem — Architecture &amp; Consultant (Desain, Bangun, Renovasi, Interior)
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right pt-2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#DCD5C9] bg-[#FFFDF9] text-xs font-mono uppercase tracking-widest text-[#5C4D42]">
              <span className="w-2 h-2 rounded-full bg-[#C89B5C]" />
              Bandung &bull; Jakarta &bull; Semarang &bull; Yogyakarta &bull; Sejak 2006
            </div>
          </div>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 rounded-2xl bg-[#FFFDF9] border border-[#E8E2D6] shadow-sm hover:border-[#C89B5C]/60 transition-colors">
            <span className="text-xs font-mono font-bold text-[#C89B5C] tracking-widest uppercase">
              {"//"} PILLAR 01
            </span>
            <h3 className="text-lg font-bold text-[#1E1714] mt-2 mb-3">
              Desain &amp; Pembangunan Satu Pintu
            </h3>
            <p className="text-sm text-[#66584E] leading-relaxed">
              Kami merancang arsitektur bangunan dan interior custom sekaligus merealisasikannya, sehingga proses presisi, terkoordinasi, dan hemat biaya.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#FFFDF9] border border-[#E8E2D6] shadow-sm hover:border-[#C89B5C]/60 transition-colors">
            <span className="text-xs font-mono font-bold text-[#C89B5C] tracking-widest uppercase">
              {"//"} PILLAR 02
            </span>
            <h3 className="text-lg font-bold text-[#1E1714] mt-2 mb-3">
              Kepercayaan Adalah Paling Utama
            </h3>
            <p className="text-sm text-[#66584E] leading-relaxed">
              Keterbukaan ada dalam setiap tahap proyek kami. Transparansi RAB per item pekerjaan dan laporan berkala menjadi landasan integritas kami.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#FFFDF9] border border-[#E8E2D6] shadow-sm hover:border-[#C89B5C]/60 transition-colors">
            <span className="text-xs font-mono font-bold text-[#C89B5C] tracking-widest uppercase">
              {"//"} PILLAR 03
            </span>
            <h3 className="text-lg font-bold text-[#1E1714] mt-2 mb-3">
              Fleksibilitas Anggaran &amp; Grade
            </h3>
            <p className="text-sm text-[#66584E] leading-relaxed">
              Desain dan pembangunan dapat disesuaikan dengan anggaran pemilik: Grade High (mewah), Grade Medium, maupun Low Budget tanpa mengorbankan fungsi.
            </p>
          </div>
        </div>

        {/* Key Metrics Counter Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 pb-20 border-b border-[#E8E2D6]"
          id="metrics-container"
        >
          {stats.map((stat, idx) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#1E1714]">
                {counts[idx]}
                {stat.suffix}
              </p>
              <p className="text-[11px] font-mono tracking-widest uppercase text-[#5C4D42] font-bold">
                {stat.label}
              </p>
              <p className="text-xs text-[#8A796D] max-w-xs leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Principal Architect Statement Box */}
        <div className="mt-20 p-8 sm:p-14 rounded-3xl bg-[#1C1613] text-white border border-[#C89B5C]/35 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C89B5C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C89B5C] font-semibold">
              — Arsitek Utama
            </span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light italic leading-snug text-[#FAF6F0]">
              &ldquo;Transparan, tepat waktu, dan berdedikasi—kami merealisasikan kepercayaan Anda lewat manajemen proyek lapangan yang terukur dan dilaporkan berkala.&rdquo;
            </blockquote>
            <div className="pt-4 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-[#C89B5C]/50" />
              <span className="font-sans font-bold text-lg text-white">Eka S.</span>
              <span className="text-xs text-[#D8C7B5] font-mono uppercase tracking-wider">
                Principal Architect
              </span>
              <span className="w-12 h-px bg-[#C89B5C]/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
