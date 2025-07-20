import React from "react";
import { Unbounded } from 'next/font/google';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const unbounded = Unbounded({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Projects() {
  const projects = [
    {
      title: "Proveit",
      description: "Plataforma completa de e-commerce com React, Node.js e PostgreSQL. Inclui sistema de pagamentos, gestão de estoque e painel administrativo.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/Taviin7/ecommerce",
      live: "https://ecommerce-demo.com",
      image: "/images/proveit.png"
    },
    {
      title: "Anagrama",
      description: "Aplicação de gerenciamento de tarefas com drag & drop, notificações em tempo real e colaboração em equipe.",
      technologies: ["Next.js", "TypeScript", "Socket.io", "MongoDB"],
      github: "https://github.com/Taviin7/task-app",
      live: "https://task-app-demo.com",
      image: "/images/anagrama.png"
    },
    {
      title: "Quick Jobs",
      description: "Portfolio pessoal moderno com animações, design responsivo e tema galáctico. Desenvolvido com Next.js e Tailwind CSS.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      github: "https://github.com/Taviin7/portfolio",
      live: "https://otaviolago.dev",
      image: "/images/quick-jobs.jpg"
    }
  ];

  return (
    <section id="projetos" className="relative w-full py-20 bg-black">
      {/* ===== FIGURAS GEOMÉTRICAS COM SHINE ===== */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexágono no canto superior esquerdo */}
        <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-shine" 
             style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        
        {/* Círculo pequeno no centro direito */}
        <div className="absolute top-1/2 right-32 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-shine"></div>
        
        {/* Losango no canto inferior direito */}
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 animate-shine transform rotate-45"></div>
        
        {/* Linha diagonal */}
        <div className="absolute top-1/3 left-1/2 w-32 h-1 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 animate-shine transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* ===== TÍTULO DA SEÇÃO ===== */}
          <div className="text-center mb-16">
            <h2 className={`${unbounded.className} text-3xl font-bold text-white mb-4`}>
              Projetos
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* ===== GRID DE PROJETOS ===== */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-cyan-500/50 hover:bg-white/20 transition-all duration-300 hover:scale-105 overflow-hidden group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg group-hover:text-cyan-300 transition-colors">{project.title}</CardTitle>
                    <div className="flex gap-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1 text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110"
                      >
                        <IconBrandGithub size={18} />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1 text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110"
                      >
                        <IconExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                
                {/* ===== DIV PARA IMAGEM ===== */}
                <div className="relative w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 