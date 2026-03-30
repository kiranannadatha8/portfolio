import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Proficiencies", id: "proficiencies" },
    { name: "Work", id: "work" },
    { name: "Education", id: "education" },
    { name: "Certificates", id: "certificates" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
    { name: "Back Home", id: "hero" },
  ];

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Small delay to allow menu closing animation to start before jumping
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center bg-transparent pointer-events-none">
      <motion.header
        layout
        className="w-full bg-primary-bg/80 backdrop-blur-md border-b border-[#222] pointer-events-auto"
      >
        <div className="w-full max-w-[760px] mx-auto flex flex-col">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-col px-6 lg:px-4 pt-4 pb-2">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.1,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col"
                  >
                    {links.map((link) => (
                      <motion.button
                        key={link.id}
                        variants={{
                          hidden: { opacity: 0, y: -10 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4 },
                          },
                        }}
                        onClick={() => handleScroll(link.id)}
                        className="w-full text-right py-2.5 text-secondary-text hover:text-primary-text transition-colors border-b border-[#222] text-[14px]"
                      >
                        {link.name}
                      </motion.button>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between px-6 py-5 lg:px-4">
            <button
              onClick={() => handleScroll("hero")}
              className="text-secondary-text hover:text-primary-text transition-colors tracking-tight text-[14px]"
            >
              Jake Smith's Resume
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-text text-[15px] hover:text-primary-text transition-colors flex items-center gap-2"
            >
              <svg
                width="15"
                height="15"
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
      </motion.header>
    </div>
  );
};

export default Navbar;
