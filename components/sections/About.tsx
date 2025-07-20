import React from "react";
import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function About() {
  return (
    <section id="sobre" className="relative w-full py-20">
      {/* ===== BACKGROUND GRADIENTE CONECTADO ===== */}
      <div className="absolute inset-0">
        {/* Gradiente que conecta com a Home */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-black"></div>
        
        {/* Gradientes radiais (sem animação) */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>
        
        {/* Gradiente de fundo para profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      </div>

   

      {/* ===== FIGURAS GEOMÉTRICAS COM SHINE ===== */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculo grande no canto superior direito */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 animate-shine"></div>
        
        {/* Triângulo no canto inferior esquerdo */}
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-shine" 
             style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        
        {/* Quadrado rotacionado no centro */}
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-shine transform rotate-45"></div>
        
        {/* Retângulo horizontal */}
        <div className="absolute top-1/4 left-1/4 w-48 h-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 animate-shine rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* ===== TÍTULO DA SEÇÃO ===== */}
          <div className="text-center mb-16">
            <h2 className={`${unbounded.className} text-3xl font-bold text-white mb-4`}>
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* ===== CONTEÚDO PRINCIPAL ===== */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* ===== COLUNA ESQUERDA - FOTO E INFORMAÇÕES ===== */}
            <div className="space-y-6">
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-cyan-600 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-4xl text-cyan-200 font-bold">OL</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-200 mb-2">Otavio Lago</h3>
                <p className="text-gray-400">Desenvolvedor Full Stack</p>
              </div>
            </div>

            {/* ===== COLUNA DIREITA - DESCRIÇÃO E HABILIDADES ===== */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-cyan-200 mb-4">Quem sou eu?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Sou um desenvolvedor apaixonado por tecnologia e inovação. Com experiência em desenvolvimento 
                  web full-stack, busco sempre aprender novas tecnologias e criar soluções criativas e eficientes 
                  para os desafios do mundo digital.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-200 mb-3">Habilidades Principais</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">React/Next.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Node.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Git/GitHub</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-200 mb-3">Experiência</h4>
                <p className="text-gray-300 leading-relaxed">
                  Trabalho com desenvolvimento web há mais de 2 anos, desenvolvendo aplicações modernas 
                  e responsivas. Sempre focado em boas práticas, código limpo e experiência do usuário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 