import React from 'react'
import Insta from './Insta'
import Linkedin from './Linkedin'
import X from './X'
import Github from './Github'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-4'>
        <div>
            <h1 className='text-3xl bg-gradient-to-r from-purple-600 via-red-500 to-yellow-400 inline-block text-transparent bg-clip-text'>AG</h1>
        </div>
        <div className='text-sky-400 m-6 flex items-center justify-center gap-10 text-2xl'>
            <Linkedin />
            <Github />
            <Insta />
            <X />
        </div>
    </nav>
  )
}

export default Navbar