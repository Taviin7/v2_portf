import React, { useEffect } from "react";
import { Unbounded } from 'next/font/google';
import SkillCard from '../ui/SkillCard';
import { FaBullseye, FaHandshake, FaLaptopCode, FaLightbulb } from "react-icons/fa";

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function About() {

  return (
    <section id="about" className="bg-[#050505] relative w-full flex items-center justify-center py-20 scroll-mt-10">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="max-w-3xl mx-auto">
          {/* ===== TÍTULO DA SEÇÃO ===== */}
          <div className="text-center mb-10" data-aos="fade-down">
            <h2 className={`${unbounded.className} text-3xl font-bold text-gray-300 mb-4`}>
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-[#f67800] mx-auto"></div>
          </div>

          <div className="text-center mb-10" data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Sou um desenvolvedor apaixonado por tecnologia e inovação. Busco sempre aprender novas tecnologias e criar soluções criativas e eficientes para os desafios do mundo digital.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-lg font-semibold text-gray-300 mb-6 text-center">Habilidades Principais</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillCard
                icon={<FaLaptopCode />}
                title="Desenvolvimento Full-Stack"
                description="Experiência em React, Node.js e tecnologias modernas"
              />
              <SkillCard
                icon={<FaLightbulb />}
                title="Soluções Criativas"
                description="Transformo ideias em aplicações funcionais e elegantes"
              />
              <SkillCard
                icon={<FaBullseye />}
                title="Foco em Qualidade"
                description="Código limpo, performante e bem documentado"
              />
              <SkillCard
                icon={<FaHandshake />}
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