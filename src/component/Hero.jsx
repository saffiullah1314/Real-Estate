import React from 'react'
import Navbar from './Navbar'
import header_img from "../../public/header_img.png";
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <div id='Hero'>
      <div className='w-full flex justify-center flex-col items-center text-white'>
      <img src={header_img} alt="Header" className="w-[100%] h-screen brightness-75 object-cover relative" />
        <motion.div
        initial={{ opacity:0, x : 100 }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity:1, x : 0  }}
        viewport={{ once: false, amount: 0.2 }}
        className='flex flex-col absolute w-[70%] md:w-[50%] justify-center items-center '>
            <h2 className=' font-semibold text-5xl sm:text-6xl md:text-6xl lg:text-7xl mb-7 text-center'>Explore homes that fit your dreams</h2>
            <div className='flex gap-5'>
                <button className='px-8 py-2 border-2 border-white rounded-md text-xl hover:border-white hover:text-gray-700 hover:bg-white transition-all duration-300'><Link to='Projects' smooth={true} offset={-250} duration={600}>Project</Link></button>
                <button className='px-7 py-2 border-2 border-blue-900 bg-blue-900 rounded-md text-xl  hover:border-white hover:bg-white hover:text-gray-700
                 transition-all duration-300'><Link to='Contact' smooth={true} offset={0} duration={500}>Contact</Link></button>
            </div>
        </motion.div>
        <Navbar />
      </div>
    </div>
  )
}

export default Hero
