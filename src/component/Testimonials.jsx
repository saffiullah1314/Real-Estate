import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div
    initial={{ opacity:0, x : -100 }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity:1, x : 0  }}
        viewport={{ once: false, amount: 0.2 }}  

    className='flex flex-wrap gap-1 md:gap-3 justify-center w-[100vw] py-10' id='Testimonials'>
         {testimonialsData.map((Testimonial , index)=>(
            <div key={index} className='w-[450px] h-auto px-7 md:px-10 py-10 md:py-14 flex flex-col justify-center items-center shadow-lg bg-slate-100 rounded-sm m-8'>
                <img src={Testimonial.image} alt={Testimonial.title} className='w-20 h-20 rounded-full mb-5 md:mb-6' />
                <h2 className='text-2xl font-semibold'>{Testimonial.name}</h2>
                <p className='text-gray-500 text-sm'>{Testimonial.title}</p>
                <div className='flex gap-1 my-4 text-red-600'>
                    {Array.from({length : Testimonial.rating}, (item , index) => (
                       <img key={index} src={assets.star_icon} alt=""/>
                    ))}
                </div>
                <p className='text-gray-600'>{Testimonial.text}</p>

            </div>
         ))}

        </motion.div>
      
  )
}

export default Testimonials
