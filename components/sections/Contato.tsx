import React from "react";
import { Unbounded } from 'next/font/google';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

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
          <h2 className={`${unbounded.className} text-3xl font-bold text-white mb-4`}>
            Contato
          </h2>
          <div className="w-24 h-1 bg-[#f67800] mx-auto"></div>
        </div>

        {/* ===== DESCRIÇÃO CURTA ===== */}
        <div className="text-center mb-10">
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Tem interesse em trabalhar comigo ou quer bater um papo? Preencha o formulário abaixo e entrarei em contato!
          </p>
        </div>

        <div className="max-w-4xl mx-auto md:flex md:space-x-12">
          {/* ===== CONTATOS ===== */}
          <div className="md:w-2/4 mt-10 md:mt-0 p-8 rounded-lg shadow-lg flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-white mb-4">Contate-me</h3>
            <ul className="text-gray-300 space-y-4 text-left w-full">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span>Email:</span>
                <a href="otaviorl711@gmail.com" className="text-blue-400 hover:underline break-all">otaviorl711@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaLinkedin className="text-blue-400 text-xl" />
                <span>LinkedIn:</span>
                <a href="https://www.linkedin.com/in/otaviorlago/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">/otaviorlago</a>
              </li>
              {/* Adicione outros contatos aqui */}
            </ul>
          </div>

          {/* ===== FORMULÁRIO DE CONTATO ===== */}
          <div className="md:w-2/3">
            <form className="space-y-6 bg-[#111] p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-200 mb-1">Nome</label>
                <input type="text" id="nome" name="nome" required className="w-full px-4 py-2 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-200 mb-1">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows={4} required className="w-full px-4 py-2 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 