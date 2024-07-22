"use client";
import "./globals.css";
import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localfont from "next/font/local";

const satoshi = localfont({
  src: [{ path: "../public/fonts/Satoshi-Variable.ttf", weight: "700" }],
  variable: "--font-satoshi",
});
const satoshithin = localfont({
  src: [{ path: "../public/fonts/Satoshi-Variable.ttf", weight: "300" }],
  variable: "--font-satoshithin",
});
const recia = localfont({
  src: [{ path: "../public/fonts/Recia-Variable.ttf", weight: "700" }],
  variable: "--font-recia",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${recia.variable} ${satoshithin.variable} flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
