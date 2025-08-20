"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Unbounded } from 'next/font/google';
import { IconArrowUpRight, IconBrandLinkedin, IconBrandGithub, IconMenu2, IconBrandDcos } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import BlurText from "../ui/BlurText/BlurText";
import Beams from "../ui/Beams/Beams";
import DarkVeil from "../ui/DarkVeil/DarkVeil";
import LightRays from "../ui/LightRays/LightRays";
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

  // Controlar overflow do body quando sidebar estiver aberto
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

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
      <nav className="fixed top-0 left-0 right-0 z-50 sm:hidden bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo/Brand */}
          <div className="flex items-center text-gray-300">
            <IconBrandDcos size={32} />
            <span className="ml-3 text-gray-300 font-semibold">Otavio Lago</span>
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

      {/* BG ESTÁTICO
      <div className="absolute inset-0">
        <div className="relative h-full w-full bg-black [&>div]:absolute [&>div]:left-0 [&>div]:right-0 [&>div]:top-[-10%] [&>div]:h-[1000px] [&>div]:w-[1000px] [&>div]:rounded-full [&>div]:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
          <div></div>
        </div>
      </div>
      */}

      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <Beams 
          beamWidth={5}
          beamHeight={25}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1}
          scale={0.2}
          rotation={30} />
      </div>

      {/* ===== CONTEÚDO CENTRAL ===== */}
      <div
        className={`absolute z-10 flex flex-col items-center justify-center px-4 transition-all duration-300 ${isSidebarOpen ? 'pointer-events-none opacity-50' : 'pointer-events-auto opacity-100'
          }`}
        data-aos="fade-up"
      >
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