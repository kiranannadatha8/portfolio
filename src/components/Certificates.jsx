import React from "react";
import { motion } from "framer-motion";

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
    <section className="flex flex-col md:flex-row gap-4 md:gap-[16px] pt-[40px] md:pt-[60px] pb-[40px] md:pb-[60px]">
      <div className="w-full md:w-[348px] md:shrink-0 md:sticky md:top-16 self-start">
        <h2 className="text-[28px] md:text-[32px] font-medium text-[#00C96D] tracking-tight font-fredoka">
          Certificates
        </h2>
      </div>

      <div className="flex-1 flex flex-col">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: idx * 0.15 }}
            className={`flex flex-col gap-[4px] pb-[16px] border-b border-[#C8BBAA] last:border-b-0 ${idx === 0 ? "pt-0" : "pt-[16px]"}`}
          >
            <h3 className="text-[#3A4A3D] font-normal text-[16px]">{cert.title}</h3>
            <p className="text-[#6B7C6E] text-[14px] leading-[1.6]">{cert.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
