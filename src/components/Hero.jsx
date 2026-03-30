import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-16 py-[120px]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: 0.1 }}
        className="w-full md:w-1/3"
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-primary-text tracking-tight">
          Jake Smith
        </h1>
      </motion.div>

      {/* Right Column */}
      <div className="w-full md:w-2/3 flex flex-col gap-12">
        <div className="relative w-32 h-40 overflow-hidden rounded-[12px] border border-[#333] bg-accent-bg">
            <img 
              src="https://framerusercontent.com/images/3KqA5lE1H10M0jZ5h2l4y8Q2h0.jpg" 
              alt="Jake Smith"
              className="absolute inset-0 w-full h-full object-cover z-10"
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-secondary-text text-sm p-4 text-center">Avatar Default</div>';
              }}
            />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 cursor-default">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: 0.2 }}
             className="w-[100px] shrink-0"
           >
              <h2 className="text-primary-text font-medium text-[16px]">About</h2>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: 0.3 }}
             className="flex flex-col gap-6"
           >
              <p className="text-secondary-text text-[16px] leading-loose">
                Full-Stack Developer<br/>
                Based in Berlin<br/>
                5+ Years Experience<br/>
                Open to Work
              </p>
              <p className="text-secondary-text text-[16px] leading-loose">
                When I’m not coding, you’ll find me on the tennis court, gaming, or sharing a good meal with friends.
              </p>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
