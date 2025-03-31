import React from 'react'
import ProjectCard1 from './ProjectCard1'
import ProjectCard2 from './ProjectCard2'
import Code from './Code'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className="flex flex-col items-center mb-10">
        <motion.h2
         whileInView={{opacity:1,y:0}} 
         initial={{opacity:0,y:100}}
         transition={{duration:1}} 
        className="my-20 font-semibold text-neutral-300 text-center text-4xl">Projects</motion.h2>
        <div className="flex flex-col md:flex-row gap-10 items-start w-full max-w-6xl">
            
            {/* Left Side - Code Card */}
            <motion.div 
            whileInView={{opacity:1,x:0}} 
            initial={{opacity:0,x:-100}}
            transition={{duration:1,delay:1}} 
            className="flex justify-center mb-10 w-full max-w-3xl mx-auto">
              <div className="border-2 rounded-xl border-white w-full bg-black">
                <Code />
              </div>
            </motion.div>
            
            {/* Right Side - Project Card */}
            <motion.div 
            whileInView={{opacity:1,x:0}} 
            initial={{opacity:0,x:100}}
            transition={{duration:1,delay:1.5}}
            className="flex flex-weap gap-5 mb-10 w-full max-w-3xl mx-auto">
              <ProjectCard1 />
              <ProjectCard2 />
            </motion.div>
        </div>
    </div>
  )
}

export default Projects