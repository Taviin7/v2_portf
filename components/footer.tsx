import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/60 backdrop-blur-sm py-4 flex items-center justify-center text-center text-sm text-gray-400 font-medium select-none">
      <span>
        © {new Date().getFullYear()} Otavio Lago. Feito com <span className="text-blue-500">Next.js</span> & <span className="text-blue-500">React</span>.
      </span>
    </footer>
  );
}
