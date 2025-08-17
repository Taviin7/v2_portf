"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Unbounded } from 'next/font/google';
import { IconArrowUpRight, IconBrandLinkedin, IconBrandGithub, IconMenu2 } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import BlurText from "../ui/BlurText/BlurText";
import Beams from "../ui/Beams/Beams";
import DarkVeil from "../ui/DarkVeil/DarkVeil";
import Navbar from "../ui/Navbar";  
import MobileSidebar from "../ui/MobileSidebar";

// ===== CONFIGURAÇÃO DAS FONTES =====
const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Hero() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <section id="hero" className="bg-foreground relative w-full min-h-screen flex items-center justify-center overflow-hidden scroll-mt-28">
      {/* Desktop Navbar */}
      <Navbar />
      
      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 sm:hidden bg-[#050505] backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OL</span>
            </div>
            <span className="ml-3 text-white font-semibold">Otavio Lago</span>
          </div>
          
          {/* Menu Button */}
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-controls="mobile-sidebar"
            type="button"
          >
            <span className="sr-only">Abrir menu</span>
            <IconMenu2 className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <DarkVeil 
          speed={1}
          hueShift={45}
          noiseIntensity={0}
          scanlineFrequency={0}
          warpAmount={1}
        />
      </div>
      {/* ===== CONTEÚDO CENTRAL ===== */}
      <div className="absolute z-10 flex flex-col items-center justify-center px-4" data-aos="fade-up">
        {/* ===== TÍTULO RESPONSIVO ===== */}
        {/* Título para mobile */}
        <BlurText
          text="Olá, sou o Otavio!"
          delay={150}
          animateBy="words"
          direction="top"
          className="block sm:hidden text-3xl font-[600] text-center text-gray-300 mb-6"
        />
        
        {/* Título para desktop */}
        <BlurText
          text="Olá, eu sou o Otavio Lago!"
          delay={150}
          animateBy="words"
          direction="top"
          className="hidden sm:block text-[4rem] font-[600] text-center text-gray-300"
        />
        
        {/* ===== DESCRIÇÃO ===== */}
          <p className="text-lg text-gray-300 max-w-2xl text-center mb-6">
            Sou um desenvolvedor apaixonado por tecnologia, criando soluções criativas e eficientes. Bem-vindo ao meu portfólio!
          </p>
        {/* ===== BOTÕES ===== */}
        <div className="flex gap-3 items-center" data-aos="fade-right">
          <Link href="https://www.linkedin.com/in/otaviorlago/" target="_blank">
            <Button variant="secondary" size="sm" className="text-gray-300 flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all active:bg-orange-300 cursor-pointer backdrop-filter backdrop-blur-[10px] bg-white/5 bg-opacity-20 border-1 border-white/20">
              <IconBrandLinkedin /> Linkedin <IconArrowUpRight />
            </Button>
          </Link>
          <Link href="https://github.com/Taviin7" target="_blank">
            <Button variant="secondary" size="sm" className="text-gray-300 flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all duration-300 active:bg-orange-300 cursor-pointer backdrop-filter backdrop-blur-[10px] bg-white/5 bg-opacity-20 border-1 border-white/20">
              <IconBrandGithub /> GitHub <IconArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 