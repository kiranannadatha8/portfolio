import React from "react";
import { motion } from "framer-motion";

const ICON_A = "https://framerusercontent.com/images/Gc1h8SsDbmcIjre0ESo2FeBpvn4.svg";
const ICON_B = "https://framerusercontent.com/images/pL8UBto2MZsisIzSmaEMByIfVgw.svg";
const ICON_C = "https://framerusercontent.com/images/HxBlTbXw0C3p3CRVfPvu7wLxhiU.svg";

const projects = [
  { title: "Shelf", desc: "Digital Library for Developers", icon: ICON_A },
  { title: "Locale", desc: "Lightweight Content Localization", icon: ICON_B },
  { title: "Taskly", desc: "Minimal Task Manager", icon: ICON_C },
];

const Projects = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-[16px] pt-[40px] md:pt-[60px] pb-[40px] md:pb-[60px]">
      <div className="w-full md:w-[348px] md:shrink-0 md:sticky md:top-28 self-start">
        <h2 className="text-[28px] md:text-[32px] font-medium text-[#00C96D] tracking-tight font-fredoka">
          Projects
        </h2>
      </div>

      <div className="flex-1 flex flex-col gap-[24px] sm:gap-[32px]">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: idx * 0.1 }}
            className="bg-[#E8DCCB] rounded-[16px] p-4 flex flex-row items-center gap-3 cursor-pointer group hover:bg-[#DDD1BF] transition-colors duration-300"
          >
            <img
              src={proj.icon}
              width={32}
              height={32}
              alt={proj.title}
              className="block shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              style={{ filter: "invert(58%) sepia(50%) saturate(600%) hue-rotate(100deg) brightness(90%)" }}
            />
            <div className="flex flex-col gap-0.5">
              <h3 className="text-[#3A4A3D] font-medium text-[16px] leading-[1.3]">{proj.title}</h3>
              <p className="text-[#6B7C6E] text-[13px]">{proj.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
