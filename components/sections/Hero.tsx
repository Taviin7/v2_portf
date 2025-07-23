"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Unbounded } from 'next/font/google';
import { IconArrowUpRight, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

// ===== CONFIGURAÇÃO DAS FONTES =====
const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Hero() {
  return (
    <section id="hero" className="bg-foreground relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
      {/* ===== CONTEÚDO CENTRAL ===== */}
      <div className="absolute z-10 flex flex-col items-center justify-center px-4">
        {/* ===== TÍTULO FIXO ===== */}
        <h2 className="text-4xl font-semibold mb-4 text-center text-white">
          <span className="text-[6rem] text-10xl font-[900px]">Otavio Lago!</span>
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