import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-beige text-dark-brown">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/src/assets/chef-kitchen.jpg" // Ensure this image path is correct
            alt="Chef in kitchen"
            className="rounded-xl shadow-xl max-w-full h-auto object-cover"
            style={{ maxHeight: '500px' }} // Limit image height
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-maroon">Our Heritage</h2>
          <p className="font-poppins text-lg leading-relaxed">
            Inspired by the royal kitchens of Old Delhi, "Taste of Purani Delhi" brings centuries-old traditions to your plate. Our authentic Mughlai and North Indian cuisine, passed down through generations, embodies the rich flavors that once graced the tables of emperors. Every dish is a tribute to a culinary legacy that celebrates history and taste.
          </p>
          <p className="font-poppins text-lg leading-relaxed mt-4">
            We meticulously select the finest spices and freshest ingredients to recreate the magic of Old Delhi's famous street food and regal feasts, offering an unforgettable dining experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;