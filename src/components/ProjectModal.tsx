"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ArrowUpRight, MapPin, Calendar, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectItem } from "./FeaturedWorks";
import WatermarkOverlay from "./WatermarkOverlay";
import { formatGradeLabel } from "@/constants/grades";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireSimilar: (projectName: string) => void;
}

export default function ProjectModal({
  project,
  onClose,
  onInquireSimilar,
}: ProjectModalProps) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  if (!project) return null;

  const currentGalleryImg =
    project.gallery && project.gallery.length > 0
      ? project.gallery[activeGalleryIndex] || project.image
      : project.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#1A1412] text-[#FAF6F0] border border-[#3A2D25] rounded-sm p-6 sm:p-10 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Case Study"
          className="absolute top-6 right-6 z-20 p-2 bg-[#2A1F19] rounded-full text-[#D4C8BC] hover:text-white hover:bg-[#382C24] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-0.5 text-[10px] font-mono tracking-widest uppercase border border-[#4A392F] text-[#C89B5C] bg-[#221B16] rounded-sm">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#A8988B]">
              {"//"} ARCHITECTURE &amp; CONSULTANT ARCHIVE
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {project.name}
          </h3>

          <div className="flex flex-wrap items-center gap-6 mt-3 text-xs font-mono text-[#C4B5A5]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C89B5C]" />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#C89B5C]" />
              {project.area}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C89B5C]" />
              Tahun {project.year}
            </span>
            {project.budgetGrade && (
              <span className="px-2.5 py-0.5 text-[10px] font-mono border border-[#C89B5C]/40 text-[#E0BE5B] rounded bg-[#32251D]">
                {formatGradeLabel(project.budgetGrade)}
              </span>
            )}
          </div>
        </div>

        {/* Gallery Showcase */}
        <div className="space-y-4 mb-8">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-sm bg-[#241C17] border border-[#3A2D25] group select-none">
            <Image
              src={currentGalleryImg}
              alt={project.name}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-center transition-all duration-500 pointer-events-none select-none"
              draggable={false}
            />

            {/* Architectural Watermark & Protective Anti-Save Shield */}
            <WatermarkOverlay />

            {/* Gallery Navigation Buttons & Counter */}
            {project.gallery && project.gallery.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveGalleryIndex(
                      (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
                    )
                  }
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-[#C89B5C] text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveGalleryIndex(
                      (prev) => (prev + 1) % project.gallery.length
                    )
                  }
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-[#C89B5C] text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 right-3 z-30 px-3 py-1 bg-black/75 backdrop-blur-md rounded-full text-[11px] font-mono text-[#FAF6F0] border border-[#C89B5C]/30 select-none">
                  {activeGalleryIndex + 1} / {project.gallery.length} Foto
                </div>
              </>
            )}
          </div>

          {project.gallery && project.gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
              {project.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveGalleryIndex(idx)}
                  className={`relative w-20 h-14 sm:w-24 sm:h-16 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
                    idx === activeGalleryIndex
                      ? "border-[#C89B5C] scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.name} detail ${idx + 1}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Narrative & Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#2E241E] pt-8">
          <div className="md:col-span-7 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C89B5C] font-semibold">
              {"//"} FILOSOFI &amp; KONSEP RUANG
            </h4>
            <p className="text-sm leading-relaxed text-[#D4C8BC] font-light">
              {project.concept}
            </p>
          </div>

          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C89B5C] font-semibold">
              {"//"} MATERIAL &amp; SPESIFIKASI
            </h4>
            <ul className="space-y-2">
              {project.materials.map((mat) => (
                <li
                  key={mat}
                  className="text-xs font-mono text-[#D4C8BC] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89B5C]" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-10 pt-6 border-t border-[#2E241E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onInquireSimilar(project.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C89B5C] text-[#191412] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#DEB070] transition-colors shadow-lg"
          >
            <span>Konsultasi Proyek Serupa</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider text-[#A8988B] hover:text-white transition-colors"
          >
            Kembali ke Portofolio
          </button>
        </div>
      </div>
    </div>
  );
}
