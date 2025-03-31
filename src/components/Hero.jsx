import React from "react";
import { motion } from "framer-motion";
import ghibli from '../assets/Images/ghibli profile.webp';

const Hero = () => {
  return (
    <div className="mb-20 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-amber-500 pb-10 text-5xl font-momo tracking-tight lg:mt-16 lg:text-7xl"
            >
              ASHUTOSH GURAV
            </motion.h1>

            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="text-white my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              I am a passionate and motivated first-year MCA student with a keen interest in software development, web technologies, and problem-solving.
              I enjoy exploring new programming languages, frameworks, and tools to build efficient and scalable applications.
              With a strong foundation in computer science and a continuous learning mindset.
              I am always open to collaboration and look forward to opportunities that challenge me to grow as a developer.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.6 }}
              className="rounded-2xl" 
              src={ghibli} 
              alt="Ashutosh Gurav" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;