"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, X, Phone, Mail, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/contact";

interface NavbarProps {
  onOpenInquiry: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Portofolio", href: "#projects" },
    { label: "Tentang", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 px-6 sm:px-10 md:px-16 py-5 flex items-center justify-between ${
          scrolled
            ? "bg-[#191412]/92 backdrop-blur-md border-b border-[#382C24]/80 shadow-lg"
            : "bg-gradient-to-b from-[#191412]/70 to-transparent"
        }`}
        data-purpose="site-header"
      >
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex flex-col cursor-pointer"
        >
          <span className="text-white text-lg sm:text-xl font-bold tracking-[0.22em] uppercase group-hover:text-[#C89B5C] transition-colors">
            NGASTADALEM
          </span>
          <span className="text-[9px] font-mono tracking-[0.24em] text-[#C4B5A5] uppercase -mt-0.5">
            ARCHITECTURE &amp; CONSULTANT
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase font-mono tracking-widest text-[#D4C8BC]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C89B5C] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={getWhatsAppUrl("Halo Ngastadalem, saya tertarik dengan layanan arsitektur Anda.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C89B5C] bg-[#C89B5C]/15 text-xs font-mono uppercase tracking-wider text-[#FAF6F0] hover:bg-[#C89B5C] hover:text-[#191412] transition-all duration-300"
          >
            <span>Konsultasi WA</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Hamburger Menu Toggle (Hanya muncul di mobile/tablet kecil di bawah breakpoint md) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden text-white p-2 hover:opacity-80 transition-opacity focus:outline-none"
            type="button"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="flex flex-col items-end gap-1.5 w-6">
                <span className="w-6 h-[2px] bg-white block transition-all" />
                <span className="w-4 h-[2px] bg-[#C89B5C] block transition-all" />
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#191412] transition-all duration-500 ease-in-out flex flex-col justify-between p-8 sm:p-14 pt-28 text-white ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-8"
        }`}
      >
        <div className="max-w-xl">
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#C89B5C] mb-8">
            {"//"} Navigasi Studio
          </p>
          <ul className="space-y-6 text-3xl sm:text-5xl font-bold tracking-tight">
            {navLinks.map((link, idx) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#C89B5C] transition-colors inline-flex items-baseline gap-4"
                >
                  <span className="text-xs font-mono font-normal text-[#8A796D]">
                    0{idx + 1}
                  </span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-[#382C24] pt-8 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono text-[#A8988B]">
          <div>
            <p className="text-white font-semibold mb-2 uppercase tracking-wider">
              Kontak Studio
            </p>
            <p className="flex items-center gap-2 mb-1">
              <Mail className="w-3.5 h-3.5 text-[#C89B5C]" />
              <span className="text-[#D4C8BC]">ngastadalemworkshop@gmail.com</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C89B5C]" />
              <span className="text-[#D4C8BC]">+62 822-2136-6224</span>
            </p>
          </div>
          <div>
            <p className="text-white font-semibold mb-2 uppercase tracking-wider">
              Studio Presence
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C89B5C]" />
              <span className="text-[#D4C8BC]">Purwomartani, Sleman • Antapani, Bandung</span>
            </p>
            <a
              href={getWhatsAppUrl("Halo Ngastadalem, saya tertarik berkonsultasi mengenai proyek arsitektur/konstruksi.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C89B5C] text-[#191412] font-semibold text-xs uppercase tracking-wider hover:bg-[#DEB070] transition-colors"
            >
              Konsultasi via WhatsApp
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
