import Link from "next/link";
import { Unbounded, Geist } from 'next/font/google';
import Image from "next/image";
import { IconIcons, IconProtocol, IconBrandDcos } from '@tabler/icons-react';

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Navbar() {
  return (
    <nav className="hidden lg:flex w-5xl items-center justify-between py-4 px-15 shadow-md fixed top-5 left-35 z-40 backdrop-filter backdrop-blur-[10px] bg-white/5 bg-opacity-20 rounded-full border-1 border-white/20 transition-all duration-300" data-aos="fade-down">
      <div className={`${geist.className} font-bold text-xl text-gray-300`}>
        <IconBrandDcos size={32} />
      </div>
      {/* visivel só no desktop */}
      <ul className="flex gap-6">
        <li className="hover:scale-105 transition-all duration-300">
          <Link href="#hero" className={`${geist.className} hover:underline text-gray-300`}>Início</Link>
        </li>
        <li className="hover:scale-105 transition-all duration-300">
          <Link href="#about" className={`${geist.className} hover:underline text-gray-300`}>Sobre</Link>
        </li>
        <li className="hover:scale-105 transition-all duration-300">
          <Link href="#skillset" className={`${geist.className} hover:underline text-gray-300`}>Skillset</Link>
        </li>
        <li className="hover:scale-105 transition-all duration-300">
          <Link href="#projects" className={`${geist.className} hover:underline text-gray-300`}>Projetos</Link>
        </li>
        <li className="hover:scale-105 transition-all duration-300">
          <Link href="#contato" className={`${geist.className} hover:underline text-gray-300`}>Contato</Link>
        </li>
      </ul>
    </nav>
  );
} 