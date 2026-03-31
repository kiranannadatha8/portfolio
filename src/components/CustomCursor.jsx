import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configuration for the smooth trailing circle
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const checkInteractive = (e) => {
      const target = e.target;
      // Check if hovering over standard clickable elements
      const isInteractive = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.closest('a') !== null || 
        target.closest('button') !== null;
        
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", checkInteractive);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", checkInteractive);
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render cursor shell on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <style>{`
        /* Hide all default cursors */
        * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Outer trailing circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-[#00C96D] rounded-full pointer-events-none z-[10000]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
          backgroundColor: isHovering ? "rgba(0, 201, 109, 0.15)" : "rgba(0, 201, 109, 0)",
        }}
        transition={{ 
          scale: { type: "tween", duration: 0.2 },
          backgroundColor: { type: "tween", duration: 0.2 }
        }}
      />
      
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-[#00C96D] rounded-full pointer-events-none z-[10000]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ scale: { duration: 0.15 }, opacity: { duration: 0.15 } }}
      />
    </>
  );
};

export default CustomCursor;
