import React from "react";

interface BadgeProps {
  color: string; // ex: 'bg-blue-600'
  icon?: React.ReactNode;
  label: string;
  style?: React.CSSProperties;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ color, icon, label, style, className }) => {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-white font-medium shadow-sm text-sm hover:shadow-xl hover:shadow-white/20 transition-all duration-300 scale-100 hover:scale-102 ${color} ${className || ''}`}
      style={style}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </span>
  );
};

export default Badge; 