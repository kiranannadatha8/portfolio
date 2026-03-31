import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full border-t border-[#C8BBAA]"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 py-6 sm:py-4 lg:py-6 text-[#6B7C6E] text-[12px] sm:text-[13px] text-center w-full max-w-[760px] mx-auto px-6 lg:px-4">
        <span>
          © 2025{" "}
          <a
            href="https://merlin-schroeter.framer.website/"
            className="hover:text-[#00C96D] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Merlin Schröter
          </a>
        </span>
        <span>Designed in Figma</span>
        <span>Build in Framer</span>
        <span>Crafted with care in Germany</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
