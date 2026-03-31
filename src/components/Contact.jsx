import React from "react";
import { motion } from "framer-motion";

const SmallArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
);

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-[16px] pt-[40px] md:pt-[60px] pb-[40px] md:pb-[60px]">
      <div className="w-full md:w-[348px] md:shrink-0 md:sticky md:top-28 self-start">
        <h2 className="text-[28px] md:text-[32px] font-medium text-[#00C96D] tracking-tight font-fredoka">
          Contact
        </h2>
      </div>

      <div className="flex-1 flex flex-col gap-[8px]">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: 0.1 }}
          href="mailto:hello@jakesmith.com"
          className="group flex items-center gap-2 w-fit text-[#6B7C6E] hover:text-[#00C96D] transition-colors duration-300"
        >
           <span className="text-[12px]">Mail</span>
           <span className="transform transition-transform duration-300 group-hover:translate-x-1.5 flex items-center justify-center">
             <SmallArrowRight />
           </span>
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: 0.2 }}
          href="https://github.com" target="_blank" rel="noreferrer"
          className="group flex items-center gap-2 w-fit text-[#6B7C6E] hover:text-[#00C96D] transition-colors duration-300"
        >
           <span className="text-[12px]">GitHub</span>
           <span className="transform transition-transform duration-300 group-hover:translate-x-1.5 flex items-center justify-center">
             <SmallArrowRight />
           </span>
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: 0.3 }}
          href="https://linkedin.com" target="_blank" rel="noreferrer"
          className="group flex items-center gap-2 w-fit text-[#6B7C6E] hover:text-[#00C96D] transition-colors duration-300"
        >
           <span className="text-[12px]">LinkedIn</span>
           <span className="transform transition-transform duration-300 group-hover:translate-x-1.5 flex items-center justify-center">
             <SmallArrowRight />
           </span>
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
