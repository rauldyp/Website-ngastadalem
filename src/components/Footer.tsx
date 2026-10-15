"use client";

import React, { useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/contact";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const officialEmail = "ngastadalemworkshop@gmail.com";
  const phone = "+62 822-2136-6224";
  const primaryWhatsAppUrl = getWhatsAppUrl("Halo Ngastadalem, saya ingin berkonsultasi mengenai rencana proyek saya.");

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(officialEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="bg-[#140F0D] text-[#FAF6F0] pt-24 sm:pt-32 pb-12 px-6 sm:px-12 md:px-16 border-t border-[#2A201A]"
      data-purpose="footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Studio Eyebrow Tag */}
        <div className="flex items-center gap-4 mb-12">
          <span className="eyebrow-text text-[#C89B5C] font-mono tracking-widest">
            {"//"} HUBUNGI KAMI
          </span>
          <span className="h-[1px] w-20 bg-[#C89B5C]/35" />
        </div>

        {/* Main Inquiries & Studio Address Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-16 border-b border-[#2A201A] gap-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C89B5C] font-semibold block mb-2">
              KONSULTASI PRIORITAS &bull; RESPON CEPAT
            </span>
            <div className="flex items-center gap-4">
              <a
                href={primaryWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white hover:text-[#25D366] transition-colors inline-flex items-center gap-3 group"
              >
                <span>{phone}</span>
                <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 text-[#C89B5C] group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            </div>

            {/* Email Resmi Tunggal */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-[#A8988B]">
              <span className="text-[#8A796D] font-mono text-xs">Email resmi:</span>
              <a
                href={`mailto:${officialEmail}`}
                className="hover:text-white transition-colors underline underline-offset-4 text-xs sm:text-sm font-mono text-[#D4C8BC]"
              >
                {officialEmail}
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C89B5C] hover:text-white transition-colors ml-1 px-2 py-0.5 rounded border border-[#C89B5C]/30 bg-[#221B17]"
                title="Salin email resmi"
                aria-label="Salin email resmi"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Studio Offices Address */}
          <div className="text-left lg:text-right space-y-5">
            <div>
              <div className="flex items-center lg:justify-end gap-2 mb-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C89B5C] bg-[#221B17] px-2 py-0.5 rounded border border-[#C89B5C]/30">
                  Kantor Pusat (Workshop &amp; Studio)
                </span>
              </div>
              <address className="not-italic text-sm text-[#D4C8BC] leading-relaxed font-sans">
                Purwomartani, Kalasan, Sleman<br />
                D.I. Yogyakarta 55571<br />
                <span className="text-xs text-[#8A796D] font-mono">Melayani Yogyakarta, Solo, Semarang &amp; sekitarnya</span>
              </address>
            </div>
            <div>
              <div className="flex items-center lg:justify-end gap-2 mb-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C89B5C] bg-[#221B17] px-2 py-0.5 rounded border border-[#C89B5C]/30">
                  Kantor Bandung (Representatif Jawa Barat)
                </span>
              </div>
              <address className="not-italic text-sm text-[#D4C8BC] leading-relaxed font-sans">
                Antapani, Kota Bandung<br />
                Jawa Barat 40291<br />
                <span className="text-xs text-[#8A796D] font-mono">Melayani Bandung Raya, Jabodetabek &amp; sekitarnya</span>
              </address>
            </div>
          </div>
        </div>

        {/* Sub-Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 text-xs font-mono">
          {/* Navigation Menu */}
          <div className="space-y-4">
            <h4 className="text-[#8A796D] uppercase tracking-widest font-semibold">
              NAVIGASI
            </h4>
            <ul className="space-y-2.5 text-[#D4C8BC]">
              <li>
                <a className="hover:text-[#C89B5C] transition-colors" href="#projects">
                  Portofolio Karya
                </a>
              </li>
              <li>
                <a className="hover:text-[#C89B5C] transition-colors" href="#about">
                  Tentang Studio
                </a>
              </li>
              <li>
                <a className="hover:text-[#C89B5C] transition-colors" href="#services">
                  Layanan Kami
                </a>
              </li>
              <li>
                <a className="hover:text-[#C89B5C] transition-colors" href="#testimonials">
                  Ulasan Klien
                </a>
              </li>
            </ul>
          </div>

          {/* Practice & Services */}
          <div className="space-y-4">
            <h4 className="text-[#8A796D] uppercase tracking-widest font-semibold">
              LAYANAN KAMI
            </h4>
            <ul className="space-y-2.5 text-[#D4C8BC]">
              <li>Desain (Grade Premium, Menengah, Hemat)</li>
              <li>Bangun Baru (Turnkey &amp; Garansi)</li>
              <li>Renovasi Rumah, Kost &amp; Cafe</li>
              <li>Interior/Furnitur Custom</li>
              <li>Maintenance &amp; Perawatan Berkala</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-[#8A796D] uppercase tracking-widest font-semibold">
              KONTAK RESMI
            </h4>
            <ul className="space-y-2.5 text-[#D4C8BC]">
              <li>
                <a className="hover:text-[#C89B5C] transition-colors" href={`tel:${phone.replace(/\s+/g, "")}`}>
                  {phone}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#C89B5C] transition-colors"
                  href="https://wa.me/6282221366224"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Konsultasi
                </a>
              </li>
              <li className="text-[#8A796D]">Kantor Pusat: Sleman &bull; Kantor: Bandung</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-[#8A796D] uppercase tracking-widest font-semibold">
              MEDIA SOSIAL
            </h4>
            <ul className="space-y-2.5 text-[#D4C8BC]">
              <li>
                <a
                  className="hover:text-[#C89B5C] transition-colors flex items-center gap-1"
                  href="https://www.instagram.com/ngastadalem.project/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Instagram (@ngastadalem.project)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C89B5C]" />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#C89B5C] transition-colors flex items-center gap-1"
                  href="https://www.tiktok.com/@ngastadalem"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>TikTok (@ngastadalem)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C89B5C]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="pt-8 border-t border-[#2A201A] flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-[#8A796D] gap-4">
          <p>© 2026 Ngastadalem Studio. Hak cipta dilindungi.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-[#FAF6F0] transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C89B5C]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
