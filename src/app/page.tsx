"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutAndServices from "@/components/AboutAndServices";
import FeaturedWorks, { ProjectItem } from "@/components/FeaturedWorks";
import Testimonials from "@/components/Testimonials";
import LandscapeBreak from "@/components/LandscapeBreak";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState<string>(
    "Desain (Grade Premium, Menengah, Hemat)"
  );
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) {
      setInquiryService(serviceName);
    }
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleInquireFromProject = (projectName: string) => {
    setSelectedProject(null);
    setInquiryService(`Project consultation inspired by ${projectName}`);
    setIsInquiryOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#F7F4EE] text-[#1C1815] selection:bg-[#2E241E] selection:text-[#FAF6F0] flex flex-col">
      {/* Editorial Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      <main className="flex-1 w-full">
        {/* Section 1: Hero Section */}
        <Hero onOpenInquiry={() => handleOpenInquiry()} />

        {/* Section 2: Portofolio Karya (Langsung Setelah Hero) */}
        <FeaturedWorks onSelectProject={handleSelectProject} />

        {/* Section 3: Tentang & Layanan Studio (Merged & Condensed Section 02 & 03) */}
        <AboutAndServices onOpenInquiry={handleOpenInquiry} />

        {/* Section 4: Client Stories & Testimonials (Section 03) */}
        <Testimonials />

        {/* Section 6: Landscape Image Break */}
        <LandscapeBreak />

        {/* Section 7: Call to Action (The Invitation) */}
        <CallToAction onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* Section 8: Minimalist Studio Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={handleCloseInquiry}
        defaultService={inquiryService}
      />

      {/* Interactive Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
        onInquireSimilar={handleInquireFromProject}
      />
    </div>
  );
}
