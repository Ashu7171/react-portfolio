import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { RiBootstrapFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from 'framer-motion'

const iconVarients =(duration) =>({
    initial:{y:-10},
    animate:{y:[10,-10],
        transition:{duration:duration, 
            ease:'linear',
            repeat:Infinity,
            repeatType:'reverse'
        }
    },

})

const Technologies = () => {
  return (
    <div className=' pb-24'>
        <motion.h1 
        whileInView={{opacity:1,y:0}} 
        initial={{opacity:0,y:100}}
        transition={{duration:1}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1,y:0}} 
        initial={{opacity:0,y:100}}
        transition={{duration:1}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVarients(2.4)}
            initial='initial'
            animate='animate'
            className='flex justify-center p-2 border-2 rounded-2xl border-neutral-400 '>
                <SiMongodb className='text-7xl text-green-500 '/>
            </motion.div>

            <motion.div 
            variants={iconVarients(3)}
            initial='initial'
            animate='animate'
            className='flex justify-center border-2 p-2 rounded-2xl border-neutral-400'>
                <SiExpress className='text-7xl text-white '/>
            </motion.div>

            <motion.div 
            variants={iconVarients(5)}
            initial='initial'
            animate='animate'
            className='flex justify-center border-2 p-2 rounded-2xl border-neutral-400'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div 
            variants={iconVarients(2)}
            initial='initial'
            animate='animate'
            className='flex justify-center border-2 p-2 rounded-2xl border-neutral-400'>
                <FaNodeJs className='text-7xl text-lime-400'/>
            </motion.div>

            <motion.div 
            variants={iconVarients(6)}
            initial='initial'
            animate='animate'
            className='flex justify-center border-2 p-2 rounded-2xl border-neutral-400'>
                <SiPython className='text-7xl  text-yellow-400'/>
            </motion.div>

            <motion.div 
            variants={iconVarients(4)}
            initial='initial'
            animate='animate'
            className='flex justify-center border-2 p-2 rounded-2xl border-neutral-400'>
                <RiBootstrapFill className='text-7xl  text-purple-600'/>
            </motion.div>

            <motion.div 
            variants={iconVarients(3)}
            initial='initial'
            animate='animate'
            className='flex justify-center border-2 p-2 rounded-2xl border-neutral-400'>
                <RiTailwindCssFill className='text-7xl  text-cyan-600'/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies