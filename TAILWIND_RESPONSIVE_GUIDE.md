# 🎨 Guia Completo de Classes Responsivas - Tailwind CSS

Este guia explica todas as classes responsivas do Tailwind CSS usadas no seu portfólio, com exemplos práticos e casos de uso.

## 📱 **Breakpoints do Tailwind**

| Classe | Largura | Dispositivo | Descrição |
|--------|---------|-------------|-----------|
| `sm:` | 640px+ | Tablets pequenos | Small |
| `md:` | 768px+ | Tablets | Medium |
| `lg:` | 1024px+ | Desktops pequenos | Large |
| `xl:` | 1280px+ | Desktops | Extra Large |
| `2xl:` | 1536px+ | Telas grandes | 2X Large |

## 🎯 **Classes para Ocultar/Mostrar**

### **Ocultar em Mobile, Mostrar em Desktop**
```tsx
{/* Só aparece em desktop */}
<div className="hidden sm:block">Desktop Only</div>
<div className="hidden md:block">Tablet+ Only</div>
<div className="hidden lg:block">Desktop+ Only</div>
```

### **Mostrar em Mobile, Ocultar em Desktop**
```tsx
{/* Só aparece em mobile */}
<div className="block sm:hidden">Mobile Only</div>
<div className="md:hidden">Mobile Only</div>
<div className="lg:hidden">Mobile Only</div>
```

### **Exemplos Práticos**
```tsx
{/* Navbar Desktop */}
<nav className="hidden md:flex">
  Links de navegação
</nav>

{/* Navbar Mobile */}
<nav className="md:hidden">
  Menu hambúrguer
</nav>

{/* Conteúdo condicional */}
<div className="hidden lg:block">
  Informações extras para desktop
</div>
```

## 📝 **Texto Responsivo**

### **Tamanhos de Texto**
```tsx
{/* Tamanho responsivo */}
<h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-[4rem]">
  Título Responsivo
</h1>

{/* Texto diferente por dispositivo */}
<h1 className="text-xl sm:text-3xl md:text-5xl">
  Título que cresce
</h1>
```

### **Alinhamento Responsivo**
```tsx
{/* Centralizado em mobile, alinhado à esquerda em desktop */}
<p className="text-center sm:text-left">
  Texto responsivo
</p>

{/* Justificado em desktop */}
<p className="text-left md:text-justify">
  Texto justificado
</p>
```

### **Exemplos no Seu Projeto**
```tsx
{/* Título para mobile */}
<BlurText
  text="Olá, sou o Otavio!"
  className="block sm:hidden text-3xl font-[600] text-center text-white"
/>

{/* Título para desktop */}
<BlurText
  text="Olá, eu sou o Otavio Lago!"
  className="hidden sm:block text-[4rem] font-[600] text-center text-white"
/>
```

## 🎨 **Layout Responsivo**

### **Grid Responsivo**
```tsx
{/* 1 coluna em mobile, 2 em tablet, 3 em desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Conteúdo */}
</div>

{/* 1 coluna em mobile, 4 em desktop */}
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
  {/* Conteúdo */}
</div>
```

### **Flexbox Responsivo**
```tsx
{/* Coluna em mobile, linha em desktop */}
<div className="flex flex-col md:flex-row gap-4">
  {/* Conteúdo */}
</div>

{/* Centralizado em mobile, espaço entre em desktop */}
<div className="flex justify-center md:justify-between items-center">
  {/* Conteúdo */}
</div>
```

### **Container Responsivo**
```tsx
{/* Padding menor em mobile, maior em desktop */}
<div className="px-4 sm:px-6 md:px-8 lg:px-12">
  {/* Conteúdo */}
</div>

{/* Margem responsiva */}
<div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24">
  {/* Conteúdo */}
</div>
```

## 🖼️ **Imagens e Mídia Responsiva**

### **Tamanhos de Imagem**
```tsx
{/* Imagem responsiva */}
<img 
  className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
  src="imagem.jpg" 
  alt="Descrição"
/>

{/* Imagem com altura responsiva */}
<div className="h-32 sm:h-48 md:h-64 lg:h-96">
  {/* Conteúdo */}
</div>
```

### **Ocultar/Mostrar Imagens**
```tsx
{/* Imagem só em desktop */}
<img 
  className="hidden lg:block w-full"
  src="desktop.jpg" 
  alt="Desktop"
/>

{/* Imagem só em mobile */}
<img 
  className="block lg:hidden w-full"
  src="mobile.jpg" 
  alt="Mobile"
/>
```

## 🎭 **Animações e Transições Responsivas**

### **Delays Diferentes por Dispositivo**
```tsx
{/* Delay menor em mobile para performance */}
<BlurText
  text="Texto animado"
  delay={100} // Mobile
  className="text-2xl sm:text-4xl"
/>
```

### **Direções Diferentes por Dispositivo**
```tsx
{/* Mobile: de baixo para cima */}
<BlurText
  text="Texto mobile"
  direction="bottom"
  className="block sm:hidden"
/>

{/* Desktop: de cima para baixo */}
<BlurText
  text="Texto desktop"
  direction="top"
  className="hidden sm:block"
/>
```

## 🧩 **Componentes Responsivos**

### **Navbar Responsiva**
```tsx
{/* Desktop Navbar */}
<nav className="hidden md:flex items-center justify-between">
  {/* Links de navegação */}
</nav>

{/* Mobile Navbar */}
<nav className="md:hidden fixed top-0 left-0 right-0 z-50">
  {/* Menu mobile */}
</nav>
```

### **Sidebar Responsiva**
```tsx
{/* Sidebar só em mobile */}
<aside className="fixed top-0 left-0 z-50 w-64 h-screen sm:hidden">
  {/* Menu lateral */}
</aside>
```

### **Botões Responsivos**
```tsx
{/* Botão só em mobile */}
<button className="block sm:hidden p-2">
  Menu Mobile
</button>

{/* Botão só em desktop */}
<button className="hidden sm:block px-4 py-2">
  Navegar
</button>
```

## 📱 **Padrões Comuns de Responsividade**

### **Mobile-First (Recomendado)**
```tsx
{/* Começa com mobile, depois adiciona desktop */}
<div className="
  text-sm          /* Mobile */
  sm:text-base     /* 640px+ */
  md:text-lg       /* 768px+ */
  lg:text-xl       /* 1024px+ */
  xl:text-2xl      /* 1280px+ */
">
  Texto responsivo
</div>
```

### **Desktop-First (Alternativo)**
```tsx
{/* Começa com desktop, depois esconde em mobile */}
<div className="
  text-2xl         /* Desktop */
  md:text-xl       /* 768px- */
  sm:text-lg       /* 640px- */
  text-base        /* Mobile */
">
  Texto responsivo
</div>
```

## 🎨 **Exemplos do Seu Projeto**

### **Hero Section**
```tsx
{/* Título responsivo */}
<BlurText
  text="Olá, eu sou o Otavio Lago!"
  className="
    text-3xl        /* Mobile */
    sm:text-[4rem]  /* Desktop */
    font-[600] 
    text-center 
    text-white
  "
/>

{/* Botões responsivos */}
<div className="
  flex 
  flex-col          /* Mobile: coluna */
  sm:flex-row       /* Desktop: linha */
  gap-3 
  items-center
">
  {/* Botões */}
</div>
```

### **Navbar**
```tsx
{/* Desktop */}
<nav className="hidden sm:flex items-center justify-between">
  {/* Logo + Links */}
</nav>

{/* Mobile */}
<nav className="sm:hidden fixed top-0 left-0 right-0 z-50">
  {/* Logo + Menu */}
</nav>
```

## 💡 **Dicas Importantes**

### **1. Sempre use Mobile-First**
- Comece com classes para mobile
- Adicione breakpoints para telas maiores
- Mais fácil de manter e entender

### **2. Use breakpoints consistentes**
- `sm:` para tablets pequenos
- `md:` para tablets
- `lg:` para desktops
- `xl:` para telas grandes

### **3. Teste em diferentes tamanhos**
- Use DevTools do navegador
- Teste em dispositivos reais
- Verifique transições suaves

### **4. Mantenha consistência**
- Use os mesmos breakpoints em todo o projeto
- Padronize tamanhos de texto
- Mantenha espaçamentos consistentes

## 🚀 **Classes Mais Usadas**

| Classe | Descrição | Uso |
|--------|-----------|-----|
| `hidden sm:block` | Oculto em mobile, visível em desktop | Navbars, menus |
| `block sm:hidden` | Visível em mobile, oculto em desktop | Menus mobile |
| `text-2xl sm:text-4xl` | Texto pequeno em mobile, grande em desktop | Títulos |
| `flex-col sm:flex-row` | Coluna em mobile, linha em desktop | Layouts |
| `px-4 sm:px-8` | Padding menor em mobile, maior em desktop | Containers |
| `grid-cols-1 md:grid-cols-3` | 1 coluna em mobile, 3 em desktop | Grids |

## 📚 **Recursos Adicionais**

- [Documentação oficial do Tailwind](https://tailwindcss.com/docs/responsive-design)
- [Breakpoint Inspector](https://tailwindcss.com/docs/responsive-design#customizing-breakpoints)
- [Playground responsivo](https://play.tailwindcss.com/)

---

**💡 Dica**: Use este guia como referência rápida sempre que precisar implementar responsividade no seu portfólio! 