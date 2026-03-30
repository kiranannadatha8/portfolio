import React from 'react';
import { motion } from 'framer-motion';

const Certificates = () => {
  const certs = [
    {
      title: "Certified Cloud Practitioner",
      desc: "2019 at Camejo"
    },
    {
      title: "IBM Coding",
      desc: "2016 at IBM"
    },
    {
      title: "Coding for Dashboards",
      desc: "2018 at Quantec"
    }
  ];

  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-16 py-[120px]">
      <div className="w-full md:w-1/3 md:sticky md:top-28 self-start">
        <h2 className="text-3xl font-semibold text-primary-text tracking-tight">
          Certificates
        </h2>
      </div>

      <div className="w-full md:w-2/3 flex flex-col">
        {certs.map((cert, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: idx * 0.15 }}
            className="flex flex-col gap-1 py-8 border-b border-[#333] last:border-b-0 first:pt-0"
          >
            <h3 className="text-primary-text font-medium text-[17px]">{cert.title}</h3>
            <p className="text-secondary-text text-[15px]">{cert.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
