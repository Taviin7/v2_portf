import React from "react";
import { IconBrandDcos } from "@tabler/icons-react";

export default function Footer() {
  return (

    <footer className="bg-[#050505] shadow-sm border-t border-white/10">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center text-gray-300">
            <IconBrandDcos size={32} />
            <span className="ml-3 text-gray-300 font-semibold">Otavio Lago</span>
          </div>
          <ul className="flex flex-wrap justify-center items-center m-4 text-sm font-medium text-gray-400 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Início</a>
            </li>
            <li>
              <a href="#about" className="hover:underline me-4 md:me-6">Sobre</a>
            </li>
            <li>
              <a href="#skillset" className="hover:underline me-4 md:me-6">Skillset</a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">Projetos</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 justify-center text-center sm:text-center">© {new Date().getFullYear()} Otavio Lago. Feito com<span className="text-[#0674cf]"> Next.js</span> & <span className="text-[#0674cf]">Tailwind</span>.</span>
      </div>
    </footer>


  );
}
