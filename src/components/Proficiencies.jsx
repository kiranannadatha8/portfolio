import React from "react";
import { motion } from "framer-motion";

const E = [0.76, 0, 0.24, 1];

const categories = [
  { label: "Programming & Scripting", items: ["JavaScript (ES6)", "TypeScript", "Python", "Java", "Bash"] },
  { label: "Web Development", items: ["React.js", "Angular (2+)", "Node.js", "Express", "HTML/CSS", "TailwindCSS", "REST APIs", "OpenAI API", "Claude API"] },
  { label: "Databases & Cloud", items: ["MySQL", "MongoDB", "AWS", "AWS Lambda", "Docker", "Jenkins", "Kubernetes", "ArgoCD", "Ansible"] },
  { label: "Tools & Version Control", items: ["Git", "GitHub", "Postman", "VS Code", "Figma"] },
];

const Proficiencies = () => (
  <section className="flex flex-col md:flex-row gap-4 md:gap-[16px] pt-[60px] md:pt-[80px] pb-[40px] md:pb-[60px]">
    <div className="w-full md:w-[348px] md:shrink-0 md:sticky md:top-16 self-start">
      <motion.span
        className="block text-[11px] font-mono text-[#00C96D]/50 tracking-[0.2em] mb-2"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        / 01
      </motion.span>
      <motion.h2
        className="font-cormorant italic font-light text-[32px] md:text-[38px] text-[#00C96D] leading-tight"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: E, delay: 0.08 }}
      >
        Proficiencies
      </motion.h2>
    </div>

    <div className="flex-1 flex flex-col">
      {categories.map((cat, idx) => (
        <motion.div
          key={cat.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: E, delay: idx * 0.08 }}
          className={`flex flex-col sm:flex-row gap-2 sm:gap-[16px] pb-[20px] ${
            idx < categories.length - 1 ? "border-b border-[#C8BBAA]" : ""
          } ${idx === 0 ? "pt-0" : "pt-[20px]"}`}
        >
          <div className="w-full sm:w-[174px] sm:shrink-0">
            <h3 className="font-cormorant italic text-[17px] text-[#00C96D]">{cat.label}</h3>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 list-none p-0 m-0">
            {cat.items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 + idx * 0.05 }}
                className="text-[#6B7C6E] text-[14px] leading-[1.8]"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Proficiencies;
