import React from 'react';
import { motion } from 'framer-motion';
import '/src/index.css';
import TraditionalImage from "/src/assets/traditional_dish.jpg"
import ResturentInterImg from "/src/assets/gallery_interior1.jpg"
import DiningAmbianceImg from "/src/assets/dining_ambiance.jpg"
import TradiDis2img from "/src/assets/traditional_dish1.jpg"
import RestInter2img from "/src/assets/restaurant_interior2.jpg"
import DinAmb2img from "/src/assets/dining_ambiance2.png"

const galleryImages = [
  { src: TraditionalImage, alt: "Traditional Dish 1" },
  { src: ResturentInterImg, alt: "Restaurant Interior 1" },
  { src: DiningAmbianceImg, alt: "Dining Ambiance 1" },
  { src: TradiDis2img, alt: "Traditional Dish 2" },
  { src: RestInter2img, alt: "Restaurant Interior 2" },
  { src: DinAmb2img, alt: "Dining Ambiance 2" },
  // Add more images as needed
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-maroon to-dark-brown text-beige">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-golden"
        >
          Our Gallery
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-poppins text-lg">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;