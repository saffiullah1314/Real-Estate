import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
    initial={{ opacity:0, x : -100 }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity:1, x : 0  }}
        viewport={{ once: false, amount: 0.2 }}
    className='w-[100%] px-16 md:px-20  flex justify-center items-center flex-col ' id='About'>
      <div className='flex flex-col md:flex-row m-10 items-center md:items-start gap-10 w-full'>
        <div className='flex basis-[50%] w-auto h-auto'>
          <img
            src={assets.brand_img}
            alt="Brand Image"
            className='w-auto '
          />
        </div>

        <div className='flex flex-col items-center md:items-start mt-14 basis-[50%] md:px-10'>
          <div className='grid grid-cols-2 mb-10 gap-16'>
            <div>
              <h2 className='text-3xl md:text-4xl font-semibold'>10+</h2>
              <p className='text-gray-600'>Years of Excellence</p>
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-semibold'>15+</h2>
              <p className='text-gray-600'>Projects Completed </p>
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-semibold'>20+</h2>
              <p className='text-gray-600'>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-semibold'>25+</h2>
              <p className='text-gray-600'>Ongoing Projects</p>
            </div>
          </div>
          <p className='text-gray-600 md:mb-10 mb-7'>
          Welcome to your gateway to exceptional living! Our real estate platform connects you with stunning properties tailored to your dreams. From luxurious homes to smart investments, we specialize in finding the perfect match for every lifestyle. Experience expert guidance, trusted services, and seamless transactions, all in one place. Discover your next property today and turn your vision into reality!</p>
          <button className='text-white px-7 py-2 border-2 border-blue-900 bg-blue-900 rounded-md text-xl hover:border-blue-900 hover:bg-transparent hover:text-blue-900
                 transition-all duration-300'>Learn More</button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
