"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Cursor from "../components/Cursor";
import { Geist } from 'next/font/google';

// ===== CONFIGURAÇÃO DAS FONTES =====
const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className={geist.className} id="home">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
