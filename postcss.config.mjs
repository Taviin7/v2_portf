// Se ainda não existir, crie um arquivo tailwind.config.js na raiz do projeto com o seguinte conteúdo:
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   plugins: [require("@tailwindcss/aspect-ratio")],
// };

const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
