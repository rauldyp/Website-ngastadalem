"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/contact";

interface HeroProps {
  onOpenInquiry?: () => void;
}

export default function Hero({ onOpenInquiry }: HeroProps = {}) {
  const waHeroMessage = "Halo Ngastadalem, saya tertarik berkonsultasi mengenai proyek arsitektur/konstruksi tanpa kejutan biaya.";
  const waUrl = getWhatsAppUrl(waHeroMessage);
  const heroRef = useRef<HTMLElement>(null);
  const [showFloatingWa, setShowFloatingWa] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show floating button only when hero is scrolled past
        setShowFloatingWa(!entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative h-[100svh] min-h-[580px] w-full flex flex-col justify-end p-6 sm:p-12 md:px-16 pb-12 sm:pb-16 text-white overflow-hidden"
        data-purpose="hero-section"
      >
        {/* Background Architectural Imagery with High-Contrast Dark Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/spatial-context-merapi.jpg"
            alt="Proyek Villa Peristirahatan Tropis Ngastadalem Sleman"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.75] contrast-[1.05]"
          />
          {/* Deep dark gradient overlay from bottom to top for crystal-clear readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#120E0C] via-[#181210]/65 to-black/30" />
        </div>

        {/* Unified Bottom-Left Text Block (Above the Fold) */}
        <div className="relative z-10 max-w-5xl w-full text-left space-y-3 sm:space-y-4">
          {/* Label Kecil */}
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E0BE5B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C89B5C]" />
            <span>Desain &bull; Bangun &bull; Renovasi &bull; Interior</span>
          </div>

          {/* Headline (Dua baris rapi di desktop tanpa kata yatim 'Biaya.', seimbang di mobile) */}
          <h1 className="text-[27px] sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] font-bold tracking-architectural leading-[1.12] text-white max-w-5xl [text-wrap:balance]">
            <span className="hidden sm:inline">Ruang Hangat, Nyaman &amp; Elegan, Dibangun </span>
            <span className="inline sm:hidden">Ruang Hangat &amp; Elegan, Dibangun </span>
            <span className="text-[#C89B5C]">Tanpa Kejutan Biaya.</span>
          </h1>

          {/* Narrative Paragraph */}
          <p className="hidden sm:block text-sm sm:text-base leading-relaxed text-[#F0E6DC] max-w-2xl font-light">
            Satu tim untuk desain, bangun, renovasi, hingga interior custom. RAB transparan dan pilihan grade yang menyesuaikan budget Anda.
          </p>
          <p className="block sm:hidden text-xs leading-relaxed text-[#F0E6DC]/95 max-w-lg font-light">
            Satu tim untuk desain, bangun, hingga interior. RAB transparan, sesuai budget Anda.
          </p>

          {/* Action Buttons: WhatsApp Primary & Portfolio Secondary */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-7 py-3 rounded-full bg-[#C89B5C] hover:bg-[#DEB070] text-[#191412] font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-lg shadow-black/40 inline-flex items-center gap-2.5 active:scale-95"
            >
              <span>Konsultasi via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="px-5 py-3 rounded-full border border-white/30 hover:border-[#C89B5C] hover:text-[#C89B5C] text-white/90 text-xs sm:text-sm font-medium tracking-wide transition-colors inline-flex items-center gap-1.5"
            >
              <span>Lihat Portofolio</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Bar Kepercayaan (Minimal 13px, Kontras Tinggi #F5EBE1) */}
          <div className="pt-2 sm:pt-3 text-[13px] sm:text-sm font-mono text-[#F5EBE1] font-medium tracking-wide flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="leading-snug">20+ tahun &bull; 450+ proyek &bull; Bandung, Jakarta, Semarang, Yogyakarta</span>
          </div>
        </div>
      </section>

      {/* Floating Sticky Mobile WhatsApp Button (Only shown after scrolling past hero) */}
      <div
        className={`fixed bottom-4 left-4 right-4 z-40 sm:hidden transition-all duration-300 ease-out ${
          showFloatingWa
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-5 rounded-full bg-[#1F7A3E] text-white font-semibold text-sm tracking-wide shadow-2xl flex items-center justify-center gap-2.5 border border-emerald-400/30 active:scale-98 transition-transform"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>Konsultasi via WhatsApp</span>
        </a>
      </div>
    </>
  );
}
