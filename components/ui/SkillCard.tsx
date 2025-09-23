import React from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
  <div className="group bg-gradient-to-br from-[#333]/80 to-[#0d0d0d] border border-gray-500/30 p-7 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-gray-500 flex flex-col items-center text-center hover:opacity-80">
      <div className="rounded-lg p-2 mb-4 transition-all duration-300">
        <span className="text-4xl text-gray-300 group-hover:text-white drop-shadow-lg transition-colors duration-300">{icon}</span>
      </div>
      <h5 className="text-gray-200 font-bold text-base mb-1">{title}</h5>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default SkillCard; 