import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/app/ui/Navbar";
import ScrollToTopBtn from '@/app/ui/ScrollToTopBtn';
import Footer from  '@/app/ui/Footer';
export const metadata: Metadata = {
  title: "SunsetBright Energy Limited | Leading Solar & Electrical Solutions Provider in Kenya",
  description: "Your trusted partner for solar installation, maintenance, solar water heating, electrical design, power metering, CCTV, alarms, and fencing solutions in Kenya.",
  keywords: [
    "solar installation Kenya",
    "solar maintenance services",
    "solar water heating systems",
    "renewable energy solutions",
    "high-efficiency solar panels",
    "cost-effective solar power",
    "residential solar solutions",
    "commercial solar solutions",
    "industrial solar solutions",
    "green energy solutions",
    "best solar company in Kenya",
    "custom solar solutions for homes and industries",
    "energy independence",
    "electrical installation Kenya",
    "power metering services",
    "CCTV installation",
    "electric fence solutions",
    "alarm systems",
    "electrical design and maintenance"
  ],
  robots: "index, follow",
  openGraph: {
    title: "SunsetBright Energy | Reliable Solar & Electrical Solutions",
    description:
      "Expert solar installation, maintenance, electrical design, power metering, CCTV, and security solutions in Kenya. Switch to efficient energy today with SunsetBright Energy Limited.",
    url: "https://sunsetbrightenergy.com",
    type: "website",
    locale: "en_US",
    siteName: "SunsetBright Energy Limited",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <ScrollToTopBtn />
        <Footer />
      </body>
    </html>
  );
}
