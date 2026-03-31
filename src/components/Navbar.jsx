import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Proficiencies", id: "proficiencies" },
  { name: "Work", id: "work" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
  { name: "Back Home", id: "hero" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F0E6D3]/80 backdrop-blur-md border-b border-[#C8BBAA]">
      <div className="max-w-[712px] mx-auto px-5 sm:px-6 md:px-4 flex flex-col">
        {/* Dropdown — renders ABOVE the nav row */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.17, 0.55, 0.55, 1] }}
              className="overflow-hidden"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
                  },
                }}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col pt-2"
              >
                {links.map((link, idx) => (
                  <motion.button
                    key={link.id}
                    variants={{
                      hidden: { opacity: 0, y: -8 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3 },
                      },
                    }}
                    onClick={() => handleScroll(link.id)}
                    className={`w-full text-right py-[8px] text-[#6B7C6E] hover:text-[#00C96D] transition-colors text-[14px] ${
                      idx < links.length - 1 ? "border-b border-[#C8BBAA]" : ""
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Nav row — sits at the bottom */}
        <div className="flex items-center justify-between py-[14px]">
          <motion.button
            onClick={() => handleScroll("hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#3A4A3D] hover:text-[#00C96D] transition-colors text-[20px] flex overflow-hidden"
            style={{ fontFamily: "'Cedarville Cursive', cursive" }}
          >
            <motion.span
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.3 },
                },
              }}
              className="flex"
            >
              {"Kiran Annadata".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 12, scaleY: 0.3 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scaleY: 1,
                      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </motion.button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#6B7C6E] hover:text-[#00C96D] transition-colors text-[14px] flex items-center gap-1.5"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1.5 11C1.22386 11 1 11.22386 1 11.5C1 11.7761 1.22386 12 1.5 12H13.5C13.7761 12 14 11.7761 14 11.5C14 11.22386 13.7761 11 13.5 11H1.5Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
