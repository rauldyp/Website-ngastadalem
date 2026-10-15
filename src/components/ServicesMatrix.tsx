"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceData {
  id: string;
  name: string;
  image: string;
  alt: string;
  description: string;
  deliverables: string[];
}

const approaches = [
  {
    num: "01",
    title: "Pengawasan 24/7",
    description: "Kami memberikan akses 24/7 untuk mengawasi proyek-proyek yang kami kerjakan dengan kontrol ketat di lapangan.",
  },
  {
    num: "02",
    title: "RAB Transparan",
    description: "RAB terperinci dengan rincian detail setiap item pekerjaan, material, dan durasi tanpa biaya terselubung.",
  },
  {
    num: "03",
    title: "Anggaran yang Fleksibel",
    description: "Adanya metode pengubahan anggaran yang disesuaikan secara transparan sesuai keinginan klien saat proyek berjalan.",
  },
];

const budgetGrades = [
  {
    grade: "Grade High",
    title: "Mewah & Prestisius",
    description: "Material premium kelas atas, spesifikasi custom detail tinggi, smart systems terintegrasi, dan keindahan estetika tanpa kompromi.",
    badge: "Luxury Finishing",
  },
  {
    grade: "Grade Medium",
    title: "Elegan & Terukur",
    description: "Pilihan paling populer. Keseimbangan sempurna antara estetika bangunan hangat, ketahanan material teruji, dan efisiensi biaya maksimal.",
    badge: "Best Value",
  },
  {
    grade: "Low Budget",
    title: "Cerdas & Ekonomis",
    description: "Desain cerdas fungsional yang memaksimalkan setiap rupiah anggaran Anda tanpa mengurangi kekuatan struktur dan kenyamanan ruang.",
    badge: "Smart Budget",
  },
];

const servicesData: ServiceData[] = [
  {
    id: "desain",
    name: "Desain",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Desain arsitektur dan perencanaan konsep bangunan bernuansa hangat",
    description:
      "Perencanaan arsitektur, masterplan, dan struktur menyeluruh untuk rumah tinggal, rumah kost, cafe, villa, hingga bangunan komersial. Desain sepenuhnya dapat disesuaikan dengan preferensi dan kemampuan pemilik: Grade High (mewah), Grade Medium, maupun Low Budget / Ekonomis.",
    deliverables: [
      "Gambar Konsep 3D Render & Tata Ruang",
      "Gambar Kerja Arsitektur, Struktur & MEP Lengkap",
      "Penyesuaian Grade Desain: High, Medium, & Low Budget",
      "Rencana Anggaran Biaya (RAB) Rinci & Transparan",
    ],
  },
  {
    id: "bangun-baru",
    name: "Bangun Baru",
    image: "/images/kost-eksklusif-sleman.jpg",
    alt: "Konstruksi bangun baru rumah tinggal, rumah kost eksklusif, dan komersial",
    description:
      "Pelaksanaan konstruksi bangunan baru dari nol hingga serah terima kunci (turnkey). Didukung pengawasan lapangan intensif 24/7, pemilihan material berkualitas, dan sistem manajemen proyek terstruktur sesuai target durasi waktu dan grade yang disepakati.",
    deliverables: [
      "Pekerjaan Struktur, Arsitektur & Finishing",
      "Pengawasan Lapangan & Laporan Berkala 24/7",
      "Pilihan Spesifikasi Grade High, Medium, & Ekonomis",
      "Garansi Masa Pemeliharaan Konstruksi Nyata",
    ],
  },
  {
    id: "renovasi",
    name: "Renovasi",
    image: "/images/cafe-kopi-loka.jpg",
    alt: "Renovasi bangunan cafe, rumah tinggal, dan komersial",
    description:
      "Transformasi dan peremajaan bangunan lama, perubahan fasad, penataan ulang denah tata ruang, hingga ekspansi lantai tambahan. Solusi tepat untuk menghidupkan kembali bangunan komersial, cafe, rumah tinggal, atau rumah kost dengan efisiensi biaya maksimal.",
    deliverables: [
      "Audit Kondisi Struktur & Kelayakan Bangunan",
      "Redesain Fasad & Peningkatan Nilai Estetika Ruang",
      "Renovasi Bertahap Sesuai Prioritas Anggaran",
      "Penyesuaian Interior & Perbaikan Utilitas Menyeluruh",
    ],
  },
  {
    id: "interior-furnitur",
    name: "Interior/Furnitur",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    alt: "Interior dan furnitur custom pengerjaan kayu dan built-in",
    description:
      "Pembuatan interior kustom dan furnitur built-in: kitchen set, lemari pakaian (wardrobe), meja kerja, partisi penyekat ruang kayu, hingga backdrop TV. Menggunakan material berkualitas tinggi dengan pengerjaan sambungan presisi dan pencahayaan hangat alami.",
    deliverables: [
      "Custom Built-in Cabinetry, Kitchen Set & Wardrobe",
      "Partisi Penyekat Ruang Kayu & Wall Paneling",
      "Penyesuaian Material: Kayu Solid, Plywood HPL, Duco",
      "Pilihan Paket Grade High, Medium, maupun Budget Terukur",
    ],
  },
  {
    id: "maintenance",
    name: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    alt: "Pemeliharaan dan perawatan berkala bangunan dan instalasi",
    description:
      "Layanan pemeliharaan dan perawatan berkala properti Anda. Mulai dari pengecekan kebocoran atap, pengecatan ulang, peremajaan finishing kayu/furnitur, perbaikan instalasi kelistrikan & plumbing, hingga audit berkala agar bangunan tetap prima dan awet.",
    deliverables: [
      "Perawatan Berkala & Perbaikan Atap/Kebocoran",
      "Pengecatan Ulang Dinding Interior & Eksterior",
      "Refinishing & Restorasi Furnitur/Kayu",
      "Pemeriksaan Sistem Kelistrikan & Saluran Air (Plumbing)",
    ],
  },
];

interface ServicesMatrixProps {
  onOpenInquiry: (serviceName?: string) => void;
}

export default function ServicesMatrix({ onOpenInquiry }: ServicesMatrixProps) {
  const [activeId, setActiveId] = useState<string>("desain");

  const currentService =
    servicesData.find((s) => s.id === activeId) || servicesData[0];

  return (
    <section
      id="services"
      className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 bg-[#FAF6F0] border-b border-[#E8E2D6]"
      data-purpose="services-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section 1: Pendekatan Kami (Our Approach) */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="eyebrow-text text-[#C89B5C] font-mono tracking-widest">
              03 &nbsp;{"//"} PENDEKATAN &amp; DISIPLIN LAYANAN
            </span>
            <span className="h-[1px] w-24 bg-[#C89B5C]/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-architectural text-[#1E1714] max-w-3xl mb-12">
            Dibangun atas presisi, kepercayaan, dan keunggulan.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approaches.map((app) => (
              <div
                key={app.num}
                className="p-8 rounded-2xl bg-[#FFFDF9] border border-[#E8E2D6] hover:border-[#C89B5C] transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-extrabold text-[#C89B5C]/35 font-mono">
                    {app.num}
                  </span>
                  <span className="w-8 h-px bg-[#C89B5C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1E1714] mb-2">{app.title}</h3>
                <p className="text-sm text-[#66584E] leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Budget Flexibility Banner (High, Medium, Low Budget) */}
        <div className="mb-20 p-8 sm:p-10 rounded-2xl bg-[#F0EBE1] border border-[#DCD5C9]">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C89B5C] font-bold block mb-1">
              {"//"} FLEKSIBILITAS ANGGARAN PEMILIK
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1714] tracking-tight">
              Desain &amp; Bangun Menyesuaikan Anggaran Anda
            </h3>
            <p className="text-sm text-[#66584E] mt-2 leading-relaxed">
              Kami memahami setiap pemilik memiliki target investasi yang berbeda. Ngastadalem dapat menyesuaikan rancangan desain dan spesifikasi material mulai dari Grade High, Grade Medium, hingga Low Budget (ekonomis).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {budgetGrades.map((bg) => (
              <div
                key={bg.grade}
                className="p-6 rounded-xl bg-[#FFFDF9] border border-[#E8E2D6] hover:border-[#C89B5C] transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C89B5C]">
                    {bg.grade}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAF6F0] text-[#7A695C] border border-[#E8E2D6]">
                    {bg.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1E1714] mb-2">{bg.title}</h4>
                <p className="text-xs text-[#66584E] leading-relaxed">
                  {bg.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Disiplin Layanan Studio (Desain, Bangun Baru, Renovasi, Interior/Furnitur, Maintenance) */}
        <div className="flex justify-between items-end gap-4 mb-14 pt-6 border-t border-[#E8E2D6]">
          <div>
            <span className="eyebrow-text text-[#C89B5C] font-mono tracking-widest block mb-2">
              DISIPLIN &amp; LAYANAN STUDIO
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#1E1714]">
              Solusi Ruang Menyeluruh Dari Konsep Hingga Realisasi
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Services Navigation List */}
          <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-6">
            {servicesData.map((service, index) => {
              const isActive = service.id === activeId;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                  className="group cursor-pointer flex items-baseline justify-between transition-all duration-300 py-1"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span
                      className={`font-mono text-xs transition-colors duration-200 ${
                        isActive ? "text-[#C89B5C] font-semibold" : "text-[#A8988B] group-hover:text-[#1E1714]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`text-2xl sm:text-4xl md:text-5xl tracking-tight transition-all duration-200 ${
                        isActive
                          ? "font-bold text-[#1E1714] border-b-2 border-[#C89B5C] pb-1"
                          : "font-normal text-[#8A796D] group-hover:text-[#1E1714] border-b-2 border-transparent pb-1"
                      }`}
                    >
                      {service.name}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive
                        ? "text-[#C89B5C] translate-x-1 opacity-100"
                        : "text-[#D6CCC2] opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Service Dynamic Preview Card */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-6 pt-4 lg:pt-0">
            <div className="w-full aspect-[4/3] bg-[#F0EBE1] overflow-hidden rounded-sm relative shadow-md border border-[#E0D7CB]">
              <Image
                key={currentService.image}
                src={currentService.image}
                alt={currentService.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-all duration-700 ease-out transform"
              />
              <div className="absolute top-3 left-3 bg-[#191412]/75 backdrop-blur-md px-3.5 py-1.5 rounded text-[10px] font-mono uppercase tracking-widest text-[#FAF6F0] border border-[#C89B5C]/30">
                {currentService.name}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm sm:text-base leading-relaxed text-[#5C4D42] transition-all duration-300">
                {currentService.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="pt-2 space-y-2 border-t border-[#E8E2D6]">
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#8A796D] font-semibold">
                  Ruang Lingkup &amp; Fleksibilitas:
                </p>
                <div className="space-y-1.5">
                  {currentService.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-[#2E241E]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C89B5C] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenInquiry(currentService.name)}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E1714] font-semibold hover:text-[#C89B5C] transition-colors"
                >
                  <span>Konsultasi untuk {currentService.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
