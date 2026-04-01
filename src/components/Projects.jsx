import React from "react";
import { motion } from "framer-motion";

const E = [0.76, 0, 0.24, 1];

// Inline SVG icons — no external CDN dependency
const IconGit = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="8" fill="#00C96D" fillOpacity="0.12"/>
    <path d="M20.24 13.24L14.76 7.76a1.08 1.08 0 00-1.52 0l-1.52 1.52 1.92 1.92a1.28 1.28 0 011.62 1.63l1.85 1.85a1.28 1.28 0 11-.77.77l-1.73-1.73v4.55a1.28 1.28 0 11-1.05-.02v-4.6a1.28 1.28 0 01-.69-1.68L10.96 10.1l-3.2 3.2a1.08 1.08 0 000 1.52l5.48 5.48a1.08 1.08 0 001.52 0l5.48-5.48a1.08 1.08 0 000-1.52z" fill="#00C96D"/>
  </svg>
);

const IconBolt = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="8" fill="#00C96D" fillOpacity="0.12"/>
    <path d="M15.5 7L8 16h6l-1.5 5L21 12h-6l.5-5z" fill="#00C96D" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconForm = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="8" fill="#00C96D" fillOpacity="0.12"/>
    <rect x="7" y="9" width="14" height="2.5" rx="1.25" fill="#00C96D"/>
    <rect x="7" y="13.5" width="10" height="2.5" rx="1.25" fill="#00C96D" fillOpacity="0.6"/>
    <rect x="7" y="18" width="6" height="2.5" rx="1.25" fill="#00C96D" fillOpacity="0.35"/>
  </svg>
);

const projects = [
  { title: "GitPulse", desc: "AI-powered GitHub PR review summarizer", icon: IconGit, href: "https://github.com/kiranannadatha8", tags: ["React", "Python", "Claude API", "GitHub API"] },
  { title: "apply.ai", desc: "Automated job application workflow", icon: IconBolt, href: "https://github.com/kiranannadatha8", tags: ["Node.js", "OpenAI API", "Puppeteer"] },
  { title: "FormFlow", desc: "Intelligent Multi-Step Form Builder", icon: IconForm, href: "https://github.com/kiranannadatha8", tags: ["React", "TypeScript", "TailwindCSS"] },
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
          href={proj.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: E, delay: idx * 0.1 }}
          className="group flex items-start gap-4 py-5 border-b border-[#C8BBAA] first:border-t first:border-[#C8BBAA] hover:bg-[#E8DCCB]/40 -mx-3 px-3 rounded-[10px] transition-colors duration-300"
        >
          <span className="text-[11px] font-mono text-[#00C96D]/50 tracking-wider mt-1 shrink-0">0{idx + 1}</span>
          <span className="shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300"><proj.icon /></span>
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
