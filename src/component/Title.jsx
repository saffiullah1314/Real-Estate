import React from 'react'
import { motion } from 'framer-motion';

const Title = ({title , subtitle , description , subdescription}) => {
  return (
    <div>
       <motion.div
       initial={{ opacity:0, scale : 0.5 }}
       transition={{ duration: 0.5 }}
       whileInView={{ opacity:1, scale : 1 }}
       viewport={{ once: false, amount: 0.2 }} 
       
       className=' mt-32 flex flex-col text-center px-7'>
              <h1 className='text-4xl font-bold '>
                {title} <span className='font-light underline'>{subtitle}</span>
              </h1>
              <p className='mt-4 text-gray-600'>{description}</p>
              <p className='text-gray-600'>{subdescription}</p>
            </motion.div>
      
    </div>
  )
}

export default Title;
