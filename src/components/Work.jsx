import React from 'react';
import { motion } from 'framer-motion';

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const Work = () => {
  const roles = [
    {
      title: "Full-Stack Developer",
      tag: "Current",
      year: "2022 - Now",
      company: "Lumina Tech",
      location: "Berlin",
      desc: "At Lumina Tech I strengthened my foundation in algorithms, data structures, and software engineering."
    },
    {
      title: "Junior Developer",
      year: "2017 - 2019",
      company: "Toijuh",
      location: "Tokyo",
      desc: "Supported front- and back-end development on client projects and internal tools, gaining hands-on coding experience in real-world environments."
    },
    {
      title: "Internship",
      year: "2016 - 2017",
      company: "Cloudel",
      location: "Berlin",
      desc: "Assisted in developing cloud-based features and automation tools while learning agile workflows and dev best practices."
    }
  ];

  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-16 py-[120px]">
      <div className="w-full md:w-1/3 md:sticky md:top-28 self-start">
        <h2 className="text-3xl font-semibold text-primary-text tracking-tight">
          Work
        </h2>
      </div>

      <div className="w-full md:w-2/3 flex flex-col">
        {roles.map((role, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: idx * 0.15 }}
            className="flex flex-col gap-3 py-10 border-b border-[#333] last:border-b-0 first:pt-0"
          >
            <div className="flex items-center gap-3">
              <h3 className="text-primary-text font-medium text-lg">{role.title}</h3>
              {role.tag && (
                <span className="bg-[#3e3227] text-[#e8c8a8] text-[11px] px-2 py-0.5 rounded-[4px] uppercase tracking-wider font-medium">
                  {role.tag}
                </span>
              )}
            </div>
            <div className="text-secondary-text text-[13px] flex items-center gap-4 py-1">
              <span className="flex items-center gap-1.5"><CalendarIcon /> {role.year}</span>
              <span className="flex items-center gap-1.5"><BriefcaseIcon /> {role.company}</span>
              <span className="flex items-center gap-1.5"><MapPinIcon /> {role.location}</span>
            </div>
            <p className="text-secondary-text text-[16px] leading-loose mt-1">{role.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
