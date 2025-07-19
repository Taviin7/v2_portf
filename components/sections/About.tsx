import React from "react";
import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function About() {
  return (
    <section id="sobre" className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 py-20">
      <div className="container mx-auto px-4">
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
                <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-4xl text-white font-bold">OL</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Otavio Lago</h3>
                <p className="text-gray-400">Desenvolvedor Full Stack</p>
              </div>
            </div>

            {/* ===== COLUNA DIREITA - DESCRIÇÃO E HABILIDADES ===== */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Quem sou eu?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Sou um desenvolvedor apaixonado por tecnologia e inovação. Com experiência em desenvolvimento 
                  web full-stack, busco sempre aprender novas tecnologias e criar soluções criativas e eficientes 
                  para os desafios do mundo digital.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Habilidades Principais</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-300">React/Next.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-300">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-300">Node.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-300">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-300">PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-300">Git/GitHub</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Experiência</h4>
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