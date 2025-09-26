import React, { useEffect } from "react";
import { Unbounded } from 'next/font/google';
import SkillCard from '../ui/SkillCard';
import { FaBullseye, FaHandshake, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "../ui/Timeline/Timeline";

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function About() {
  const timelineItems = [
    {
      id: 1,
      date: "Mar 15, 2024",
      title: "Project Kickoff",
      description: "Initial team meeting.",
    },
    {
      id: 2,
      date: "Mar 22, 2024",
      title: "Design Phase",
      description: "Completed wireframes.",
    },
    {
      id: 3,
      date: "Apr 5, 2024",
      title: "Development Sprint",
      description: "Backend development.",
    },
    {
      id: 4,
      date: "Apr 19, 2028",
      title: "Testing & Deployment",
      description: "Performance optimization.",
    },
  ];

  return (
  <section id="about" className="bg-[#050505] relative w-full flex items-center justify-center py-20 scroll-mt-10">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="max-w-3xl mx-auto  border border-white/10 shadow-lg backdrop-blur-md p-6">
          {/* ===== TÍTULO DA SEÇÃO ===== */}
          <div className="text-center border border-white/10  shadow-sm p-6" data-aos="fade-down">
            <h2 className={`${unbounded.className} text-3xl font-bold text-gray-300 mb-4`}>
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-[#0674cf] mx-auto"></div>
          </div>

          <div className="text-center border border-white/10 shadow-sm p-6" data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Sou um desenvolvedor apaixonado por tecnologia e inovação. Busco sempre aprender novas tecnologias e criar soluções criativas e eficientes para os desafios do mundo digital.
            </p>
          </div>

          {/* Timeline horizontal 
          <div className="w-full flex flex-col items-center mb-10 hidden sm:block">
            <h4 className="text-lg font-semibold text-gray-300 mb-6">Minha Jornada</h4>
            <Timeline defaultValue={3} orientation="horizontal">
              {timelineItems.map((item) => (
                <TimelineItem key={item.id} step={item.id}>
                  <TimelineHeader>
                    <TimelineSeparator />
                    <TimelineDate>{item.date}</TimelineDate>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineIndicator />
                  </TimelineHeader>
                  <TimelineContent>{item.description}</TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
          */}

          {/* Habilidades principais */}
          <div className="border border-white/10 shadow-sm p-6" data-aos="fade-up" data-aos-delay="500">
            <h4 className="text-lg font-semibold text-gray-300 mb-6 text-center">Habilidades Principais</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillCard
                icon={<FaLaptopCode />}
                title="Desenvolvimento Full-Stack"
                description="Experiência em React, C#, Java e tecnologias modernas"
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