import React from 'react'
import ProjectCard from '../Project-Card'
import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

export default function Projects() {
    return (
        <section id="projects" className="bg-[#000] relative w-full flex items-center justify-center py-20 border-t border-white/10 scroll-mt-10">
            <div className="container mx-auto px-4">
                {/* ===== TÍTULO DA SEÇÃO ===== */}
                <div className="text-center mb-10" data-aos="fade-up">
                    <h2 className={`${unbounded.className} text-3xl font-bold text-white mb-4`}>
                        Projetos
                    </h2>
                    <div className="w-24 h-1 bg-[#f67800] mx-auto"></div>
                </div>

                {/* ===== DESCRIÇÃO CURTA ===== */}
                <div className="text-center mb-10" data-aos="fade-up">
                    <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        Aqui você pode ver alguns dos meus projetos.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="flip-up">
                    <ProjectCard
                        title="E-commerce Platform"
                        description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                        image="/placeholder.svg?height=400&width=600"
                        link="https://github.com"
                        tags={["Next.js", "Prisma", "Stripe"]}
                    />
                    <ProjectCard
                        title="Task Management App"
                        description="A real-time task management application with team collaboration features."
                        image="/placeholder.svg?height=400&width=600"
                        link="https://github.com"
                        tags={["React", "Node.js", "Socket.io"]}
                    />
                    <ProjectCard
                        title="AI Chat Interface"
                        description="An AI-powered chat interface with natural language processing capabilities."
                        image="/placeholder.svg?height=400&width=600"
                        link="https://github.com"
                        tags={["OpenAI", "Next.js", "TailwindCSS"]}
                    />
                </div>
            </div>
        </section>
    )
}