import React from "react";

const SKILLS = [
  "React.js", "TypeScript", "Python", "Node.js", "AWS", "Docker",
  "MongoDB", "Claude API", "Angular", "TailwindCSS", "Kubernetes",
  "REST APIs", "Express", "Git", "Figma", "OpenAI API",
];

const SkillsMarquee = () => (
  <div className="border-y border-[#C8BBAA] py-3.5 overflow-hidden relative">
    {/* Fade edges */}
    <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#F0E6D3] to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#F0E6D3] to-transparent z-10 pointer-events-none" />

    <div
      className="flex items-center gap-0 w-max"
      style={{ animation: "marquee 28s linear infinite" }}
    >
      {[...SKILLS, ...SKILLS].map((skill, i) => (
        <React.Fragment key={i}>
          <span className="text-[11px] tracking-[0.18em] uppercase text-[#6B7C6E] whitespace-nowrap px-4">
            {skill}
          </span>
          <span className="text-[#C8BBAA] text-[7px] shrink-0">✦</span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default SkillsMarquee;
