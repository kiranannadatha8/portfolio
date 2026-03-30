import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full border-t border-[#222]"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-4 lg:py-6 text-secondary-text text-[13px] text-center w-full max-w-[760px] mx-auto px-6 lg:px-4">
        <span>
          © 2025{" "}
          <a
            href="https://merlin-schroeter.framer.website/"
            className="hover:text-primary-text transition-colors"
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
