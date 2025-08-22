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
    <section id="contato" className="bg-[#000] relative w-full flex items-center justify-center py-20 border-t border-white/10 scroll-mt-10">
      <div className="container mx-auto px-4" data-aos="fade-down">
        {/* ===== TÍTULO DA SEÇÃO ===== */}
        <div className="text-center mb-10">
          <h2 className={`${unbounded.className} text-3xl font-bold text-gray-300 mb-4`}>
            Contato
          </h2>
          <div className="w-24 h-1 bg-[#f67800] mx-auto"></div>
        </div>

        {/* ===== DESCRIÇÃO CURTA ===== */}
        <div className="text-center mb-10">
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Tem interesse em trabalhar comigo ou quer bater um papo? Preencha o formulário abaixo e entrarei em contato!
          </p>
        </div>

        {/* ===== CARDS DE REDES SOCIAIS ===== */}
        <div className="mb-12">
          <h3 className={`${unbounded.className} text-2xl font-semibold text-gray-300 text-center mb-8`}>
            Conecte-se Comigo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/otaviorlago/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1a1a1a] border border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-gray-500"
            >
              <div className="text-center">
                <FaLinkedin className="text-blue-400 text-2xl mx-auto mb-3 group-hover:text-blue-300 transition-colors duration-300" />
                <h4 className="text-gray-200 font-medium text-sm">LinkedIn</h4>
                <p className="text-gray-400 text-xs mt-1">Profissional</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/otaviorlago"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1a1a1a] border border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-gray-500"
            >
              <div className="text-center">
                <FaGithub className="text-gray-300 text-2xl mx-auto mb-3 group-hover:text-white transition-colors duration-300" />
                <h4 className="text-gray-200 font-medium text-sm">GitHub</h4>
                <p className="text-gray-400 text-xs mt-1">Código</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/otaviorlago"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1a1a1a] border border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-gray-500"
            >
              <div className="text-center">
                <FaInstagram className="text-pink-400 text-2xl mx-auto mb-3 group-hover:text-pink-300 transition-colors duration-300" />
                <h4 className="text-gray-200 font-medium text-sm">Instagram</h4>
                <p className="text-gray-400 text-xs mt-1">Social</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1a1a1a] border border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-gray-500"
            >
              <div className="text-center">
                <FaWhatsapp className="text-green-400 text-2xl mx-auto mb-3 group-hover:text-green-300 transition-colors duration-300" />
                <h4 className="text-gray-200 font-medium text-sm">WhatsApp</h4>
                <p className="text-gray-400 text-xs mt-1">Mensagem</p>
              </div>
            </a>

            {/* Email - Centralizado na última linha */}
            <a
              href="mailto:otaviorl711@gmail.com"
              className="group bg-[#1a1a1a] border border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-gray-500 col-span-2 md:col-span-2 md:col-start-2"
            >
              <div className="text-center">
                <FaEnvelope className="text-orange-400 text-2xl mx-auto mb-3 group-hover:text-orange-300 transition-colors duration-300" />
                <h4 className="text-gray-200 font-medium text-sm">Email</h4>
                <p className="text-gray-400 text-xs mt-1">Direto</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
} 