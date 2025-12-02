import React, { useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ProjectCard from '../ui/Project-Card'
import { Unbounded } from 'next/font/google';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import anagrama from '@/public/assets/anagrama.png';
import proveit from '@/public/assets/proveit.png';
import quickjobs from '@/public/assets/quick-jobs.jpg';
import gestaoJAVA from '@/public/assets/gestaoJAVA.png';
import Autoplay from 'embla-carousel-autoplay';

const unbounded = Unbounded({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

export default function Projects() {
    // ===== CONFIGURAÇÃO DO EMBLA CAROUSEL =====
    // useEmblaCarousel retorna uma ref para o container e uma API para controlar o carrossel
    // - loop: true = navegação infinita (volta ao início após o último projeto)
    // - align: 'center' = centraliza o projeto ativo na tela
    // - skipSnaps: false = para exatamente no centro de cada projeto
    // - dragFree: false = snap automático após arrastar (não fica "solto")
    // - containScroll: 'trimSnaps' = mantém os slides alinhados corretamente
    // - Autoplay: plugin para reprodução automática dos slides
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
        dragFree: false,
        containScroll: 'trimSnaps'
    }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

    {/* ===== ESTADOS DO CARROSSEL ===== */ }
    {/* selectedIndex: índice do projeto atualmente visível (0, 1, 2...) */ }
    {/* scrollSnaps: array com as posições de snap de cada projeto */ }
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    {/* ===== DADOS DOS PROJETOS ===== */ }
    {/* Array com informações de cada projeto para renderizar no carrossel */ }
    const projects = [
        {
            title: "ProveIt",
            description: "App desenvolvido em React Native e C#, com o objetivo de auxiliar o usuário com sua alimentação em seu ambiente doméstico.",
            image: proveit.src,
            link: "https://github.com/Taviin7/App-Proveit",
            tags: ["React Native", "C#", "MySQL"]
        },
        {
            title: "Sistema de Compras e Vendas",
            description: "Sistema desktop em Java com arquitetura em camadas, utilizando o padrão DAO para acesso ao banco de dados e Swing para interface gráfica.",
            image: gestaoJAVA.src,
            link: "https://github.com/Taviin7/Sistema_ComprasVendas",
            tags: ["Java", "MySQL"]
        },
        {
            title: "Anagrama",
            description: "Protótipo de um jogo desenvolvido em Windows Forms em C#, cuja o sistema exibe letras para que o usuário possa formar palavras.",
            image: anagrama.src,
            link: "https://github.com/Taviin7/anagrama",
            tags: ["C#", "Windows Forms"]
        }
    ];

    {/* ===== FUNÇÕES DE CONTROLE DO CARROSSEL ===== */ }

    {/* onSelect: Executada sempre que o usuário navega para um novo projeto */ }
    {/* Atualiza o selectedIndex para refletir o projeto atualmente visível */ }
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    {/* scrollTo: Navega diretamente para um projeto específico pelo índice */ }
    {/* Usado pelos indicadores de página (pontos clicáveis) */ }
    const scrollTo = useCallback((index: number) => {
        if (!emblaApi) return;
        emblaApi.scrollTo(index);
    }, [emblaApi]);

    {/* scrollPrev: Navega para o projeto anterior */ }
    {/* Se estiver no primeiro, vai para o último (devido ao loop: true) */ }
    const scrollPrev = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    {/* scrollNext: Navega para o próximo projeto */ }
    {/* Se estiver no último, vai para o primeiro (devido ao loop: true) */ }
    const scrollNext = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    {/* ===== EFEITOS E EVENTOS ===== */ }
    {/* useEffect: Configura os event listeners do carrossel quando a API está disponível */ }
    React.useEffect(() => {
        if (!emblaApi) return;

        {/* Configura o estado inicial */ }
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());

        {/* Adiciona listeners para eventos de mudança de slide */ }
        emblaApi.on('select', onSelect); {/* Quando um novo projeto é selecionado */ }
        emblaApi.on('reInit', onSelect); {/* Quando o carrossel é reinicializado */ }

        {/* Cleanup: Remove os listeners quando o componente é desmontado */ }
        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section id="projects" className="bg-[#050505] relative w-full flex items-center justify-center py-20 border-t border-white/10 scroll-mt-10">
            <div className="container mx-auto px-2 sm:px-8" data-aos="fade-up">
                <div className="text-center mb-6">
                    <h2 className={`${unbounded.className} text-3xl font-bold text-gray-300 mb-4`}>
                        Projetos
                    </h2>
                    <div className="w-24 h-1 bg-[#0674cf] mx-auto"></div>
                </div>

                {/* ===== DESCRIÇÃO CURTA ===== */}
                <div className="text-center mb-10" data-aos="fade-up">
                    <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto text-center">
                        Aqui você pode ver alguns dos meus projetos feitos durante minha jornada como desenvolvedor.
                    </p>
                </div>

                {/* ===== CARROSSEL EMBLA ===== */}
                <div className="relative max-w-3xl mx-auto" data-aos="fade-up">
                    {/* ===== EFEITOS DE BLUR NAS BORDAS ===== */}
                    {/* Blur esquerdo - fora do container do carrossel */}
<div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none hidden sm:block "></div>
{/* Blur direito - fora do container do carrossel */}
<div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none hidden sm:block"></div>
                    {/* ===== CONTAINER PRINCIPAL DO CARROSSEL ===== */}
                    {/* emblaRef: Referência que o Embla usa para controlar o carrossel */}
                    {/* overflow-hidden: Esconde projetos fora da área visível */}
                    <div className="overflow-hidden relative" ref={emblaRef}>
                        {/* ===== CONTAINER DOS SLIDES ===== */}
                        {/* flex: Organiza os projetos horizontalmente */}
                        <div className="flex">
                            {/* ===== RENDERIZAÇÃO DOS PROJETOS ===== */}
                            {/* Mapeia cada projeto para um slide do carrossel */}
                            {projects.map((project, index) => (
                                // flex-[0_0_60%]: Cada projeto ocupa 60% da largura, deixando espaço para prévias, 100% no mobile
                                // min-w-0: Permite que o projeto seja redimensionado
                                // pl-4: Padding à esquerda para espaçamento entre projetos
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_60%] min-w-0 px-4">
                                    <div
                                        className={`transition-all duration-500 ease-in-out ${index === selectedIndex
                                            ? 'scale-100 opacity-100' // Projeto ativo: tamanho normal e opaco
                                            : index === selectedIndex - 1 || index === selectedIndex + 1
                                                ? 'scale-70 md:scale-85 opacity-60 md:opacity-60' // Projetos adjacentes: normais no mobile, menores no desktop
                                                : 'scale-70 md:scale-75 opacity-30 md:opacity-30' // Outros projetos: normais no mobile, pequenos no desktop
                                            }`}
                                    >
                                        <ProjectCard
                                            title={project.title}
                                            description={project.description}
                                            image={project.image}
                                            link={project.link}
                                            tags={project.tags}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== INDICADORES DE PÁGINA ===== */}
                    {/* scrollSnaps: Array com as posições de snap de cada projeto */}
                    {/* Permite navegar diretamente para qualquer projeto clicando nos pontos */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)} // Navega direto para o projeto
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                                    ? 'bg-[#0674cf] scale-125' // Projeto ativo: laranja e maior
                                    : 'bg-gray-600 hover:bg-gray-400' // Projetos inativos: cinza
                                    }`}
                                aria-label={`Ir para projeto ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* ===== CONTADOR DE SLIDES ===== */}
                    {/* Mostra a posição atual (ex: "2 de 3") para orientação do usuário */}
                    <div className="text-center mt-4">
                        <span className="text-gray-400 text-sm">
                            {selectedIndex + 1} de {projects.length}
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}