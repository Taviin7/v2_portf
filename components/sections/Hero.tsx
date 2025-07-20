"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Unbounded, Geist } from 'next/font/google';
import { IconArrowUpRight, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

// ===== CONFIGURAÇÃO DAS FONTES =====
// Fonte Geist para texto geral
const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

// Fonte Unbounded para títulos (mais impactante)
const unbounded = Unbounded({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Hero() {
  // ===== PARTÍCULAS FLUTUANTES =====
  // Estado para armazenar as partículas animadas
  const [particles, setParticles] = useState<Array<{
    id: number;        // ID único da partícula
    x: number;         // Posição X na tela
    y: number;         // Posição Y na tela
    size: number;      // Tamanho da partícula
    speed: number;     // Velocidade de movimento
    opacity: number;   // Opacidade da partícula
  }>>([]);

  // ===== EFEITO DAS PARTÍCULAS =====
  useEffect(() => {
    // Criar partículas iniciais com posições e propriedades aleatórias
    const initialParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth, // Posição X aleatória
      y: Math.random() * window.innerHeight, // Posição Y aleatória
      size: Math.random() * 4 + 1, // Tamanho entre 1-5px
      speed: Math.random() * 0.5 + 0.1, // Velocidade entre 0.1-0.6
      opacity: Math.random() * 0.5 + 0.1, // Opacidade entre 0.1-0.6
    }));
    setParticles(initialParticles);

    // Função para animar as partículas (movimento para cima)
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y - particle.speed, // Move para cima
        opacity: particle.opacity + (Math.random() - 0.5) * 0.1, // Varia opacidade
      })));
    };

    // Executar animação a cada 50ms
    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval); // Limpar intervalo quando componente desmonta
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* ===== BACKGROUND GRADIENTE ANIMADO ===== */}
      <div className="absolute inset-0">
        {/* Gradiente principal com cores roxo/azul/ciano */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        
        {/* Gradientes radiais animados com delays diferentes */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-purple-500/10 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-cyan-500/10 via-transparent to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Gradiente de fundo para profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      </div>

      {/* ===== PARTÍCULAS FLUTUANTES ===== */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: `translateY(${particle.y}px)`,
            }}
          />
        ))}
      </div>

      {/* ===== LINHAS DE ENERGIA ===== */}
      <div className="absolute inset-0">
        {/* Linhas horizontais com gradientes e animações escalonadas */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Linhas verticais com gradientes e animações escalonadas */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* ===== CONTEÚDO CENTRAL ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* ===== TÍTULO COM EFEITO SHINE ===== */}
        <h1 className={`${unbounded.className} text-3xl md:text-6xl font-bold mb-6 text-white relative`}>
          {/* Texto com gradiente colorido e efeito shine */}
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-shine">
            Olá, eu sou Otavio Lago!
          </span>
        </h1>
        
        {/* ===== DESCRIÇÃO ===== */}
        <p className="text-xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
          Sou um desenvolvedor apaixonado por tecnologia, criando soluções criativas e eficientes. 
          Bem-vindo ao meu portfólio!
        </p>
        
        {/* ===== BOTÕES CTA ===== */}
        <div className="flex gap-4 items-center">
          {/* Botão LinkedIn */}
          <Link href="https://www.linkedin.com/in/otaviorlago/" target="_blank">
            <Button 
              variant="outline" 
              size="lg" 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <IconBrandLinkedin /> Linkedin <IconArrowUpRight />
            </Button>
          </Link>
          
          {/* Botão GitHub */}
          <Link href="https://github.com/Taviin7" target="_blank">
            <Button 
              variant="outline" 
              size="lg" 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <IconBrandGithub /> GitHub <IconArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>

      {/* ===== EFEITO DE LUZ NO FUNDO ===== */}
      {/* Gradiente radial no fundo para efeito de iluminação */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-3xl"></div>
    </section>
  );
} 