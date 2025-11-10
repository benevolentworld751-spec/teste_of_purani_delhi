import React from 'react';
import { motion } from 'framer-motion';
import '/src/index.css';
import backgroundImage from '/src/assets/delhi-street.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Overlay to darken background image and make text readable */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-4xl md:text-6xl font-bold mb-4"
        >
          Taste of Purani Delhi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-poppins text-lg md:text-2xl mb-8"
        >
          Where Tradition Meets Taste
        </motion.p>

        <div className="flex space-x-4">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-golden text-dark-brown font-poppins px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
            onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Menu
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="border-2 border-golden text-golden font-poppins px-6 py-3 rounded-lg shadow-lg hover:bg-golden hover:text-dark-brown transition duration-300"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Reserve Your Table
          </motion.button>

        </div>
      </div>
    </section>
  );
};

export default Hero;