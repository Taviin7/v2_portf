import React from "react";
import { Unbounded } from 'next/font/google';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Contato() {
  return (
    <section id="contato" className="bg-[#050505] relative w-full flex items-center justify-center py-20 border-t border-white/10 scroll-mt-10">
      <div className="container mx-auto px-6 sm:px-8" data-aos="fade-up">
        <div className="max-w-3xl mx-auto">
          {/* ===== TÍTULO DA SEÇÃO ===== */}
          <div className="text-center mb-6">
            <h2 className={`${unbounded.className} text-3xl font-bold text-gray-300 mb-4`}>
              Contato
            </h2>
            <div className="w-24 h-1 bg-[#0674cf] mx-auto"></div>
          </div>

          {/* ===== DESCRIÇÃO CURTA ===== */}
          <div className="text-center mb-10">
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto text-center">
              Tem interesse em trabalhar comigo ou quer bater um papo? Escolha a melhor forma de entrar em contato!
            </p>
          </div>

          {/* ===== CARDS DE REDES SOCIAIS ===== */}
          <div className="mb-12">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/otaviorlago/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-[#333]/80 to-[#0d0d0d] border border-gray-500/30 p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-gray-500 flex flex-col items-center hover:opacity-80"
              >
                <FaLinkedin className="text-gray-300 text-4xl mb-2 group-hover:text-white transition-colors duration-300 drop-shadow-lg" />
                <h4 className="text-gray-200 font-bold text-base">LinkedIn</h4>
                <p className="text-gray-400 text-xs mt-1">Profissional</p>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Taviin7"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-[#333]/80 to-[#0d0d0d] border border-gray-500/30 p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-gray-500 flex flex-col items-center hover:opacity-80"
              >
                <FaGithub className="text-gray-300 text-4xl mb-2 group-hover:text-white transition-colors duration-300 drop-shadow-lg" />
                <h4 className="text-gray-200 font-bold text-base">GitHub</h4>
                <p className="text-gray-400 text-xs mt-1">Código</p>
              </a>

              {/* Email */}
              <a
                href="mailto:otaviorl711@gmail.com"
                className="group bg-gradient-to-br from-[#333]/80 to-[#0d0d0d] border border-gray-500/30 p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-gray-500 flex flex-col items-center hover:opacity-80"
              >
                <FaEnvelope className="text-gray-300 text-4xl mb-2 group-hover:text-white transition-colors duration-300 drop-shadow-lg" />
                <h4 className="text-gray-200 font-bold text-base">Email</h4>
                <p className="text-gray-400 text-xs mt-1">Direto</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 