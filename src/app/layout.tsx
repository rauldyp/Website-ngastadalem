import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ngastadalem — Architecture & Consultant",
  description:
    "Solusi terpadu Desain, Bangun Baru, Renovasi, Interior/Furnitur, dan Maintenance di Bandung, Sleman & sekitarnya. Fleksibilitas anggaran Grade High, Medium, hingga Low Budget.",
  keywords: [
    "Ngastadalem",
    "Ngastadalem Studio",
    "Luxury Interior Jakarta",
    "Arsitek Bandung",
    "Arsitek Sleman Yogyakarta",
    "Jasa Design and Build",
    "Arsitektur Kontemporer",
    "Eka S Arsitek",
    "Interior Desain Mewah",
  ],
  authors: [{ name: "Ngastadalem Studio" }],
  openGraph: {
    title: "Ngastadalem — Luxury Interior & Architecture Studio",
    description:
      "Menciptakan Ruang Hunian yang Nyaman dan Elegan. Desain dan pembangunan dalam satu layanan terpadu.",
    url: "https://ngastadalem.com/id",
    siteName: "Ngastadalem Studio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngastadalem — Luxury Interior & Architecture Studio",
    description:
      "Menciptakan Ruang Hunian yang Nyaman dan Elegan. Desain dan pembangunan dalam satu layanan terpadu.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF9F6] text-[#111213] selection:bg-black selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
