import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Skills",
    items: [
      "API Design",
      "Frontend Architecture",
      "Backend Logic",
      "UX and Layout",
    ],
  },
  {
    label: "Tools",
    items: ["VS Code", "Figma", "Postman", "Notion", "Stripe API"],
  },
  {
    label: "Tech Stack",
    items: ["React", "Node.js", "TypeScript", "PostgreSQL", "GraphQL"],
  },
  {
    label: "Languages",
    items: ["JavaScript", "Python", "HTML/CSS", "SQL", "Bash"],
  },
];

const Proficiencies = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-[16px] pt-[40px] md:pt-[60px] pb-[40px] md:pb-[60px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1] }}
        className="w-full md:w-[348px] md:shrink-0 md:sticky md:top-28 self-start"
      >
        <h2 className="text-[28px] md:text-[32px] font-medium text-[#00C96D] tracking-tight font-fredoka">
          Proficiencies
        </h2>
      </motion.div>

      <div className="flex-1 flex flex-col">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.17, 0.55, 0.55, 1],
              delay: idx * 0.1,
            }}
            className={`flex flex-col sm:flex-row gap-2 sm:gap-[16px] pb-[16px] ${
              idx < categories.length - 1 ? "border-b border-[#C8BBAA]" : ""
            } ${idx === 0 ? "pt-0" : "pt-[16px]"}`}
          >
            <div className="w-full sm:w-[174px] sm:shrink-0">
              <h3 className="text-[#00C96D] font-normal text-[16px] font-fredoka">
                {cat.label}
              </h3>
            </div>
            <ul className="flex flex-col gap-[4px] list-none p-0 m-0">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="text-[#6B7C6E] text-[15px] leading-[1.7]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Proficiencies;
