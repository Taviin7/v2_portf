import React from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#121212] border border-[#23263A] rounded-xl p-6 flex flex-col items-center text-center shadow-md">
      <div className="bg-blue-600 rounded-lg p-2 mb-4">
        <span className="text-2xl text-white">{icon}</span>
      </div>
      <h5 className="text-white font-bold mb-1">{title}</h5>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default SkillCard; 