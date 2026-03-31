import React from "react";
import { motion } from "framer-motion";

const E = [0.76, 0, 0.24, 1];

const links = [
  { label: "Mail", href: "mailto:kiran.annadata@gmail.com" },
  { label: "GitHub", href: "https://github.com", external: true },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Resume", href: "/Kiran_Annadata_Resume.pdf", download: true },
];

const Contact = () => (
  <section className="flex flex-col md:flex-row gap-4 md:gap-[16px] pt-[40px] md:pt-[60px] pb-[60px] md:pb-[80px]">
    <div className="w-full md:w-[348px] md:shrink-0 md:sticky md:top-16 self-start">
      <motion.span
        className="block text-[11px] font-mono text-[#00C96D]/50 tracking-[0.2em] mb-2"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        / 05
      </motion.span>
      <motion.h2
        className="font-cormorant italic font-light text-[32px] md:text-[38px] text-[#00C96D] leading-tight"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: E, delay: 0.08 }}
      >
        Contact
      </motion.h2>
      <motion.p
        className="mt-3 text-[14px] text-[#6B7C6E] leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: E, delay: 0.25 }}
      >
        Open to full-time roles,<br />freelance projects &amp; collabs.
      </motion.p>
    </div>

    <div className="flex-1 flex flex-col">
      {links.map((link, i) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noreferrer" : undefined}
          download={link.download || undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: E, delay: i * 0.09 }}
          className="group flex items-center justify-between border-b border-[#C8BBAA] py-4 first:border-t text-[#3A4A3D] hover:text-[#00C96D] transition-colors duration-200"
        >
          <span className="font-cormorant italic text-[22px] sm:text-[24px] leading-none">
            {link.label}
          </span>
          <motion.span
            className="text-[16px]"
            initial={{ x: -4, opacity: 0.4 }}
            whileHover={{ x: 4, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            ↗
          </motion.span>
        </motion.a>
      ))}
    </div>
  </section>
);

export default Contact;
