import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.17, 0.55, 0.55, 1] } }
};

const Proficiencies = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-16 py-[120px]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: 0.1 }}
        className="w-full md:w-1/3 md:sticky md:top-28 self-start"
      >
        <h2 className="text-3xl font-semibold text-primary-text tracking-tight">
          Proficiencies
        </h2>
      </motion.div>

      <div className="w-full md:w-2/3 flex flex-col gap-12 text-secondary-text">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-12"
        >
          
          <motion.div variants={itemVariants} className="bg-accent-bg border border-[#333] rounded-[12px] p-8 flex flex-col gap-4 hover:border-gray-500 transition-colors duration-300 group">
             <div className="text-primary-text font-medium">Skills</div>
             <div className="flex flex-col gap-2 group-hover:text-gray-300 transition-colors">
                <p>API Design</p>
                <p>Frontend Architecture</p>
                <p>Backend Logic</p>
                <p>UX and Layout</p>
             </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-accent-bg border border-[#333] rounded-[12px] p-8 flex flex-col gap-4 hover:border-gray-500 transition-colors duration-300 group">
             <div className="text-primary-text font-medium">Tools</div>
             <div className="flex flex-col gap-2 group-hover:text-gray-300 transition-colors">
                <p>VS Code</p>
                <p>Figma</p>
                <p>Postman</p>
                <p>Notion</p>
                <p>Stripe API</p>
             </div>
          </motion.div>
          
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-12"
        >
          
          <motion.div variants={itemVariants} className="bg-accent-bg border border-[#333] rounded-[12px] p-8 flex flex-col gap-4 hover:border-gray-500 transition-colors duration-300 group">
             <div className="text-primary-text font-medium">Tech Stack</div>
             <div className="flex flex-col gap-2 group-hover:text-gray-300 transition-colors">
                <p>React</p>
                <p>Next.js</p>
                <p>Framer Motion</p>
                <p>Express</p>
                <p>JavaScript (ES6+)</p>
                <p>Python</p>
                <p>SQL</p>
             </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-accent-bg border border-[#333] rounded-[12px] p-8 flex flex-col gap-4 hover:border-gray-500 transition-colors duration-300 group">
             <div className="text-primary-text font-medium">Spoken Languages</div>
             <div className="flex flex-col gap-2 group-hover:text-gray-300 transition-colors">
                <p>English</p>
                <p>German</p>
                <p>Spanish</p>
                <p>Chinese</p>
             </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Proficiencies;
