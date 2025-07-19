"use client";
import React, { useEffect, useState } from 'react';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Esconder cursor do sistema
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    // Adicionar event listeners
    window.addEventListener('mousemove', updateMousePosition);
    
    // Detectar quando o mouse está sobre elementos clicáveis
    const clickableElements = document.querySelectorAll('a, button, [role="button"]');
    clickableElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      // Restaurar cursor do sistema
      document.body.style.cursor = 'auto';
      document.documentElement.style.cursor = 'auto';
      
      window.removeEventListener('mousemove', updateMousePosition);
      clickableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor principal */}
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out z-100"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
        }}
      />
      
      {/* Cursor secundário (trail) */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-40 mix-blend-difference transition-transform duration-300 ease-out z-100"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      
      {/* Cursor terciário (outer ring) */}
      <div
        className="fixed top-0 left-0 w-12 h-12 border border-white/30 rounded-full pointer-events-none z-30 transition-transform duration-500 ease-out z-100"
        style={{
          transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px) scale(${isHovering ? 1.2 : 1})`,
        }}
      />
    </>
  );
} 