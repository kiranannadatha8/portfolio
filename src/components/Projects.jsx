import React from "react";
import { motion } from "framer-motion";

const E = [0.76, 0, 0.24, 1];

const ICON_A = "https://framerusercontent.com/images/Gc1h8SsDbmcIjre0ESo2FeBpvn4.svg";
const ICON_B = "https://framerusercontent.com/images/pL8UBto2MZsisIzSmaEMByIfVgw.svg";
const ICON_C = "https://framerusercontent.com/images/HxBlTbXw0C3p3CRVfPvu7wLxhiU.svg";

const projects = [
  { title: "GitPulse", desc: "AI-powered GitHub PR review summarizer", icon: ICON_A, tags: ["React", "Python", "Claude API", "GitHub API"] },
  { title: "apply.ai", desc: "Automated job application workflow", icon: ICON_B, tags: ["Node.js", "OpenAI API", "Puppeteer"] },
  { title: "FormFlow", desc: "Intelligent Multi-Step Form Builder", icon: ICON_C, tags: ["React", "TypeScript", "TailwindCSS"] },
];

const Projects = () => (
  <section className="flex flex-col md:flex-row gap-4 md:gap-[16px] pt-[40px] md:pt-[60px] pb-[40px] md:pb-[60px]">
    <div className="w-full md:w-[348px] md:shrink-0 md:sticky md:top-16 self-start">
      <motion.span
        className="block text-[11px] font-mono text-[#00C96D]/50 tracking-[0.2em] mb-2"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        / 04
      </motion.span>
      <motion.h2
        className="font-cormorant italic font-light text-[32px] md:text-[38px] text-[#00C96D] leading-tight"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: E, delay: 0.08 }}
      >
        Projects
      </motion.h2>
    </div>

    <div className="flex-1 flex flex-col gap-0">
      {projects.map((proj, idx) => (
        <motion.a
          key={proj.title}
          href="#"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: E, delay: idx * 0.1 }}
          className="group flex items-start gap-4 py-5 border-b border-[#C8BBAA] first:border-t first:border-[#C8BBAA] hover:bg-[#E8DCCB]/40 -mx-3 px-3 rounded-[10px] transition-colors duration-300"
        >
          <span className="text-[11px] font-mono text-[#00C96D]/50 tracking-wider mt-1 shrink-0">0{idx + 1}</span>
          <img src={proj.icon} width={28} height={28} alt={proj.title} className="shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="flex flex-col gap-1.5 flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[#3A4A3D] font-medium text-[16px] leading-snug group-hover:text-[#00C96D] transition-colors duration-200">
                {proj.title}
              </h3>
              <motion.span
                className="text-[#6B7C6E] text-[13px] shrink-0"
                initial={{ opacity: 0, x: -4 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                ↗
              </motion.span>
            </div>
            <p className="text-[#6B7C6E] text-[13px] leading-snug">{proj.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {proj.tags.map((tag) => (
                <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full border border-[#C8BBAA] text-[#6B7C6E] bg-[#F0E6D3]/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default Projects;
