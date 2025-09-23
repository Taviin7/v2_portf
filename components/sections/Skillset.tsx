import React from "react";
import { Unbounded } from 'next/font/google';
import Badge from '../ui/Badge';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiKotlin, SiReact, SiSolid, SiNodedotjs, SiBun, SiDrizzle, SiFigma, SiLinux, SiGit, SiCloudflare, SiGithubactions, SiDocker, SiMysql, SiVercel } from "react-icons/si";
import { FaJs, FaNodeJs, FaLinux, FaBolt, FaJava, FaGithub } from "react-icons/fa";
import { IconBrandAzure, IconBrandCSharp, IconBrandNetbeans, IconBrandVscode } from "@tabler/icons-react";

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const skills = [
  { icon: <SiHtml5 />, label: 'HTML', color: 'bg-[#1a1a22] border border-[#ff5722]' },
  { icon: <SiCss3 />, label: 'CSS', color: 'bg-[#1a1a22] border border-[#2196f3]' },
  { icon: <SiJavascript />, label: 'JavaScript', color: 'bg-[#1a1a22] border border-[#f7df1e] text-[#f7df1e]' },
  { icon: <SiTypescript />, label: 'TypeScript', color: 'bg-[#1a1a22] border border-[#3178c6]' },
  { icon: <SiReact />, label: 'React', color: 'bg-[#1a1a22] border border-[#61dafb]' },
  { icon: <SiNodedotjs />, label: 'Node.js', color: 'bg-[#1a1a22] border border-[#3c873a]' },
  { icon: <SiFigma />, label: 'Figma', color: 'bg-[#1a1a22] border border-[#f24e1e]' },
  { icon: <FaLinux />, label: 'Linux', color: 'bg-[#1a1a22] border border-[#fff]' },
  { icon: <SiGit />, label: 'Git', color: 'bg-[#1a1a22] border border-[#f34f29]' },
  { icon: <FaJava />, label: 'Java', color: 'bg-[#1a1a22] border border-[#007396]' },
  { icon: <SiMysql />, label: 'MySQL', color: 'bg-[#1a1a22] border border-[#4479a1]' },
  { icon: <IconBrandCSharp />, label: 'C#', color: 'bg-[#1a1a22] border border-[#68217a]' },
  { icon: <IconBrandNetbeans />, label: 'NetBeans', color: 'bg-[#1a1a22] border border-[#007bff]' },
  { icon: <IconBrandVscode />, label: 'VS Code', color: 'bg-[#1a1a22] border border-[#007acc]' },
  { icon: <FaGithub />, label: 'GitHub', color: 'bg-[#1a1a22] border border-[#fff]' },
  { icon: <IconBrandAzure />, label: 'Azure', color: 'bg-[#1a1a22] border border-[#0089d6]' },
  { icon: <SiVercel />, label: 'Vercel', color: 'bg-[#1a1a22] border border-[#f7df1e]' },
];

const sizeVariants = [
  'px-4 py-2 text-base',
  'px-5 py-2 text-lg',
  'px-3 py-1 text-sm',
  'px-6 py-2 text-xl',
  'px-4 py-1 text-base',
  'px-5 py-3 text-lg',
  'px-3 py-2 text-sm',
];

export default function Skillset() {
  return (
    <section id="skillset" className="bg-[#000] relative w-full flex items-center justify-center py-20 border-t border-white/10 scroll-mt-10">
      <div className="container mx-auto px-4" data-aos="fade-up-right">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-4">
            <h2 className={`${unbounded.className} text-3xl font-bold text-gray-300 mb-2`}>
              Skillset
            </h2>
            <div className="w-24 h-1 bg-[#0674cf] mx-auto"></div>
          </div>
          <div className="text-center mb-8">
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Principais tecnologias e ferramentas que utilizo regularmente.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center" data-aos="fade-up-left">
            {skills.map((skill, idx) => (
              <Badge
                key={idx}
                icon={skill.icon}
                label={skill.label}
                color={skill.color}
                className={`flex-1 min-w-[120px] max-w-xs rounded-2xl font-medium shadow border transition-all duration-200 flex items-center gap-2 justify-center ${sizeVariants[idx % sizeVariants.length]}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 