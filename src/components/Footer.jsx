import React from "react";
import { motion } from "framer-motion";

const E = [0.76, 0, 0.24, 1];
const CTA_LINES = ["Let's build", "something", "great."];

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="w-full border-t border-[#C8BBAA]"
  >
    {/* Big typographic CTA */}
    <div className="max-w-[712px] mx-auto px-5 sm:px-6 md:px-0 pt-16 pb-10">
      <h2 className="font-cormorant font-light italic leading-[1.05] text-[#3A4A3D] tracking-tight text-[52px] sm:text-[68px] md:text-[84px]">
        {CTA_LINES.map((line, i) => (
          <motion.span
            key={line}
            className={`block ${i === 1 ? "text-[#00C96D]" : ""}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: E, delay: i * 0.12 }}
          >
            {line}
          </motion.span>
        ))}
      </h2>

      <motion.a
        href="mailto:kiran.annadata@gmail.com"
        className="mt-8 inline-flex items-center gap-2.5 bg-[#00C96D] text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-[#00b35f] transition-colors duration-200"
        initial={{ opacity: 0, y: 16, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: E, delay: 0.45 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        Get in touch
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
        </svg>
      </motion.a>
    </div>

    {/* Bottom bar */}
    <motion.div
      className="max-w-[712px] mx-auto px-5 sm:px-6 md:px-0 py-5 border-t border-[#C8BBAA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <span style={{ fontFamily: "'Cedarville Cursive', cursive" }} className="text-[16px] text-[#3A4A3D]">
        Kiran Annadata
      </span>
      <span className="text-[12px] text-[#6B7C6E]">
        © 2026 · Designed &amp; built in React
      </span>
    </motion.div>
  </motion.footer>
);

export default Footer;
