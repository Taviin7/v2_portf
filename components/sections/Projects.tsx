import React from 'react'
import ProjectCard from '../ui/Project-Card'
import { Unbounded } from 'next/font/google';
import anagrama from '@/public/assets/anagrama.png';
import proveit from '@/public/assets/proveit.png';
import quickjobs from '@/public/assets/quick-jobs.jpg';

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
                    <h2 className={`${unbounded.className} text-3xl font-bold text-gray-300 mb-4`}>
                        Projetos
                    </h2>
                    <div className="w-24 h-1 bg-[#f67800] mx-auto"></div>
                </div>

                {/* ===== DESCRIÇÃO CURTA ===== */}
                <div className="text-center mb-10" data-aos="fade-up">
                    <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        Aqui você pode ver alguns dos meus projetos feitos durante minha jornada como desenvolvedor.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
                    <ProjectCard
                        title="ProveIt"
                        description="App desenvolvido em React Native e C#, com o objetivo de auxiliar o usuário com sua alimentação em seu ambiente doméstico."
                        image={proveit.src}
                        link="https://github.com/Taviin7/App-Proveit"
                        tags={["React Native", "C#", "MySQL"]}
                    />
                    <ProjectCard
                        title="QuickJobs"
                        description="Site de buscas e divulgação de empregos, com uma interface de fácil interatividade, com integração a API, para acesso ao banco de dados."
                        image={quickjobs.src}
                        link="https://github.com/Taviin7/quickjobs"
                        tags={["React", "MySQL", "API"]}
                    />
                    <ProjectCard
                        title="Anagrama"
                        description="Protótipo de um jogo desenvolvido em Windows Forms em C#, cuja o sistema exibe letras para que o usuário possa formar palavras."
                        image={anagrama.src}
                        link="https://github.com/Taviin7/anagrama"
                        tags={["C#", "Windows Forms"]}
                    />
                </div>
            </div>
        </section>
    )
}