"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Unbounded, Geist } from 'next/font/google';
import { IconArrowUpRight, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

// ===== CONFIGURAÇÃO DAS FONTES =====
const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const unbounded = Unbounded({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Hero() {
  // ===== EFEITO TYPEWRITER =====
  // Array com as frases que serão digitadas e apagadas
  const words = ["Olá, eu sou Otavio Lago!", "Desenvolvedor Full Stack", "Apaixonado por tecnologia!"];
  
  // Estados para controlar o efeito typewriter
  const [currentText, setCurrentText] = useState(""); // Texto atual sendo exibido
  const [wordIndex, setWordIndex] = useState(0); // Índice da palavra atual
  const [charIndex, setCharIndex] = useState(0); // Índice do caractere atual
  const [isDeleting, setIsDeleting] = useState(false); // Se está apagando ou digitando

  // Hook useEffect para controlar a animação do typewriter
  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        // Modo apagar: remove um caractere por vez
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        // Quando terminar de apagar, vai para a próxima palavra
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length); // Volta ao início quando chegar ao final
        }
      } else {
        // Modo digitar: adiciona um caractere por vez
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        // Quando terminar de digitar, começa a apagar
        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    // Executa a função a cada 100ms para criar o efeito de digitação
    const timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout); // Limpa o timeout quando o componente desmonta
  }, [currentText, wordIndex, charIndex, isDeleting, words]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* ===== BACKGROUND COMPLETO ===== */}
      <div className="absolute inset-0 w-full h-full bg-black">
        {/* ===== CIRCULO DE LUZ ===== */}
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        
        {/* ===== LINHAS ANIMADAS CAINDO ===== */}
        <div className="absolute inset-0">
          <div className="line" style={{ width: '1px', background: 'rgba(255, 255, 255, 0.2)' }}></div>
          <div className="line" style={{ width: '1px', background: 'rgba(255, 255, 255, 0.2)' }}></div>
          <div className="line" style={{ width: '1px', background: 'rgba(255, 255, 255, 0.2)' }}></div>
        </div>
      </div>
      
      {/* ===== CONTEÚDO CENTRAL ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* ===== TÍTULO COM EFEITO TYPEWRITER ===== */}
        <h2 className="text-4xl font-semibold mb-4 text-center text-white">
          <span className={`${unbounded.className} text-white-400`}>{currentText}</span>
          <span className="animate-pulse">|</span> {/* Cursor piscando */}
        </h2>
        
        {/* ===== DESCRIÇÃO ===== */}
        <p className="text-base text-gray-300 max-w-2xl text-center mb-6">
          Sou um desenvolvedor apaixonado por tecnologia, criando soluções criativas e eficientes. Bem-vindo ao meu portfólio!
        </p>
        
        {/* ===== BOTÕES CTA ===== */}
        <div className="flex gap-3 items-center">
          <Link href="https://www.linkedin.com/in/otaviorlago/" target="_blank">
            <Button variant="secondary" size="sm" className="flex items-center gap-2 active:bg-blue-300 cursor-pointer">
              <IconBrandLinkedin /> Linkedin <IconArrowUpRight />
            </Button>
          </Link>
          <Link href="https://github.com/Taviin7" target="_blank">
            <Button variant="secondary" size="sm" className="flex items-center gap-2 active:bg-orange-300 cursor-pointer">
              <IconBrandGithub /> GitHub <IconArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 