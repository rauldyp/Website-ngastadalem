"use client";

import React, { useState } from "react";
import { Lock, ShieldAlert } from "lucide-react";

interface WatermarkOverlayProps {
  showNoticeOnRightClick?: boolean;
  className?: string;
}

export default function WatermarkOverlay({
  showNoticeOnRightClick = true,
  className = "",
}: WatermarkOverlayProps) {
  const [showToast, setShowToast] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    if (showNoticeOnRightClick) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2800);
    }
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Protective Transparent Shield & Watermark Layer */}
      <div
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        className={`absolute inset-0 z-20 pointer-events-auto select-none overflow-hidden ${className}`}
        style={{
          WebkitTouchCallout: "none",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
      >
        {/* Subtle Diagonal Architectural Repeating Watermark */}
        <div
          aria-hidden="true"
          className="absolute inset-[-60%] flex flex-col justify-around pointer-events-none transform -rotate-12 opacity-[0.055] tracking-[0.3em] font-mono uppercase text-white font-bold select-none"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex justify-around whitespace-nowrap text-[10px] sm:text-xs"
            >
              <span>NGASTADALEM &bull; ARCHITECTURE &amp; CONSULTANT</span>
              <span className="hidden sm:inline">NGASTADALEM &bull; COPYRIGHT PROTECTED</span>
              <span>NGASTADALEM &bull; ARCHITECTURE &amp; CONSULTANT</span>
              <span className="hidden md:inline">NGASTADALEM &bull; COPYRIGHT PROTECTED</span>
            </div>
          ))}
        </div>

        {/* Bottom Corner Protected Watermark Badge */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#140F0D]/75 backdrop-blur-md border border-[#C89B5C]/30 text-[9px] sm:text-[10px] font-mono text-[#EADBCE] uppercase tracking-wider select-none shadow-sm">
          <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C89B5C]" />
          <span>&copy; NGASTADALEM STUDIO &bull; PROTECTED</span>
        </div>
      </div>

      {/* Floating Anti-Copy Warning Toast */}
      {showToast && (
        <div
          role="alert"
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-[#1C1613]/95 backdrop-blur-lg border border-[#C89B5C]/60 text-white shadow-2xl text-xs font-mono tracking-wide animate-in fade-in slide-in-from-top-3 duration-300 select-none"
        >
          <div className="w-6 h-6 rounded-full bg-[#C89B5C]/20 flex items-center justify-center flex-shrink-0">
            <ShieldAlert className="w-3.5 h-3.5 text-[#C89B5C]" />
          </div>
          <span>
            Foto &amp; desain dilindungi hak cipta &copy; Ngastadalem Architecture &amp; Consultant.
          </span>
        </div>
      )}
    </>
  );
}
