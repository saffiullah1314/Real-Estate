import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  const menu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div

    initial={{ opacity:0, y: -50 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity:1, y: 0  }}
     viewport={{ once:true }}
      className={`${
        sticky ? 'bg-blue-900 transition-all duration-500' : ''
      } w-100vw navbar fixed top-0 left-0 right-0 z-10 flex justify-between items-center py-2 md:py-3 px-5 md:px-12 sm:px-10 lg:px-32`}
    >
      <div>
        <img src={assets.logo} className="w-30" alt="logo" />
      </div>

      <ul className="hidden lg:flex gap-5 md:gap-8 text-white text-lg md:text-xl relative cursor-pointer">
        <li>
          <Link to="Hero" smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="About" smooth={true} offset={-200} duration={500}>About</Link>
        </li>
        <li>
          <Link to="Projects" smooth={true} offset={-250} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="Testimonials" smooth={true} offset={-250} duration={500}>Testimonials</Link>
        </li>
      </ul>
      <button className="hidden lg:block text-gray-700 px-8 py-2 border-2 rounded-3xl bg-white border-white outline-none text-xl transition-all duration-300 hover:text-white hover:bg-transparent">
        Sign-up
      </button>

      <img
        src={assets.menu_icon}
        className="w-6 lg:hidden block cursor-pointer"
        onClick={menu}
        alt="menu"
      />

      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 z-20 transition-opacity ${
          showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={menu} // Closes menu if clicked outside
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[60%] sm:w-[50%] backdrop-blur-3xl text-white z-30 transition-transform duration-300 ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div
          className="absolute top-3 right-10 text-white text-3xl cursor-pointer font-extrabold"
          onClick={menu}
        >
          &#10005;
        </div>
        <ul className="flex flex-col items-center gap-5 text-lg mt-32">
          <li>
            <Link to="Hero" smooth={true} offset={0} duration={500} onClick={menu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="About" smooth={true} offset={-200} duration={500} onClick={menu}>
              About
            </Link>
          </li>
          <li>
            <Link to="Projects" smooth={true} offset={0} duration={500} onClick={menu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="Testimonials" smooth={true} offset={0} duration={500} onClick={menu}>
              Testimonials
            </Link>
          </li>
          <button className="block md:hidden text-gray-700 px-8 py-2 border-2 rounded-3xl bg-white border-white outline-none text-xl transition-all duration-300 hover:text-white hover:bg-transparent">
            Sign-up
          </button>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
