import React from "react";
import { Unbounded } from 'next/font/google';
import SkillCard from '../ui/SkillCard';

const unbounded = Unbounded({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function About() {
  return (
    <section id="sobre" className="bg-[#000] relative w-full flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* ===== TÍTULO DA SEÇÃO ===== */}
          <div className="text-center mb-10">
            <h2 className={`${unbounded.className} text-3xl font-bold text-white mb-4`}>
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* ===== DESCRIÇÃO CURTA ===== */}
          <div className="text-center mb-10">
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Sou um desenvolvedor apaixonado por tecnologia e inovação. Busco sempre aprender novas tecnologias e criar soluções criativas e eficientes para os desafios do mundo digital.
            </p>
          </div>

          {/* ===== HABILIDADES PRINCIPAIS ===== */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 text-center">Habilidades Principais</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCard
                icon="💻"
                title="Desenvolvimento Full-Stack"
                description="Experiência em React, Node.js e tecnologias modernas"
              />
              <SkillCard
                icon="💡"
                title="Soluções Criativas"
                description="Transformo ideias em aplicações funcionais e elegantes"
              />
              <SkillCard
                icon="🎯"
                title="Foco em Qualidade"
                description="Código limpo, performante e bem documentado"
              />
              <SkillCard
                icon="🤝"
                title="Trabalho em Equipe"
                description="Colaboração efetiva e comunicação clara"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 