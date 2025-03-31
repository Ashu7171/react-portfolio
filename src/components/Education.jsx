import React from 'react';
import { motion } from 'framer-motion';

const EducationSection = () => {
    return (
        <div className="p-6 bg-transparent rounded-2xl font-light tracking-tight shadow-none">
            <motion.h2
            whileInView={{opacity:1,y:0}} 
            initial={{opacity:0,y:100}}
            transition={{duration:1}}
            className="my-20 font-semibold text-neutral-300 text-center text-4xl">Education</motion.h2>
            <div className="space-y-4">
                <motion.div 
                whileInView={{opacity:1,y:0}} 
                initial={{opacity:0,y:100}}
                transition={{duration:1.5}}
                className="bg-gradient-to-r from-purple-700  p-4 rounded-xl shadow-md">
                    <h3 className="text-xl text-white font-semibold">MCA - Ongoing</h3>
                    <p className="text-white">MES's Institute of Management and Career Courses</p>
                    <p className="text-white"></p>
                </motion.div>

                <motion.div 
                whileInView={{opacity:1,y:0}} 
                initial={{opacity:0,y:100}}
                transition={{duration:1.5}}
                className="bg-gradient-to-r from-purple-700  p-4 rounded-xl shadow-md">
                    <h3 className="text-xl text-white font-semibold">B.Sc. Computer Science - 2024</h3>
                    <p className="text-white">Willingdon College</p>
                    <p className="text-white">CGPA: 9.22</p>
                </motion.div>

                <motion.div 
                whileInView={{opacity:1,y:0}} 
                initial={{opacity:0,y:100}}
                transition={{duration:1.5}}
                className="bg-gradient-to-r from-purple-700  p-4 rounded-xl shadow-md">
                    <h3 className="text-xl text-white font-semibold">HSC - 2021</h3>
                    <p className="text-white">Cambridge IIT and Medical Academy</p>
                    <p className="text-white">Percentage: 90.50%</p>
                </motion.div>

                <motion.div 
                whileInView={{opacity:1,y:0}} 
                initial={{opacity:0,y:100}}
                transition={{duration:1.5}}
                className="bg-gradient-to-r from-purple-700  p-4 rounded-xl shadow-md">
                    <h3 className="text-xl text-white font-semibold">SSC - 2019</h3>
                    <p className="text-white">Vidya Mandir Prashala, Miraj</p>
                    <p className="text-white">Percentage: 90.60%</p>
                </motion.div>
            
            </div>
        </div>
    );
};

export default EducationSection;
