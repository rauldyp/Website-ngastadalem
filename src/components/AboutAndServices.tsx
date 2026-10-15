"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, FileSpreadsheet, Sliders, Eye, ChevronDown } from "lucide-react";
import WatermarkOverlay from "./WatermarkOverlay";
import { getWhatsAppUrl } from "@/constants/contact";

interface ServiceData {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  alt: string;
  description: string;
  deliverables: string[];
}

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
    description: "Melayani Bandung, Jakarta, Semarang & DIY sejak 2006.",
  },
  {
    target: 450,
    suffix: "+",
    label: "Proyek Selesai",
    description: "Hunian, kos eksklusif, kafe & bangunan komersial.",
  },
];

interface PillarPoint {
  title: string;
  desc: string;
  advantage: string;
}

interface PillarItem {
  id: string;
  num: string;
  icon: typeof ShieldCheck;
  title: string;
  subtitle: string;
  intro: string;
  points: PillarPoint[];
  waMessage: string;
}

const pillarsData: PillarItem[] = [
  {
    id: "01",
    num: "01",
    icon: ShieldCheck,
    title: "Desain & Bangun Satu Pintu",
    subtitle: "Satu tim, tanpa salah tafsir",
    intro: "Dari sketsa awal hingga serah terima, semua ditangani satu tim arsitek dan kontraktor.",
    points: [
      {
        title: "Arsitek & pelaksana menyatu",
        desc: "Detail estetika dan struktur dibangun presisi sesuai visual 3D.",
        advantage: "Tidak ada saling lempar tanggung jawab.",
      },
      {
        title: "Pekerjaan berjalan paralel",
        desc: "Persiapan tapak dan pengadaan material berjalan beriringan.",
        advantage: "Cocok untuk target waktu ketat.",
      },
      {
        title: "Tanpa biaya perantara",
        desc: "Tidak ada markup ganda atau fee konsultan terpisah.",
        advantage: "Anggaran terserap ke mutu bangunan.",
      },
    ],
    waMessage: "Halo Ngastadalem, saya ingin bertanya lebih lanjut mengenai layanan Desain & Bangun Satu Pintu.",
  },
  {
    id: "02",
    num: "02",
    icon: FileSpreadsheet,
    title: "RAB 100% Transparan",
    subtitle: "Setiap rupiah ada rinciannya",
    intro: "RAB tertulis per pekerjaan: spesifikasi material, volume, durasi, dan upah.",
    points: [
      {
        title: "Spesifikasi & volume riil",
        desc: "Merek semen, ketebalan besi, tipe kabel, lengkap dengan volume dan siap diaudit.",
        advantage: "Anda memegang kendali penuh.",
      },
      {
        title: "Pembayaran bertahap",
        desc: "Termin mengikuti progres fisik, ditagih setelah opname bersama disepakati.",
        advantage: "Dana sebanding dengan kemajuan nyata.",
      },
      {
        title: "Harga dikunci di awal",
        desc: "Perubahan spesifikasi wajib lewat addendum dengan persetujuan Anda.",
        advantage: "Bebas khawatir biaya tak terduga.",
      },
    ],
    waMessage: "Halo Ngastadalem, saya ingin bertanya mengenai transparansi RAB dan skema pembayaran bertahap.",
  },
  {
    id: "03",
    num: "03",
    icon: Sliders,
    title: "Anggaran & Grade Fleksibel",
    subtitle: "Premium, Menengah, atau Hemat",
    intro: "Kami tidak membatasi impian Anda pada satu standar biaya.",
    points: [
      {
        title: "Grade Premium",
        desc: "Marmer, kayu solid oven, smart system, pencahayaan custom.",
        advantage: "Hunian mewah, vila, kafe ikonik.",
      },
      {
        title: "Grade Menengah (Paling diminati)",
        desc: "Granit tile A, HPL premium, baja SNI dengan biaya efisien.",
        advantage: "Rumah modern, kos eksklusif, kafe & resto.",
      },
      {
        title: "Grade Hemat",
        desc: "Desain fungsional, material lokal awet, struktur tetap kuat.",
        advantage: "Rumah tumbuh, renovasi, usaha berkembang.",
      },
    ],
    waMessage: "Halo Ngastadalem, saya ingin berkonsultasi mengenai pilihan grade anggaran (Grade Premium, Menengah, atau Hemat) untuk proyek saya.",
  },
  {
    id: "04",
    num: "04",
    icon: Eye,
    title: "Pengawasan & Garansi Perawatan",
    subtitle: "Dipantau sampai setelah serah terima",
    intro: "Laporan digital berkala, pengawasan bertahap oleh arsitek, dan masa garansi pemeliharaan.",
    points: [
      {
        title: "Laporan kemajuan digital",
        desc: "Foto, video, dan catatan pekerjaan dikirim ke grup koordinasi tiap minggu.",
        advantage: "Tenang memantau dari luar kota.",
      },
      {
        title: "Inspeksi bertahap arsitek",
        desc: "Site Manager dan Principal Architect cek tahap krusial: cor dak, pipa, listrik, acian, nat.",
        advantage: "Struktur kuat, finishing rapi.",
      },
      {
        title: "Masa pemeliharaan & servis",
        desc: "Rembes, retak rambut, atau fitting pintu bermasalah, tim kami datang memperbaiki.",
        advantage: "Investasi jangka panjang terlindungi.",
      },
    ],
    waMessage: "Halo Ngastadalem, saya ingin bertanya mengenai sistem pengawasan proyek dan garansi perawatan pasca serah terima.",
  },
];

const servicesData: ServiceData[] = [
  {
    id: "desain",
    name: "Desain",
    subtitle: "Konsep 3D, gambar kerja arsitektur & struktur lengkap",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Konsultasi dan desain arsitektur interior Ngastadalem",
    description:
      "Perancangan konsep arsitektur dan interior yang kontekstual, estetis, dan fungsional. Tim kami menyusun gambar kerja komprehensif, visualisasi 3D fotorealistis, hingga analisis pencahayaan dan penghawaan alami yang optimal.",
    deliverables: [
      "Konsep Desain & Perencanaan Tata Ruang",
      "Gambar Kerja Arsitektur, Struktur & MEP Lengkap",
      "Visualisasi Render 3D Eksterior & Interior",
      "Penyusunan RAB Rinci Sesuai Pilihan Grade Anggaran",
    ],
  },
  {
    id: "bangun-baru",
    name: "Bangun Baru",
    subtitle: "Konstruksi fisik turnkey bergaransi struktur",
    image: "/images/kost-eksklusif-sleman.jpg",
    alt: "Pembangunan baru rumah kost, hunian, dan cafe oleh Ngastadalem",
    description:
      "Realisasi fisik konstruksi dari nol dengan standar teknik sipil yang kokoh, rapi, dan tepat waktu. Melayani pembangunan rumah tinggal, rumah kost produktif berdaya sewa tinggi, villa, cafe, hingga fasilitas komersial.",
    deliverables: [
      "Struktur Beton Bertulang & Rangka Baja SNI",
      "Pekerjaan Dinding, Fasad Arsitektural & Atap Kedap",
      "Instalasi Kelistrikan, Plumbing & Sanitasi Standar",
      "Pengawasan Mutu Lapangan Terjadwal",
    ],
  },
  {
    id: "renovasi",
    name: "Renovasi",
    subtitle: "Peremajaan fasad, tambah lantai & penataan ulang",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    alt: "Renovasi dan peremajaan bangunan bernuansa hangat",
    description:
      "Transformasi bangunan eksisting untuk memperbarui estetika, memperluas kapasitas, atau memperbaiki kelemahan struktur. Kami menangani peremajaan fasad, penambahan lantai, hingga konversi fungsi ruang secara efisien.",
    deliverables: [
      "Audit Kerusakan Bangunan & Solusi Perbaikan",
      "Pembaruan Fasad Modern Bernuansa Hangat",
      "Penambahan Lantai / Perluasan Ruang Tinggal",
      "Penyesuaian Anggaran Fleksibel Sesuai Tahapan Renovasi",
    ],
  },
  {
    id: "interior-furnitur",
    name: "Interior/Furnitur",
    subtitle: "Workshop custom joinery, kitchen set & loose furniture",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    alt: "Interior dan custom furniture buatan workshop Ngastadalem",
    description:
      "Pengerjaan interior custom dan furnitur lepas-pasang (built-in & loose furniture) langsung dari workshop sendiri. Menghadirkan keselarasan tekstur kayu, pencahayaan hangat, dan ruang simpan ergonomis yang memaksimalkan setiap sudut.",
    deliverables: [
      "Custom Kitchen Set, Wardrobe & Backdrop TV",
      "Furnitur Built-in Kamar Kost & Kamar Tidur Utama",
      "Penyesuaian Material: Kayu Solid, Plywood HPL, Duco",
      "Pilihan Grade Premium, Menengah, maupun Hemat",
    ],
  },
  {
    id: "maintenance",
    name: "Maintenance",
    subtitle: "Perawatan atap, kelistrikan, plumbing & sanitasi",
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

interface AboutAndServicesProps {
  onOpenInquiry: (serviceName?: string) => void;
}

export default function AboutAndServices({ onOpenInquiry }: AboutAndServicesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState<string>("desain");
  const [openPillarId, setOpenPillarId] = useState<string>("01");

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

            setCounts(stats.map((s) => Math.floor(easeProgress * s.target)));

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

  const currentService =
    servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  return (
    <section
      id="about"
      className="pt-14 pb-10 sm:pt-28 sm:pb-16 px-6 sm:px-12 md:px-16 bg-[#F7F4EE] border-b border-[#E8E2D6] relative scroll-mt-20"
      data-purpose="about-and-services-unified"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow Tag */}
        <div className="flex items-center gap-4 mb-8">
          <span className="eyebrow-text text-[#C89B5C] font-mono tracking-widest">
            {"//"} TENTANG &amp; LAYANAN KAMI
          </span>
          <span className="h-[1px] w-28 bg-[#C89B5C]/40" />
        </div>

        {/* Studio Identity Headline */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-architectural leading-[1.08] text-[#1E1714]">
              Dua Dekade Membangun Secara Terukur
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#66584E] leading-relaxed max-w-3xl">
              <strong className="text-[#1E1714] font-semibold">Ngastadalem (Architecture &amp; Consultant)</strong> memadukan arsitektur, konstruksi, interior custom, hingga perawatan bangunan dalam satu alur kerja yang transparan. Setiap rupiah anggaran Anda kami kelola agar memberi nilai terbaik.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right pt-2">
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-[#DCD5C9] bg-[#FFFDF9] text-xs font-mono uppercase tracking-widest text-[#5C4D42] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C89B5C] animate-pulse" />
              Bandung &bull; Jakarta &bull; Semarang &bull; Yogyakarta &bull; Sejak 2006
            </div>
          </div>
        </div>

        {/* Consolidated Metrics Strip (2 Kolom Berdampingan di Ponsel & Desktop) */}
        <div
          ref={containerRef}
          className="grid grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-8 rounded-2xl bg-[#FFFDF9] border border-[#E8E2D6] shadow-sm mb-14"
        >
          {stats.map((stat, idx) => (
            <div key={stat.label} className="flex flex-col justify-between">
              <div>
                <p className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1E1714]">
                  {counts[idx]}
                  <span className="text-[#C89B5C]">{stat.suffix}</span>
                </p>
                <p className="text-[10px] sm:text-xs font-mono tracking-wider uppercase text-[#1E1714] font-bold mt-1">
                  {stat.label}
                </p>
              </div>
              <p className="text-[11px] sm:text-xs text-[#8A796D] mt-1.5 leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Standar Integritas & Mutu Kerja (Mobile-First Accordion) */}
        <div className="mb-24">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-[#C89B5C] tracking-widest uppercase block mb-1">
              {"//"} MENGAPA MEMILIH KAMI
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1714]">
              Standar Integritas &amp; Mutu Kerja Ngastadalem
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#66584E] max-w-2xl leading-relaxed">
              Empat pilar komitmen nyata kami untuk memastikan setiap proyek berjalan terencana, transparan, dan tanpa kejutan biaya.
            </p>
            <p className="text-xs font-mono text-[#8A796D] mt-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C89B5C]" />
              <span className="hidden sm:inline">Klik kartu untuk melihat rincian.</span>
              <span className="sm:hidden">Ketuk kartu untuk melihat rincian.</span>
            </p>
          </div>

          {/* Accordion Stack */}
          <div className="space-y-4">
            {pillarsData.map((pillar) => {
              const isOpen = openPillarId === pillar.id;
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#FFFDF9] border-[#C89B5C] shadow-md ring-1 ring-[#C89B5C]/20"
                      : "bg-[#FFFDF9] border-[#E8E2D6] hover:border-[#C89B5C]/60"
                  }`}
                >
                  {/* Accordion Button / Header */}
                  <button
                    type="button"
                    id={`pillar-header-${pillar.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`pillar-panel-${pillar.id}`}
                    onClick={() => setOpenPillarId(isOpen ? "" : pillar.id)}
                    className="w-full min-h-[56px] p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B5C]"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#C89B5C] px-2.5 py-1 rounded-md bg-[#FAF6F0] border border-[#E8E2D6] shrink-0">
                        {pillar.num}
                      </span>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FAF6F0] text-[#C89B5C] border border-[#E8E2D6] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-base sm:text-lg font-bold text-[#1E1714] truncate sm:whitespace-normal">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-[#8A796D] hidden sm:block truncate mt-0.5">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[11px] font-mono font-medium text-[#8A796D] hidden md:inline">
                        {isOpen ? "Tutup" : "Buka Rincian"}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#C89B5C] text-white border-[#C89B5C]"
                            : "bg-[#FAF6F0] text-[#66584E] border-[#E8E2D6]"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div
                      id={`pillar-panel-${pillar.id}`}
                      role="region"
                      aria-labelledby={`pillar-header-${pillar.id}`}
                      className="px-5 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-[#E8E2D6]/70"
                    >
                      <p className="text-sm sm:text-base text-[#5C4D42] mb-6 leading-relaxed">
                        {pillar.intro}
                      </p>

                      {/* 3 Detail Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-6">
                        {pillar.points.map((pt, pIdx) => {
                          const isPopular = pillar.id === "03" && pIdx === 1;
                          return (
                            <div
                              key={pt.title}
                              className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
                                isPopular
                                  ? "bg-[#FFFDF9] border-[#C89B5C] ring-2 ring-[#C89B5C]/20 shadow-sm"
                                  : "bg-[#FAF7F2] border-[#E8E2D6]"
                              }`}
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#C89B5C]">
                                    Poin 0{pIdx + 1}
                                  </span>
                                  {isPopular && (
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold bg-[#C89B5C] text-white border border-[#C89B5C]">
                                      Paling Diminati
                                    </span>
                                  )}
                                </div>
                                <h5 className="text-base font-bold text-[#1E1714] mb-2 leading-snug">
                                  {pt.title}
                                </h5>
                                <p className="text-xs text-[#66584E] leading-relaxed mb-4">
                                  {pt.desc}
                                </p>
                              </div>
                              <div className="pt-3 border-t border-[#E8E2D6] flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#C89B5C] shrink-0 mt-0.5" />
                                <p className="text-xs text-[#1E1714] leading-snug">
                                  <span className="font-semibold text-[#B08038]">Keunggulan: </span>
                                  {pt.advantage}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* WhatsApp CTA per Pillar */}
                      <div className="pt-4 border-t border-[#E8E2D6]/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <span className="text-xs font-medium text-[#66584E]">
                          Ingin berdiskusi lebih detail mengenai standar ini?
                        </span>
                        <a
                          href={getWhatsAppUrl(pillar.waMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1F7A3E] hover:bg-[#25D366] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-sm hover:shadow self-start sm:self-auto group"
                        >
                          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                          </svg>
                          <span>Tanya Soal Ini via WhatsApp</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Closing CTA Banner */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#191412] text-[#F7F4EE] border border-[#C89B5C]/30 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C89B5C] font-bold block mb-1">
                KONSULTASI AWAL BEBAS BIAYA
              </span>
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#FAF7F2]">
                Punya rencana rumah, kafe, atau kos?
              </h4>
              <p className="text-xs sm:text-sm text-[#D5CBC1] mt-1.5 leading-relaxed">
                Ceritakan kebutuhan dan budget Anda. Tim arsitek dan estimator kami bantu hitung rancangan serta estimasi biaya yang transparan.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href={getWhatsAppUrl(
                  "Halo Ngastadalem, saya memiliki rencana pembangunan/renovasi dan ingin konsultasi kebutuhan serta estimasi biaya."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#12361B] hover:text-[#0c2412] text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Konsultasi Rencana Anda via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Services Navigation Anchor */}
        <div id="services" className="scroll-mt-24 pt-4 sm:pt-6">
          <div className="flex justify-between items-end gap-4 mb-8 sm:mb-12">
            <div>
              <span className="eyebrow-text text-[#C89B5C] font-mono tracking-widest block mb-2">
                {"//"} LAYANAN UTAMA STUDIO
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#1E1714]">
                Spesialisasi Ruang Dari Konsep Hingga Perawatan
              </h3>
              <p className="text-xs font-mono text-[#8A796D] mt-1.5 flex items-center gap-1.5 sm:hidden">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89B5C]" />
                Ketuk layanan di bawah untuk melihat rincian ruang lingkup.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Services List Tabs (Sticky di desktop & terdapat baris subtitle ringkas) */}
            <div className="lg:col-span-6 flex flex-col space-y-2.5 sm:space-y-3.5 lg:sticky lg:top-28 self-start" role="tablist">
              {servicesData.map((service) => {
                const isActive = service.id === activeServiceId;
                return (
                  <button
                    key={service.id}
                    type="button"
                    role="tab"
                    id={`service-tab-${service.id}`}
                    aria-selected={isActive}
                    aria-controls="service-detail-panel"
                    onClick={() => setActiveServiceId(service.id)}
                    className={`w-full min-h-[52px] sm:min-h-[64px] py-3.5 px-4 sm:px-5 rounded-2xl text-left flex items-center justify-between transition-all duration-200 border ${
                      isActive
                        ? "bg-[#FFFDF9] border-[#C89B5C] shadow-sm ring-1 ring-[#C89B5C]/20 text-[#1E1714]"
                        : "bg-transparent border-transparent text-[#8A796D] hover:text-[#1E1714] hover:bg-[#FAF6F0]"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shrink-0 ${
                          isActive
                            ? "bg-[#C89B5C] ring-4 ring-[#C89B5C]/20 scale-110"
                            : "bg-[#DCD5C9]"
                        }`}
                      />
                      <div className="min-w-0 flex flex-col">
                        <span
                          className={`text-base sm:text-2xl md:text-3xl tracking-tight truncate ${
                            isActive ? "font-bold text-[#1E1714]" : "font-normal text-[#8A796D]"
                          }`}
                        >
                          {service.name}
                        </span>
                        <span className="text-[11px] sm:text-xs text-[#8A796D] truncate mt-0.5 hidden sm:block">
                          {service.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {isActive && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#C89B5C] font-semibold bg-[#FAF6F0] px-2 py-0.5 rounded border border-[#E8E2D6] hidden sm:inline">
                          Terpilih
                        </span>
                      )}
                      <ArrowRight
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                          isActive
                            ? "text-[#C89B5C] translate-x-1 opacity-100"
                            : "text-[#D6CCC2] opacity-40"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Service Dynamic Preview Card (Di HP tampil tepat di bawah daftar) */}
            <div
              id="service-detail-panel"
              role="tabpanel"
              aria-labelledby={`service-tab-${currentService.id}`}
              className="lg:col-span-6 flex flex-col justify-start space-y-5 sm:space-y-6 pt-4 lg:pt-0"
            >
              <div className="w-full aspect-[4/3] bg-[#EFE9DF] overflow-hidden rounded-2xl relative shadow-md border border-[#E0D7CB] select-none">
                <Image
                  key={currentService.image}
                  src={currentService.image}
                  alt={currentService.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-all duration-700 ease-out transform pointer-events-none select-none"
                  draggable={false}
                />
                {/* Watermark Protection */}
                <WatermarkOverlay />
                <div className="absolute top-3 left-3 z-30 bg-[#191412]/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-widest text-[#FAF6F0] border border-[#C89B5C]/40 select-none">
                  {currentService.name}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-base leading-relaxed text-[#5C4D42] transition-all duration-300">
                  {currentService.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-3 space-y-2.5 border-t border-[#E8E2D6]">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#8A796D] font-semibold">
                    Ruang Lingkup &amp; Standar Kerja:
                  </p>
                  <div className="space-y-2">
                    {currentService.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-xs text-[#2E241E]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C89B5C] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={getWhatsAppUrl(
                      `Halo Ngastadalem, saya ingin berkonsultasi mengenai spesialisasi layanan ${currentService.name}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F7A3E] hover:bg-[#25D366] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-sm group"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Konsultasi WA</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => onOpenInquiry(currentService.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#1E1714] font-bold hover:text-[#C89B5C] transition-colors py-2 px-3 group"
                  >
                    <span>Form Detail</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
