import React from "react";
import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Contact() {
  return (
    <section id="contato" className="relative w-full py-20 bg-black">
      {/* ===== FIGURAS GEOMÉTRICAS COM SHINE ===== */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Octágono no canto superior direito */}
        <div className="absolute top-20 right-20 w-36 h-36 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-shine" 
             style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
        
        {/* Triângulo invertido no centro esquerdo */}
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 animate-shine" 
             style={{clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)'}}></div>
        
        {/* Círculo grande no fundo */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 animate-shine"></div>
        
        {/* Retângulo vertical */}
        <div className="absolute top-1/4 right-1/4 w-4 h-32 bg-gradient-to-b from-purple-500/10 to-cyan-500/10 animate-shine rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* ===== TÍTULO DA SEÇÃO ===== */}
          <div className="text-center mb-16">
            <h2 className={`${unbounded.className} text-3xl font-bold text-white mb-4`}>
              Contato
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* ===== CONTEÚDO FUTURO ===== */}
          <div className="text-center">
            <p className="text-gray-400 text-lg">
              Formulário de contato será adicionado aqui...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 