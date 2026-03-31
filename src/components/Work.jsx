import React from "react";
import { motion } from "framer-motion";

const E = [0.76, 0, 0.24, 1];

const roles = [
  {
    title: "Full-Stack Engineer (Independent)",
    tag: "Current",
    period: "2024 – Present",
    company: "Freelance & Projects",
    desc: "Building AI-powered tools and automation pipelines. Shipping production apps with React, Python, and Claude API integrations.",
  },
  {
    title: "Software Engineer",
    period: "Jan 2023 – Dec 2023",
    company: "Software AG · Bangalore, India",
    desc: "Built a Microsoft Forms–style Questionnaire app in Angular & TypeScript, cutting partner onboarding time by 40%. Developed reusable D3.js chart components for an analytics dashboard, boosting decision-making efficiency by 25%. Engineered a custom seat booking system adopted by 300+ employees.",
  },
  {
    title: "Software Engineer Intern",
    period: "Aug 2022 – Jan 2023",
    company: "Software AG · Bangalore, India",
    desc: "Built reusable design system components (forms, modals) in Angular/TypeScript, accelerating feature delivery across multiple apps. Improved unit test coverage from 33% to 92%, reducing regression bugs by 50%.",
  },
];

const Work = () => (
  <section className="flex flex-col md:flex-row gap-4 md:gap-[16px] pt-[40px] md:pt-[60px] pb-[40px] md:pb-[60px]">
    <div className="w-full md:w-[348px] md:shrink-0 md:sticky md:top-16 self-start">
      <motion.span
        className="block text-[11px] font-mono text-[#00C96D]/50 tracking-[0.2em] mb-2"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        / 02
      </motion.span>
      <motion.h2
        className="font-cormorant italic font-light text-[32px] md:text-[38px] text-[#00C96D] leading-tight"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: E, delay: 0.08 }}
      >
        Work
      </motion.h2>
    </div>

    <div className="flex-1 flex flex-col">
      {roles.map((role, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: E, delay: idx * 0.1 }}
          className={`flex flex-col gap-3 pb-6 border-b border-[#C8BBAA] last:border-b-0 ${idx === 0 ? "pt-0" : "pt-6"}`}
        >
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-[11px] font-mono text-[#00C96D]/50 tracking-wider shrink-0">0{idx + 1}</span>
            <h3 className="text-[#3A4A3D] font-medium text-[16px] leading-snug">{role.title}</h3>
            {role.tag && (
              <span className="bg-[#00C96D]/12 text-[#00C96D] text-[11px] px-2.5 py-0.5 rounded-[6px] font-semibold tracking-wide">
                {role.tag}
              </span>
            )}
          </div>
          <p className="text-[#6B7C6E] text-[13px] tracking-wide">{role.period} · {role.company}</p>
          <p className="text-[#6B7C6E] text-[14px] leading-[1.7]">{role.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Work;
