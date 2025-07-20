import Link from "next/link";
import { Unbounded, Geist } from 'next/font/google';

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
    <nav className="w-full flex items-center justify-between py-6 px-15 shadow-md fixed top-0 left-0 z-50 backdrop-filter backdrop-blur-sm bg-opacity-0">
      <div className={`${geist.className} font-bold text-xl text-white`}>Meu Portfólio</div>
      <ul className="flex gap-6">
        <li>
          <Link href="#home" className={`${geist.className} hover:underline text-white`}>Início</Link>
        </li>
        <li>
          <Link href="#sobre" className={`${geist.className} hover:underline text-white`}>Sobre</Link>
        </li>
        <li>
          <Link href="#skills" className={`${geist.className} hover:underline text-white`}>Skills</Link>
        </li>
        <li>
          <Link href="#projetos" className={`${geist.className} hover:underline text-white`}>Projetos</Link>
        </li>
        <li>
          <Link href="#contato" className={`${geist.className} hover:underline text-white`}>Contato</Link>
        </li>
      </ul>
    </nav>
  );
} 