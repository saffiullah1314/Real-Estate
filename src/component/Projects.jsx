import React from 'react';
import { projectsData } from '../assets/assets';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const Projects = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      { breakpoint: 1424, settings: { slidesToShow: 3 } },
      { breakpoint: 968, settings: { slidesToShow: 2 } },
      { breakpoint: 580, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.div
    initial={{ opacity:0, x : 100 }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity:1, x : 0  }}
        viewport={{ once: false, amount: 0.2 }}
    
    className="mx-auto w-full py-4 px-6 md:px-20 lg:px-32 my-20 mt-10" id='Projects'>
      <Slider {...settings}>
        {projectsData.map((project, index) => (
          <div key={index} className="p-2 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover rounded object-center relative mb-6"
            />
            <div className='absolute left-0 right-0 bottom-0 flex justify-center'>
              <div className='bg-white py-4 px-5 shadow-lg rounded-md w-auto h-auto flex flex-col justify-center items-center'>
                <h3 className='text-xl font-extrabold'>{project.title}</h3>
                <p className='text-gray-500 text-md'>{project.location} | {project.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

const Arrow = ({ direction, onClick }) => (
  <button
    className={`absolute top-[90%]  p-2 rounded mt-20 bg-gray-300 hover:bg-gray-400 transition-all duration-200 ${
      direction === 'next' ? 'right-4' : 'right-[70px]'
    }`}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="blue"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={
          direction === 'next'
            ? 'M8.25 4.5l7.5 7.5-7.5 7.5'
            : 'M15.75 4.5l-7.5 7.5 7.5 7.5'
        }
      />
    </svg>
  </button>
);

export default Projects;
