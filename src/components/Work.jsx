import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  const roles = [
    {
      title: "Senior Frontend Developer",
      tag: "Current",
      year: "2021 - Present",
      company: "Quantec Solutions",
      location: "Berlin",
      desc: "Lead a team to deliver high-performance web applications using React, TypeScript, and GraphQL."
    },
    {
      title: "Frontend Developer",
      year: "2019 - 2021",
      company: "Camejo Labs",
      location: "Amsterdam",
      desc: "Built internal tools and customer-facing dashboards using modern web technologies."
    },
    {
      title: "Junior Developer",
      year: "2017 - 2019",
      company: "Nova Digital",
      location: "Amsterdam",
      desc: "Contributed to cross-platform mobile applications using React Native and integrated REST APIs."
    }
  ];

  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-[16px] pt-[40px] md:pt-[60px] pb-[40px] md:pb-[60px]">
      <div className="w-full md:w-[348px] md:shrink-0 md:sticky md:top-28 self-start">
        <h2 className="text-[28px] md:text-[32px] font-medium text-[#00C96D] tracking-tight font-fredoka">
          Work
        </h2>
      </div>

      <div className="flex-1 flex flex-col">
        {roles.map((role, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: idx * 0.15 }}
            className={`flex flex-col gap-[12px] pb-[16px] border-b border-[#C8BBAA] last:border-b-0 ${idx === 0 ? "pt-0" : "pt-[16px]"}`}
          >
            <div className="flex items-center gap-[8px] flex-wrap">
              <h3 className="text-[#3A4A3D] font-normal text-[16px]">{role.title}</h3>
              {role.tag && (
                <span className="bg-[#00C96D]/15 text-[#00C96D] text-[11px] px-2.5 py-0.5 rounded-[6px] font-semibold tracking-wide">
                  {role.tag}
                </span>
              )}
            </div>
            <p className="text-[#6B7C6E] text-[13px]">{role.year} · {role.company} · {role.location}</p>
            <p className="text-[#6B7C6E] text-[15px] leading-[1.6]">{role.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
