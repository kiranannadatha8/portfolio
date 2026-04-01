import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useCallback, useEffect } from "react";

import profileImg from "../assets/my-image.jpg";

const E = [0.76, 0, 0.24, 1];

const CursorGlow = ({ sectionRef }) => {
  const x = useMotionValue(-40);
  const y = useMotionValue(-40);
  const springX = useSpring(x, { stiffness: 80, damping: 22, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 80, damping: 22, mass: 0.6 });

  const handleMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }, [x, y, sectionRef]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, sectionRef]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: 520,
        height: 520,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,201,109,0.13) 0%, rgba(0,201,109,0.05) 45%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
        filter: "blur(8px)",
      }}
    />
  );
};

const Hero = () => {
  const sectionRef = useRef(null);
  return (
  <section ref={sectionRef} className="relative overflow-hidden pt-[90px] md:pt-[130px] pb-[40px] md:pb-[60px]">
    <CursorGlow sectionRef={sectionRef} />
    {/* ── Full-width typographic name block ── */}
    <div className="relative px-4 sm:px-8 md:px-14">
      {/* KIRAN — renders in FRONT of photo */}
      <motion.div
        className="relative"
        style={{ zIndex: 3 }}
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05, ease: E }}
      >
        <span
          className="font-cormorant font-semibold text-[#00C96D] leading-[0.82] tracking-[-0.02em] block"
          style={{ fontSize: "clamp(76px, 18vw, 260px)" }}
        >
          KIRAN
        </span>
      </motion.div>

      {/* Photo — floats between KIRAN (front) and ANNADATA (back), desktop only */}
      <motion.div
        className="absolute hidden md:block"
        style={{
          zIndex: 2,
          top: "28%",
          right: "clamp(20px, 8vw, 110px)",
          width: "clamp(120px, 11vw, 175px)",
        }}
        initial={{ opacity: 0, scale: 0.88, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: E, delay: 0.28 }}
      >
        <div
          className="relative overflow-hidden rounded-[14px]"
          style={{
            aspectRatio: "3/4",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          }}
        >
          <img
            src={profileImg}
            alt="Kiran Annadata"
            className="w-full h-full object-cover"
          />
          {/* Green curtain reveal */}
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "-101%" }}
            transition={{ duration: 1.05, ease: E, delay: 0.35 }}
            style={{
              position: "absolute",
              inset: 0,
              background: "#00C96D",
              zIndex: 10,
            }}
          />
        </div>
      </motion.div>

      {/* ANNADATA — renders BEHIND photo */}
      <motion.div
        className="relative"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05, ease: E, delay: 0.14 }}
      >
        <span
          className="font-cormorant font-semibold text-[#3A4A3D] leading-[0.82] tracking-[-0.02em] block"
          style={{ fontSize: "clamp(76px, 18vw, 260px)" }}
        >
          ANNADATA
        </span>
      </motion.div>
    </div>

    {/* ── Info strip ── */}
    <div className="max-w-[712px] mx-auto px-5 sm:px-6 md:px-0 mt-10 md:mt-14">
      {/* Tagline + available pill (+ mobile photo) */}
      <motion.div
        className="flex items-start gap-5 border-t border-[#C8BBAA] pt-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: E, delay: 0.5 }}
      >
        {/* Mobile-only photo */}
        <div className="md:hidden shrink-0 w-[76px] h-[101px] overflow-hidden rounded-[12px]">
          <img
            src={profileImg}
            alt="Kiran Annadata"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-cormorant italic text-[20px] sm:text-[22px] text-[#6B7C6E] leading-snug">
            Full-Stack Engineer &amp; AI Builder
          </p>
          <div className="inline-flex items-center gap-2 bg-[#00C96D]/10 px-3 py-1.5 rounded-full w-fit">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C96D] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C96D]" />
            </span>
            <span className="text-[12px] font-medium tracking-[0.12em] uppercase text-[#00C96D]">
              Available for Work
            </span>
          </div>
        </div>
      </motion.div>

      {/* Bio + chips */}
      <motion.div
        className="mt-5 flex flex-col sm:flex-row gap-4 sm:gap-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: E, delay: 0.65 }}
      >
        <p className="text-[#6B7C6E] text-[15px] leading-[1.7] flex-1">
          When I&apos;m not coding, you&apos;ll find me exploring new coffee
          spots, gaming, or catching up on the latest in AI and tech.
        </p>
        <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end sm:justify-start">
          {["Full-Stack Dev", "Virginia, US", "2+ Yrs Exp."].map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 rounded-full border border-[#C8BBAA] text-[13px] text-[#6B7C6E] bg-[#F0E6D3]/60 whitespace-nowrap"
            >
              {chip}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default Hero;
