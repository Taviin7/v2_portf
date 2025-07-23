"use client";
import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skillset from "../components/sections/Skillset";
import Cursor from "../components/Cursor";
import Projects from "../components/sections/Projects";
import Contato from "../components/sections/Contato";
import Footer from "../components/footer";
import { Geist } from 'next/font/google';
import FramerSpotlight from "@/components/framer-spotlight";

// ===== CONFIGURAÇÃO DAS FONTES =====
const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className={geist.className} id="home">
      
      <FramerSpotlight />
      <Navbar />
      <Hero />
      <About />
      <Skillset />
      <Projects />
      <Contato />
      <Footer />
    </div>
  );
}
