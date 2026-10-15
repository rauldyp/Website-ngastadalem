"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Expand, Layers } from "lucide-react";

import WatermarkOverlay from "./WatermarkOverlay";
import { formatGradeLabel } from "@/constants/grades";

export interface ProjectItem {
  id: string;
  name: string;
  area: string;
  category: "RESIDENTIAL" | "KOST" | "CAFE" | "COMMERCIAL" | "HOSPITALITY";
  year: string;
  location: string;
  image: string;
  alt: string;
  concept: string;
  materials: string[];
  gallery: string[];
  budgetGrade?: string;
}

export const projectsList: ProjectItem[] = [
  {
    id: "interior-garuda-semarang",
    name: "Interior Garuda Indonesia Semarang",
    area: "Area Kantor & Layanan",
    category: "COMMERCIAL",
    year: "2025",
    location: "Banyumanik, Semarang",
    image: "/images/garuda/IMG_3120.JPG",
    alt: "Interior Garuda Indonesia Semarang di Banyumanik - Counter meja pelayanan custom duco, backdrop peta dunia Garuda Indonesia Sales Outlet, partisi kaca, dan interior komersial",
    concept:
      "Desain interior custom dan pengerjaan fit-out ruang komersial kantor layanan Garuda Indonesia di Banyumanik, Semarang. Menghadirkan meja counter resepsionis/pelayanan aerodinamis modern bergaris lengkung dengan finishing cat duco putih high-gloss, partisi kaca tempered dengan aksen stiker motif etnik nusantara, lantai kayu bernuansa hangat, dan penataan ruang kerja ergonomis untuk pelayanan prima.",
    materials: [
      "Custom Counter Meja Lengkung Duco High-Gloss",
      "Lantai Parquet Vinyl Motif Kayu Alami",
      "Partisi Kaca Tempered & Sanblast Motif Nusantara",
      "Kusen Aluminium Hitam Minimalis & Kursi Ergonomis",
    ],
    gallery: [
      "/images/garuda/IMG_3120.JPG",
      "/images/garuda/IMG_3109.JPG",
      "/images/garuda/IMG_3110.JPG",
      "/images/garuda/IMG_3111.JPG",
      "/images/garuda/IMG_3113.JPG",
      "/images/garuda/IMG_3114.JPG",
      "/images/garuda/IMG_3115.JPG",
      "/images/garuda/IMG_3116.JPG",
      "/images/garuda/IMG_3117.JPG",
      "/images/garuda/IMG_3118.JPG",
      "/images/garuda/IMG_3119.JPG",
      "/images/garuda/IMG_3121.JPG",
      "/images/garuda/IMG_3122.JPG",
      "/images/garuda/IMG_3123.JPG",
      "/images/garuda/IMG_3124.JPG",
      "/images/garuda/IMG_3125.JPG",
      "/images/garuda/IMG_3126.JPG",
      "/images/garuda/IMG_3127.JPG",
      "/images/garuda/IMG_3128.JPG",
      "/images/garuda/IMG_3129.JPG",
      "/images/garuda/IMG_3130.JPG",
      "/images/garuda/IMG_3131.JPG",
      "/images/garuda/IMG_3132.JPG",
      "/images/garuda/IMG_3133.JPG",
    ],
    budgetGrade: "Grade Medium (Elegan & Terukur)",
  },
  {
    id: "pedurungan-residence",
    name: "Pedurungan Residence — Rumah Tinggal Tropis Modern",
    area: "160 m² (High Ceiling)",
    category: "RESIDENTIAL",
    year: "2025",
    location: "Pedurungan, Semarang",
    image: "/images/pedurungan/pedurungan-eksterior.jpg",
    alt: "Pedurungan Residence Semarang - Fasad gabled roof bertekstur kamprot abu-abu, pintu garasi hitam, dan interior high ceiling balok kayu ekspos",
    concept:
      "Desain arsitektur dan pembangunan rumah tinggal modern tropis di Pedurungan Semarang. Fasad mengusung bentuk gabled roof berkarakter kokoh dengan plester kamprot bertekstur arang dan bingkai putih presisi. Interior dirancang dengan konsep open-plan berplafon tinggi (high ceiling) berbalok kayu ekspos, partisi roster putih penyejuk sirkulasi, serta bukaan kaca geser lebar yang menyatu langsung ke inner garden asri berlimpah cahaya alami.",
    materials: [
      "Plester Kamprot Tekstur Abu-abu & Cat Weatherproof",
      "Balok Kayu Ekspos Plafon Miring (High Ceiling)",
      "Partisi Roster Beton Geometris Putih",
      "Pintu Kaca Geser Aluminium & Taman Inner Courtyard",
    ],
    gallery: [
      "/images/pedurungan/pedurungan-eksterior.jpg",
      "/images/pedurungan/pedurungan-interior.jpg",
    ],
    budgetGrade: "Grade Medium (Elegan & Terukur)",
  },
  {
    id: "mijen-compact-house",
    name: "Mijen Compact Living — Rumah Fungsional Efisien",
    area: "90 m² (Lahan Kompak)",
    category: "RESIDENTIAL",
    year: "2025",
    location: "Mijen, Semarang",
    image: "/images/mijen/mijen-eksterior.jpg",
    alt: "Mijen Compact Living Semarang - Fasad batu alam paras krem bertekstur hangat, roster ventilasi, dan interior open space pantry taman belakang",
    concept:
      "Solusi rancang bangun rumah kompak cerdas untuk efisiensi lahan di Mijen Semarang. Fasad memadukan dinding batu alam paras krem bertekstur hangat, ventilasi roster geometris, dan kanopi berprofil tegas. Tata ruang interior dimaksimalkan dengan zonasi terbuka dari ruang keluarga santai, pantry kitchen set praktis, hingga akses pintu kaca tembus pandang ke area hijau belakang rumah untuk pencahayaan dan penghawaan alami yang optimal.",
    materials: [
      "Cladding Dinding Batu Alam Paras Krem",
      "Roster Beton Ventilasi Alami",
      "Kitchen Set HPL Serat Kayu & Granit Hitam",
      "Kusen Pintu Solid & Jendela Bukaan Taman Belakang",
    ],
    gallery: [
      "/images/mijen/mijen-eksterior.jpg",
      "/images/mijen/mijen-interior.jpg",
    ],
    budgetGrade: "Pilihan: Low Budget & Grade Medium",
  },
  {
    id: "pavilion-k-kost",
    name: "The K-Living — Rumah Kost Eksklusif",
    area: "1850 m² (28 Kamar)",
    category: "KOST",
    year: "2026",
    location: "Sleman, D.I. Yogyakarta",
    image: "/images/kost-eksklusif-sleman.jpg",
    alt: "Rumah Kost Eksklusif Sleman - Inner courtyard asri dengan kisi-kisi kayu dan balkon kamar privat",
    concept:
      "Desain arsitektur dan pembangunan rumah kost eksklusif dengan orientasi inner courtyard tropis. Menghadirkan sirkulasi udara optimal dan pencahayaan alami di setiap kamar, area komunal hijau, serta efisiensi zonasi ruang untuk kenyamanan penghuni sekaligus memaksimalkan ROI pemilik.",
    materials: [
      "Batu Candi Andesit Merapi",
      "Kisi-kisi Kayu Bengkirai",
      "Homogeneous Tile 60x60",
      "Smart Lock & Eco Sanitary Toto",
    ],
    gallery: [
      "/images/kost-eksklusif-sleman.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    ],
    budgetGrade: "Bisa Disesuaikan: Grade High, Medium, & Low Budget",
  },
  {
    id: "dago-roastery-cafe",
    name: "Dago Hillside Roastery & Cafe",
    area: "420 m²",
    category: "CAFE",
    year: "2025",
    location: "Dago, Kota Bandung",
    image: "/images/cafe-kopi-loka.jpg",
    alt: "Dago Hillside Roastery & Cafe - Arsitektur cafe modern hangat dengan bata terakota dan outdoor deck",
    concept:
      "Desain arsitektur dan renovasi bangunan komersial cafe bernuansa hangat. Mengombinasikan bata terakota ekspos, kisi-kisi kayu jati solid, serta bukaan kaca masif untuk memaksimalkan daya tampung indoor-outdoor yang estetik, instagramable, dan efisien dalam operasional.",
    materials: [
      "Bata Terakota Ekspos",
      "Rangka Kayu Jati Solid",
      "Kusen Aluminium Hitam Powder Coating",
      "Outdoor Timber Decking & Warm LED",
    ],
    gallery: [
      "/images/cafe-kopi-loka.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    ],
    budgetGrade: "Bisa Disesuaikan: Grade High, Medium, & Low Budget",
  },
  {
    id: "cantilever-house-mr-d",
    name: "The Cantilever House — D Residence",
    area: "320 m² (Split-Level 3 Lantai)",
    category: "RESIDENTIAL",
    year: "2025",
    location: "BSD City, Tangerang Selatan",
    image: "/images/mr.d/20241218_144336.jpg",
    alt: "The Cantilever House BSD City - Fasad modern split-level dengan boks kayu oven melayang, kisi roster putih, jendela kaca tinted hitam, dan tangga teras batu alam",
    concept:
      "Desain arsitektur dan pembangunan rumah tinggal modern tropis kontemporer di BSD City. Mengusung massa kubikal melayang (cantilever) berbalut kayu oven hangat pada lantai atas, dipadukan dengan dinding roster ventilasi putih penyejuk sirkulasi mikro, bukaan kaca tempered berbingkai hitam, dan tangga trap batu alam andesit menuju entrance teras yang megah.",
    materials: [
      "Boks Cantilever Kayu Oven Weatherproof",
      "Dinding Roster Beton Geometris Putih",
      "Kaca Tempered Tinted Kusen Aluminium Hitam",
      "Tangga Teras Batu Alam Andesit & Paving Block",
    ],
    gallery: [
      "/images/mr.d/20241218_144336.jpg",
      "/images/pedurungan/pedurungan-interior.jpg",
    ],
    budgetGrade: "Grade High (Mewah & Prestisius)",
  },
  {
    id: "dago-hillside-summit-villa",
    name: "Dago Hillside Summit Villa & Residence",
    area: "480 m² (Villa Kontur 3 Lantai)",
    category: "HOSPITALITY",
    year: "2024",
    location: "Dago Pakar, Kota Bandung",
    image: "/images/IMG-20210512-WA0032.jpg",
    alt: "Dago Hillside Summit Villa Bandung - Fasad modern 3 lantai berkontur dengan cantilever putih dramatis, kisi kayu vertikal, basement carport, dan dinding batu alam gelap",
    concept:
      "Desain rancang bangun villa peristirahatan mewah berkontur lereng di kawasan sejuk Dago Pakar Bandung. Menghadirkan cantilever geometris modern berwarna putih kontras dengan latar perbukitan hijau, aksen kisi kayu vertikal penyaring silau, dinding penahan batu alam andesit berlampu sorot malam, serta koridor balkon kaca menghadap panorama pinus asri.",
    materials: [
      "Balok Beton Cantilever & Cat Weather-shield Premium",
      "Dinding Batu Alam Andesit Gelap Bertekstur",
      "Kisi-Kisi Kayu Ulin Vertikal & Railing Kaca Frameless",
      "Basement Carport dengan Pintu Lipat Minimalis",
    ],
    gallery: [
      "/images/IMG-20210512-WA0032.jpg",
      "/images/IMG-20210512-WA0011.jpg",
      "/images/IMG-20210512-WA0004.jpg",
      "/images/IMG-20210701-WA0075.jpg",
    ],
    budgetGrade: "Grade High (Luxury Finishing)",
  },
  {
    id: "palagan-green-pavilion",
    name: "Palagan Garden Residence — Rumah Kebun Tropis",
    area: "210 m² (Taman Luas)",
    category: "RESIDENTIAL",
    year: "2024",
    location: "Jl. Palagan, Sleman, D.I. Yogyakarta",
    image: "/images/IMG-20210928-WA0107.jpg",
    alt: "Palagan Garden Residence Sleman - Rumah tropis modern 2 lantai dengan halaman rumput luas asri, teras dek kayu outdoor, kanopi baja hitam, dan carport batu alam sikat",
    concept:
      "Rancang bangun hunian keluarga modern tropis dengan hamparan halaman rumput hijau yang luas di Palagan, Sleman. Menghadirkan teras dek kayu outdoor untuk bersantai, kanopi baja hitam minimalis, atap miring asimetris dengan ventilasi atas, serta carport berlantai batu alam sikat yang kokoh dan natural.",
    materials: [
      "Dek Teras Kayu Bengkirai Outdoor Treated",
      "Kanopi Rangka Baja Hitam & Kaca Laminated",
      "Lantai Carport Batu Alam Sikat Pola Acak",
      "Kusen Pintu Kaca Geser Aluminium Powder Coating",
    ],
    gallery: [
      "/images/IMG-20210928-WA0107.jpg",
      "/images/IMG-20210928-WA0110.jpg",
      "/images/IMG-20210928-WA0112.jpg",
    ],
    budgetGrade: "Grade Medium (Elegan & Terukur)",
  },
  {
    id: "antapani-sanctuary-courtyard",
    name: "Antapani Sanctuary — Roster Living",
    area: "180 m² (Open-Plan Living)",
    category: "RESIDENTIAL",
    year: "2025",
    location: "Antapani, Kota Bandung",
    image: "/images/antapani/20230809_114732.jpg",
    alt: "Antapani Sanctuary Bandung - Interior open-space lantai granit kilap, partisi 3D roster putih pembatas ruang keluarga dan pantry, drop ceiling ambient light, dan bukaan jendela tinggi",
    concept:
      "Desain arsitektur dan konstruksi hunian keluarga bernuansa lega dan cerah di Antapani Bandung. Tata ruang open-plan berlantai granit kilap 60x60 dengan partisi arsitektural roster 3D putih pembatas ruang keluarga dan pantry dapur, drop ceiling dengan indirect warm lighting, dan bukaan jendela kaca tinggi untuk sirkulasi udara silang yang sejuk.",
    materials: [
      "Partisi 3D Roster Beton Putih Geometris",
      "Lantai Granit Tile Kilap 60x60 Motif Alami",
      "Drop Ceiling Gypsum dengan Hidden LED Warm White",
      "Dapur Bersih Keramik Subway Tiles & Top Meja Granit",
    ],
    gallery: [
      "/images/antapani/20230809_114732.jpg",
      "/images/antapani/20230921_164557.jpg",
      "/images/antapani/20230617_1351382.jpg",
    ],
    budgetGrade: "Grade Medium (Elegan & Terukur)",
  },
  {
    id: "bespoke-oak-kitchen-kemang",
    name: "Bespoke Oak Kitchen & Living Suite",
    area: "Custom Interior Fit-Out",
    category: "COMMERCIAL",
    year: "2024",
    location: "Kemang, Jakarta Selatan",
    image: "/images/antapani/20230921_164557.jpg",
    alt: "Bespoke Oak Kitchen Kemang Jakarta Selatan - Custom kitchen set built-in kayu oak natural, aksen LED strip tersembunyi, kompor tanam, dan kran matte black",
    concept:
      "Pengerjaan interior custom built-in cabinetry dan kitchen set langsung dari workshop Ngastadalem untuk kediaman privat di Kemang, Jakarta Selatan. Menggunakan bahan multipleks tebal finishing HPL serat kayu oak hangat, aksen lampu LED profil tersembunyi, kompor tanam tanam kaca tempered, cooker hood terintegrasi, dan kran air fleksibel matte black minimalis.",
    materials: [
      "Kabinet Multipleks Plywood Tebal Finishing Oak HPL",
      "Lampu Profil LED Strip Tersembunyi 3000K Warm",
      "Engsel & Rel Laci Soft-Close Heavy Duty",
      "Kran Cuci Piring Matte Black & Kompor Tanam Tempered",
    ],
    gallery: [
      "/images/antapani/20230921_164557.jpg",
      "/images/antapani/20230617_1351382.jpg",
      "/images/antapani/20230809_114732.jpg",
    ],
    budgetGrade: "Grade High & Medium",
  },
];

interface FeaturedWorksProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function FeaturedWorks({ onSelectProject }: FeaturedWorksProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const filteredProjects =
    selectedFilter === "ALL"
      ? projectsList
      : projectsList.filter((p) => p.category === selectedFilter);

  const safeIndex = currentIndex % filteredProjects.length;
  const currentProject = filteredProjects[safeIndex] || filteredProjects[0];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  }, [filteredProjects.length]);

  // Autoplay (5000ms) with pause on hover
  useEffect(() => {
    if (isHovered) return;

    autoplayTimerRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isHovered, handleNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
  };

  return (
    <section
      id="projects"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 bg-[#191412] text-[#FAF6F0] select-none focus:outline-none border-b border-[#2D231D]"
      data-purpose="featured-projects-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow Tag */}
        <div className="flex items-center gap-4 mb-8">
          <span className="eyebrow-text text-[#C89B5C] font-mono tracking-widest">
            {"//"} PORTOFOLIO KARYA TERPILIH
          </span>
          <span className="h-[1px] w-24 bg-[#C89B5C]/30" />
        </div>

        {/* Section Title & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-architectural text-white">
              Portofolio Bangunan, <br />
              Kost &amp; Komersial
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {[
              { key: "ALL", label: "Semua" },
              { key: "COMMERCIAL", label: "Komersial" },
              { key: "KOST", label: "Kost" },
              { key: "CAFE", label: "Kafe" },
              { key: "RESIDENTIAL", label: "Hunian" },
              { key: "HOSPITALITY", label: "Perhotelan" },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => {
                  setSelectedFilter(filter.key);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-1.5 rounded-full border transition-all duration-200 ${
                  selectedFilter === filter.key
                    ? "bg-[#C89B5C] text-[#191412] border-[#C89B5C] font-semibold shadow-md"
                    : "bg-transparent text-[#D4C8BC] border-[#382C24] hover:border-[#C89B5C] hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Showcase Container */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`max-w-5xl mx-auto ${isHovered ? "carousel-is-paused" : ""}`}
        >
          {/* Main Visual Presentation */}
          <div
            onClick={() => onSelectProject(currentProject)}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#241C17] group cursor-pointer rounded-sm border border-[#3A2D25] shadow-2xl"
          >
            <Image
              key={currentProject.id}
              src={currentProject.image}
              alt={currentProject.alt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1024px"
              className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.03] pointer-events-none select-none"
              draggable={false}
            />
            {/* Architectural Watermark & Anti-Theft Shield */}
            <WatermarkOverlay />

            <div className="absolute inset-0 bg-gradient-to-t from-[#191412]/80 via-transparent to-black/20 pointer-events-none" />

            {/* Slide Index Badge */}
            <div className="absolute top-5 right-6 z-30 font-mono text-xs uppercase tracking-widest text-[#FAF6F0] bg-[#191412]/70 backdrop-blur-md px-3.5 py-1 rounded-sm border border-[#C89B5C]/30 select-none">
              {safeIndex + 1} / {filteredProjects.length} Proyek
            </div>

            {/* Quick Expand Hint */}
            <div className="absolute bottom-5 right-6 z-30 flex items-center gap-2 bg-[#191412]/75 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-[#FAF6F0] opacity-90 group-hover:bg-[#C89B5C] group-hover:text-[#191412] group-hover:border-[#C89B5C] transition-all select-none">
              <Expand className="w-3.5 h-3.5" />
              <span>Detail Proyek &amp; Material</span>
            </div>
          </div>

          {/* Project Meta Information */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 tracking-tight">
                {currentProject.name}{" "}
                <span className="text-[#C89B5C] font-light mx-2">•</span>{" "}
                <span className="text-[#D4C8BC] text-base">{currentProject.area}</span>
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block px-3 py-1 text-[10px] font-mono tracking-widest uppercase border border-[#45362C] text-[#D8C7B5] rounded-sm bg-[#221B16]">
                  {currentProject.category}
                </span>
                <span className="text-xs text-[#BCADA0] font-sans">
                  {currentProject.location}
                </span>
                {currentProject.budgetGrade && (
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono tracking-wider border border-[#C89B5C]/35 text-[#E0BE5B] rounded-sm bg-[#32251D]/60">
                    {formatGradeLabel(currentProject.budgetGrade)}
                  </span>
                )}
              </div>
            </div>

            <div className="text-sm font-mono text-[#C89B5C] font-medium tracking-wider">
              {currentProject.year}
            </div>
          </div>

          {/* Progress Track & Carousel Controls */}
          <div className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#2D231D]">
            {/* Interactive Progress Indicators */}
            <div
              className="flex items-center gap-3 w-auto"
              role="tablist"
              aria-label="Project carousel indicators"
            >
              {filteredProjects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to ${proj.name}`}
                  className={`h-[3px] overflow-hidden transition-all duration-300 focus:outline-none rounded-full project-indicator ${
                    idx === safeIndex
                      ? "w-20 bg-[#C89B5C] is-active"
                      : "w-10 bg-[#382C24] hover:bg-[#524136]"
                  }`}
                >
                  <span className="indicator-fill block" />
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="w-10 h-10 flex items-center justify-center border border-[#382C24] hover:border-[#C89B5C] hover:bg-[#251D18] text-[#D4C8BC] hover:text-white transition-all rounded-full focus:outline-none"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next project"
                  className="w-10 h-10 flex items-center justify-center border border-[#382C24] hover:border-[#C89B5C] hover:bg-[#251D18] text-[#D4C8BC] hover:text-white transition-all rounded-full focus:outline-none"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => onSelectProject(currentProject)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#D4C8BC] hover:text-white border border-[#382C24] hover:border-[#C89B5C] hover:bg-[#251D18] rounded-full transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-[#C89B5C]" />
                <span>Spesifikasi &amp; Material</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
