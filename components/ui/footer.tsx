import React from "react";
import { IconBrandDcos } from "@tabler/icons-react";

export default function Footer() {
  return (

    <footer className="bg-[#050505] shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center text-gray-300">
            <IconBrandDcos size={32} />
            <span className="ml-3 text-gray-300 font-semibold">Otavio Lago</span>
          </div>
          <ul className="flex flex-wrap justify-center items-center m-4 text-sm font-medium text-gray-400 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 justify-center sm:text-center">© {new Date().getFullYear()} Otavio Lago. Feito com<span className="text-[#f67800]"> Next.js</span> & <span className="text-[#f67800]">Tailwind</span>.</span>
      </div>
    </footer>


  );
}
