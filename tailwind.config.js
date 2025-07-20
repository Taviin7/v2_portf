module.exports = {
  // ===== CONFIGURAÇÃO DE CONTEÚDO =====
  // Define onde o Tailwind deve procurar por classes CSS
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  // ===== PLUGINS =====
  // Plugin para aspect-ratio utilities
  plugins: [require("@tailwindcss/aspect-ratio")],
}; 