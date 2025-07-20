import React from "react";
import { Unbounded } from 'next/font/google';
import { Icon } from '@iconify/react';

const unbounded = Unbounded({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

export default function Skills() {
    const skills = [
        { name: "HTML5", icon: "vscode-icons:file-type-html", color: "text-orange-500" },
        { name: "CSS3", icon: "vscode-icons:file-type-css", color: "text-blue-500" },
        { name: "JavaScript", icon: "vscode-icons:file-type-js-official", color: "text-yellow-400" },
        { name: "TypeScript", icon: "vscode-icons:file-type-typescript-official", color: "text-blue-600" },
        { name: "React", icon: "vscode-icons:file-type-reactjs", color: "text-cyan-400" },
        { name: "Next.js", icon: "logos:nextjs-icon", color: "text-white" },
        { name: "Linux", icon: "logos:linux-tux", color: "text-yellow-500" },
        { name: "Tailwind CSS", icon: "vscode-icons:file-type-tailwind", color: "text-cyan-400" },
        { name: "C#", icon: "vscode-icons:file-type-csharp2", color: "text-purple-500" },
        { name: "MySQL", icon: "vscode-icons:file-type-mysql", color: "text-blue-500" },
        { name: "GitHub", icon: "mdi:github", color: "text-white" },
        { name: "C", icon: "vscode-icons:file-type-c", color: "text-blue-600" },
    ];

    return (
        <section id="skills" className="relative w-full py-20 bg-black">
            {/* ===== FIGURAS GEOMÉTRICAS COM SHINE ===== */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Círculo grande no canto superior direito */}
                <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 animate-shine"></div>

                {/* Triângulo no canto inferior esquerdo */}
                <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-shine"
                    style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>

                {/* Quadrado rotacionado no centro */}
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-shine transform rotate-45"></div>

                {/* Retângulo horizontal */}
                <div className="absolute top-1/4 left-1/4 w-48 h-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 animate-shine rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* ===== TÍTULO DA SEÇÃO ===== */}
                    <div className="text-center mb-16">
                        <h2 className={`${unbounded.className} text-3xl font-bold text-white mb-4`}>
                            Skillset
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Estas são algumas das tecnologias que conheço e uso regularmente.
                        </p>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
                    </div>

                    {/* ===== GRID DE SKILLS ===== */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {skills.map((skill, index) => (
                            <div 
                                key={index}
                                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon icon={skill.icon} width={40} height={40} />
                                    </div>
                                    <span className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                                
                                {/* Efeito de brilho no hover */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 