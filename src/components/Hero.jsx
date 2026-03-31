import React from "react";
import { motion } from "framer-motion";

const HEADSHOT =
  "https://framerusercontent.com/images/Ng52OXKJes7obbflJ6oN07yFiMI.png?scale-down-to=512";

const ABOUT_ITEMS = [
  "Full-Stack Developer",
  "Based in Berlin",
  "5+ Years Experience",
  "Open to Work",
];

/* Coordinate grid — 240×240, 8 lines each way, matching reference structure exactly.
   Uses CSS divs with backgroundColor (not SVG stroke) for crisp 1px rendering.
   Vertical lines are 300px tall, horizontal lines are 300px wide — both clipped
   by overflow:hidden on the container, matching the reference's Framer implementation. */
const CoordinateGrid = () => {
  const size = 240;
  const lineCount = 8;
  const spacing = size / (lineCount - 1); // ~34.14px

  return (
    <div
      className="absolute"
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        overflow: "hidden",
        opacity: 0.12,
      }}
    >
      {/* Vertical lines — 1px wide × 300px tall, clipped to 240px by container */}
      {Array.from({ length: lineCount }).map((_, i) => (
        <div
          key={`v-${i}`}
          style={{
            position: "absolute",
            left: i * spacing,
            top: 0,
            width: 1,
            height: 300,
            backgroundColor: "#00C96D",
          }}
        />
      ))}
      {/* Horizontal lines — 300px wide × 1px tall, centered on 240px container */}
      {Array.from({ length: lineCount }).map((_, i) => (
        <div
          key={`h-${i}`}
          style={{
            position: "absolute",
            left: -30,
            top: i * spacing,
            width: 300,
            height: 1,
            backgroundColor: "#00C96D",
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => (
  <div className="flex flex-col md:flex-row gap-6 md:gap-[16px] items-start pt-[72px] md:pt-[120px] pb-[40px] md:pb-[60px]">
    {/* ── LEFT COLUMN: "Jake Smith" heading ── */}
    <div className="w-full md:w-[348px] md:shrink-0">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.17, 0.55, 0.55, 1] }}
        className="text-[36px] sm:text-[42px] md:text-[48px] leading-[1.1] font-medium text-[#00C96D] tracking-tight font-fredoka"
      >
        Jake Smith
      </motion.h1>
    </div>

    {/* ── RIGHT COLUMN: photo · about · bio ── */}
    <div className="flex-1 flex flex-col gap-6 md:gap-8 w-full">
      {/* Photo + static coordinate grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.17, 0.55, 0.55, 1], delay: 0.2 }}
        className="relative w-[80px] h-[120px]"
      >
        <CoordinateGrid />
        <figure className="relative z-10 w-[80px] h-[120px] m-0">
          <img
            src={HEADSHOT}
            alt="Jake Smith"
            className="w-[80px] h-[120px] rounded-[16px] object-cover block"
          />
        </figure>
      </motion.div>

      {/* About row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.17, 0.55, 0.55, 1], delay: 0.3 }}
        className="flex flex-col sm:flex-row w-full border-t border-[#C8BBAA] pt-6"
      >
        <h3 className="w-full sm:w-[174px] sm:shrink-0 text-[#00C96D] font-normal text-[16px] font-fredoka mb-2 sm:mb-0">
          About
        </h3>
        <ul className="flex flex-col gap-[4px] list-none p-0 m-0">
          {ABOUT_ITEMS.map((item) => (
            <li
              key={item}
              className="text-[#6B7C6E] text-[15px] leading-[1.6]"
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.17, 0.55, 0.55, 1], delay: 0.4 }}
        className="border-t border-[#C8BBAA] pt-6"
      >
        <p className="text-[#6B7C6E] text-[15px] leading-[1.6]">
          When I'm not coding, you'll find me on the tennis court, gaming, or
          sharing a good meal with friends.
        </p>
      </motion.div>
    </div>
  </div>
);

export default Hero;
