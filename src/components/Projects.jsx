import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Shelf",
      desc: "Digital Library for Developers",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"/><circle cx="12" cy="12" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="12" cy="8" r="2"/><circle cx="12" cy="16" r="2"/></svg>
      )
    },
    {
      title: "Locale",
      desc: "Lightweight Content Localization",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
      )
    },
    {
      title: "Taskly",
      desc: "Minimal Task Manager",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
      )
    }
  ];

  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-16 py-[120px]">
      <div className="w-full md:w-1/3 md:sticky md:top-28 self-start">
        <h2 className="text-3xl font-semibold text-primary-text tracking-tight">
          Projects
        </h2>
      </div>

      <div className="w-full md:w-2/3 flex flex-col gap-12 relative">
        {/* Faint Grid Background line effect */}
        <div className="absolute top-10 -left-20 w-40 h-40 border border-[#222] grid grid-cols-4 grid-rows-4 opacity-50 -z-10 hidden md:grid">
           {Array.from({length: 16}).map((_, i) => <div key={i} className="border-[0.5px] border-[#222]"></div>)}
        </div>
        
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-accent-bg border border-[#333] rounded-[12px] p-6 flex flex-row items-center gap-6 hover:border-gray-500 transition-colors duration-300 cursor-pointer group"
          >
             <div className="w-16 h-16 bg-[#262626] rounded-lg flex items-center justify-center text-primary-text group-hover:bg-[#333] transition-colors duration-300">
               {proj.icon}
             </div>
             <div className="flex flex-col gap-1">
                <h3 className="text-primary-text font-medium text-[17px] group-hover:text-blue-400 transition-colors">{proj.title}</h3>
                <p className="text-secondary-text text-[15px]">{proj.desc}</p>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
