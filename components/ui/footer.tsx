import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-20 border-t border-white/10 bg-black backdrop-blur-sm py-4 flex items-center justify-center text-center text-sm text-gray-400 font-medium select-none">
      <span>
        © {new Date().getFullYear()} Otavio Lago. Feito com <span className="text-[#f67800]">Next.js</span> & <span className="text-[#f67800]">Tailwind</span>.
      </span>
    </footer>
  );
}
