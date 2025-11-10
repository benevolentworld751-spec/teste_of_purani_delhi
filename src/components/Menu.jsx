import React from 'react';
 import { motion } from 'framer-motion';

const dishes = [
  {
    name: "Nihari",
    description: "A timeless classic. Slow-cooked lamb infused with aromatic spices, dish for royalty.",
    price: "₹650",
    image: "/src/assets/nihari.jpeg", // Replace with actual image paths
    isSpecial: true,
  },
  {
    name: "Seekh Kebabs",
    description: "Juicy, minced meat grilled to perfection, full of flavor.",
    price: "₹420",
    image: "/src/assets/seekh-kebab.jpg",
    isSpecial: false,
  },
  {
    name: "Mutton Korma",
    description: "Fragrant, deeply satisfying mutton curry, a regal delight.",
    price: "₹580",
    image: "/src/assets/mutton-korma.jpg",
    isSpecial: false,
  },
  {
    name: "Butter Chicken",
    description: "Creamy tomato-based chicken curry, rich and flavorful.",
    price: "₹520",
    image: "/src/assets/butter-chicken.jpg",
    isSpecial: false,
  },
  {
    name: "Tandoori Roti",
    description: "Traditional Indian flatbread baked in a tandoor.",
    price: "₹80",
    image: "/src/assets/tandoori-roti.jpg",
    isSpecial: false,
  },
  {
    name: "Biryani",
    description: "Fragrant basmati rice cooked with tender meat and spices.",
    price: "₹990",
    image: "/src/assets/biryani.jpg",
    isSpecial: false,
  },
  // Add more dishes as needed
];

const MenuItem = ({ dish }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 relative"
  >
    {dish.isSpecial && (
      <span className="absolute top-2 left-2 bg-golden text-dark-brown text-xs font-bold px-3 py-1 rounded-full z-10">
        Chef's Special
      </span>
    )}
    <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-playfair text-xl font-semibold mb-2 text-maroon">{dish.name}</h3>
      <p className="font-poppins text-gray-700 text-sm mb-3">{dish.description}</p>
      <div className="flex justify-between items-center">
        <span className="font-poppins text-lg font-bold text-dark-brown">{dish.price}</span>
        {/* Optional: Add an "Add to Cart" button or similar */}
      </div>
    </div>
  </motion.div>
);

const Menu = () => {
  const chefSpecials = dishes.filter(dish => dish.isSpecial);
  const otherDishes = dishes.filter(dish => !dish.isSpecial);

  return (
    <section id="menu" className="py-16 bg-beige text-dark-brown">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-maroon"
        >
          Our Culinary Delights
        </motion.h2>

        {chefSpecials.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-3xl font-semibold mb-8 text-dark-brown"
            >
              Chef's Special
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {chefSpecials.map((dish, index) => (
                <MenuItem key={index} dish={dish} />
              ))}
            </div>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherDishes.map((dish, index) => (
            <MenuItem key={index} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;