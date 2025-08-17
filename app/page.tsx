"use client";
import React, { useEffect, useRef } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skillset from "../components/sections/Skillset";
import Cursor from "../components/ui/Cursor";
import Projects from "../components/sections/Projects";
import Contato from "../components/sections/Contato";
import Footer from "../components/ui/footer";
import { Geist, Figtree } from 'next/font/google';
import FramerSpotlight from "@/components/ui/framer-spotlight";
import AOS from "aos";
import "aos/dist/aos.css";

// ===== CONFIGURAÇÃO DAS FONTES =====
const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className={`${figtree.className} text-lg`}>
      {/* <Cursor /> */}
      <Hero />
      <About />
      <Skillset />
      <Projects />
      <Contato />
      <Footer />
    </div>
  );
}