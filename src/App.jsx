import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import Proficiencies from './components/Proficiencies';
import Work from './components/Work';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#00C96D] z-[100] origin-left"
    />
  );
}

function App() {
  return (
    <div className="min-h-screen bg-primary-bg font-inter selection:bg-[#00C96D]/20 selection:text-[#00C96D]">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <div id="hero"><Hero /></div>
      <SkillsMarquee />
      <main className="max-w-[712px] mx-auto flex flex-col px-5 sm:px-6 md:px-0">
        <div id="proficiencies"><Proficiencies /></div>
        <div id="work"><Work /></div>
        <div id="education"><Education /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
