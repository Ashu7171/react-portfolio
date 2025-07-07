import React from 'react'
import { motion } from 'framer-motion';

const GetInTouch = () => {
  return (
    <div>

        <motion.h2
            whileInView={{opacity:1,y:0}} 
            initial={{opacity:0,y:100}}
            transition={{duration:1}}
            className=" font-semibold text-neutral-300 text-center text-4xl">Get In Touch</motion.h2>

        <motion.h3
            whileInView={{opacity:1,y:0}} 
            initial={{opacity:0,y:100}}
            transition={{duration:1}}
            className="my-20 text-neutral-300 text-center text-xl">+91 7414977731 | ashutoshgurav71@gmail.com |  Pune, Maharashtra</motion.h3>

    </div>
  )
}

export default GetInTouch