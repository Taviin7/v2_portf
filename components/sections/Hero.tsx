"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Unbounded } from 'next/font/google';
import { IconArrowUpRight, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import BlurText from "../ui/BlurText/BlurText";
import Beams from "../ui/Beams/Beams";
import Navbar from "../Navbar";

// ===== CONFIGURAÇÃO DAS FONTES =====
const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Hero() {
  return (
    <section id="hero" className="bg-foreground relative w-full min-h-screen flex items-center justify-center overflow-hidden scroll-mt-28">
      <Navbar />
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#f67800"
          speed={5}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
      {/* ===== CONTEÚDO CENTRAL ===== */}
      <div className="absolute z-10 flex flex-col items-center justify-center px-4" data-aos="fade-up">
        {/* ===== TÍTULO FIXO ===== */}
        <BlurText
          text="Olá, eu sou o Otavio Lago!"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-[4rem] font-[600] text-center text-white"
        />
        {/* ===== DESCRIÇÃO ===== */}
          <p className="text-lg text-gray-300 max-w-2xl text-center mb-6">
            Sou um desenvolvedor apaixonado por tecnologia, criando soluções criativas e eficientes. Bem-vindo ao meu portfólio!
          </p>
        {/* ===== BOTÕES ===== */}
        <div className="flex gap-3 items-center" data-aos="fade-right">
          <Link href="https://www.linkedin.com/in/otaviorlago/" target="_blank">
            <Button variant="secondary" size="sm" className="text-white flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all active:bg-orange-300 cursor-pointer backdrop-filter backdrop-blur-[10px] bg-white/5 bg-opacity-20 border-1 border-white/20">
              <IconBrandLinkedin /> Linkedin <IconArrowUpRight />
            </Button>
          </Link>
          <Link href="https://github.com/Taviin7" target="_blank">
            <Button variant="secondary" size="sm" className="text-white flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all duration-300 active:bg-orange-300 cursor-pointer backdrop-filter backdrop-blur-[10px] bg-white/5 bg-opacity-20 border-1 border-white/20">
              <IconBrandGithub /> GitHub <IconArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 