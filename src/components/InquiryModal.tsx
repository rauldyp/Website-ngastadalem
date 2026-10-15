"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle, MessageCircle } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function InquiryModal({
  isOpen,
  onClose,
  defaultService = "Residential Architecture",
}: InquiryModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService);
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setMessage("");
    setIsSubmitted(false);
    onClose();
  };

  const directWhatsAppUrl = `https://wa.me/6282221366224?text=${encodeURIComponent(
    `Halo Ngastadalem Studio, saya ${name || "Klien"} tertarik berkonsultasi mengenai ${service} di area ${location || "Bandung/Jakarta/Semarang/Yogyakarta"}.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#1A1412] text-[#FAF6F0] border border-[#C89B5C]/35 rounded-2xl p-6 sm:p-10 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 text-[#A8988B] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 bg-[#C89B5C]/20 text-[#C89B5C] rounded-full flex items-center justify-center mx-auto border border-[#C89B5C]/40">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Pesan Konsultasi Diterima
            </h3>
            <p className="text-sm text-[#D4C8BC] max-w-md mx-auto leading-relaxed">
              Terima kasih, <span className="text-[#C89B5C] font-medium">{name}</span>. Tim arsitek Ngastadalem akan segera meninjau kebutuhan proyek Anda dan menghubungi Anda kembali.
            </p>
            <div className="pt-6">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#C89B5C] text-[#191412] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#DEB070] transition-colors"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <p className="text-[11px] font-mono uppercase tracking-widest text-[#C89B5C] mb-1">
                {"//"} NGASTADALEM — ARCHITECTURE &amp; CONSULTANT
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Mulai Dialog Proyek Anda
              </h3>
              <p className="text-xs sm:text-sm text-[#A8988B] mt-1">
                Konsultasikan rencana Desain, Bangun Baru, Renovasi, Interior/Furnitur, atau Maintenance sesuai target budget Anda.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C4B5A5] mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full bg-[#241C17] border border-[#3D3028] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#78695E] focus:outline-none focus:border-[#C89B5C] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C4B5A5] mb-1.5">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full bg-[#241C17] border border-[#3D3028] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#78695E] focus:outline-none focus:border-[#C89B5C] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C4B5A5] mb-1.5">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+62 8..."
                    className="w-full bg-[#241C17] border border-[#3D3028] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#78695E] focus:outline-none focus:border-[#C89B5C] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C4B5A5] mb-1.5">
                    Lokasi Proyek / Kota
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Contoh: Bandung & Sekitarnya / Jakarta / Semarang / Yogyakarta"
                    className="w-full bg-[#241C17] border border-[#3D3028] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#78695E] focus:outline-none focus:border-[#C89B5C] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C4B5A5] mb-1.5">
                  Layanan yang Diminati
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#241C17] border border-[#3D3028] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C89B5C] transition-colors"
                >
                  <option value="Desain (Grade Premium, Menengah, Hemat)">Desain (Grade Premium, Menengah, Hemat)</option>
                  <option value="Bangun Baru">Bangun Baru</option>
                  <option value="Renovasi">Renovasi</option>
                  <option value="Interior/Furnitur">Interior/Furnitur</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Pembangunan Kost / Cafe">Pembangunan Kost / Cafe</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C4B5A5] mb-1.5">
                  Catatan Proyek &amp; Gambaran Kebutuhan
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ceritakan luas perkiraan, gaya interior Japandi yang disukai, atau jadwal mulai..."
                  className="w-full bg-[#241C17] border border-[#3D3028] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#78695E] focus:outline-none focus:border-[#C89B5C] transition-colors"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#C89B5C] text-white font-mono text-xs uppercase tracking-wider font-semibold hover:from-[#C09A62] hover:to-[#DEB070] transition-colors disabled:opacity-50 shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Mengirim..." : "Kirim Formulir"}</span>
                </button>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#3D3028] text-xs font-mono uppercase tracking-wider text-[#D4C8BC] hover:text-white hover:border-[#C89B5C] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Konsultasi Cepat via WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
