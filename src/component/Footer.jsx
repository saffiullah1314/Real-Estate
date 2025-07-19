import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='w-full py-3 md:py-6 px-5 md:px-16 bg-[#111827] overflow-hidden mt-16'>
      <div className='w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start my-3 mb-9 px-4 py-8'>

        {/* Logo and Description */}
        <div className='flex flex-col w-full md:w-1/3 px-4 justify-center items-center md:justify-start md:items-start my-5 md:my-0'>
          <img src={assets.logo_dark} alt="logo" className='w-28' />
          <p className='mt-5 text-gray-400 text-center md:text-left'>
            Welcome to your gateway to exceptional living! Our real estate platform connects you with stunning properties tailored to your dreams. From luxurious homes to smart investments.
          </p>
        </div>

        {/* Company Links */}
        <div className='footer flex flex-col items-center md:items-start w-full md:w-auto my-5 md:my-0'>
          <h1 className='text-2xl font-extrabold text-white'>Company</h1>
          <ul className='mt-5 text-gray-400 text-[16px]'>
            <li><Link to="Hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="About" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li><Link to="Projects" smooth={true} offset={-250} duration={500}>Projects</Link></li>
            <li><Link to="Testimonials" smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className='flex flex-col items-center md:items-start w-full md:w-1/3 my-5 md:my-0'>
          <h1 className='text-2xl font-extrabold text-white mb-5'>Subscribe to our newsletter</h1>
          <p className='text-gray-400 text-center md:text-left'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex mt-4'>
            <input
              type="text"
              placeholder='Enter your email'
              className='w-[200px] rounded-sm mr-3 px-2 outline-none'
            />
            <button className='border px-4 py-2 border-blue-400 bg-blue-400 rounded-sm text-md hover:border-white hover:bg-transparent text-white transition-all duration-300'>
              Subscribe
            </button>
          </div>
        </div>

      </div>
      <hr />
      <p className='my-5 text-gray-400 text-center'>Copyright 2024 © GreatStack. All Right Reserved.</p>
    </div>
  );
}

export default Footer;
