import React from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group bg-[#0d0d0d] border border-[#23263A] rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:scale-102">
      <div className="border-1 border-white/20 rounded-lg p-2 mb-4 transition-all duration-300">
        <span className="text-2xl text-gray-300">{icon}</span>
      </div>
      <h5 className="text-gray-300 font-bold mb-1">{title}</h5>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default SkillCard; 