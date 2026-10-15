"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/contact";

interface CallToActionProps {
  onOpenInquiry: () => void;
}

export default function CallToAction({ onOpenInquiry }: CallToActionProps) {
  const whatsappUrl = getWhatsAppUrl(
    "Halo Ngastadalem Studio, saya ingin berkonsultasi mengenai rencana proyek hunian/kafe/kost kami."
  );

  return (
    <section
      className="relative py-14 sm:py-24 w-full flex items-center justify-center text-center px-6 overflow-hidden bg-[#120E0C]"
      data-purpose="cta-section"
    >
      {/* Warm Japandi Architectural Background (Project Modern Interior) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/modern_interior.png"
          alt="Interior custom bernuansa hangat buatan Ngastadalem Studio"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.38] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120E0C] via-black/80 to-[#120E0C]/90" />
      </div>

      {/* Centered Callout Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-7 py-6 sm:py-10">
        <span className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] text-[#C89B5C] bg-[#2A1F19]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C89B5C]/40">
          {"//"} Mari Mulai Bersama Kami
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-architectural text-white leading-[1.04]">
          Mari Bangun <br />
          Ruang yang <br />
          <span className="text-[#C89B5C]">Hangat &amp; Abadi.</span>
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-[#EBE2D8] font-normal leading-relaxed">
          Ceritakan rencana hunian, kafe, atau kost Anda. Kami bantu mewujudkannya dengan ketelitian dan transparansi biaya.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-mono uppercase tracking-wider bg-gradient-to-r from-[#B08D57] to-[#C89B5C] hover:from-[#C09A62] hover:to-[#DEB070] text-white transition-all duration-300 font-semibold shadow-xl shadow-black/50"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hubungi via WhatsApp</span>
          </a>

          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-mono uppercase tracking-wider bg-[#221B16]/80 hover:bg-[#2E241E] text-white backdrop-blur-md border border-[#C89B5C]/40 transition-all duration-300 font-medium"
          >
            <span>Kirim Pesan Konsultasi</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
