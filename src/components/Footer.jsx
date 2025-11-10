import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Column 1: Logo and Slogan */}
          <div className="flex flex-col items-center md:items-start">
            {/* Replace with your actual logo image if available */}
            <div
              className="font-playfair text-3xl font-bold text-golden mb-2 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              Taste of Purani Delhi
            </div>
            <p className="font-poppins text-sm leading-relaxed max-w-xs md:max-w-none">
              Where Every Dish Tells a Royal Story. <br/>Experience the authentic flavors of Old Delhi.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:pl-16"> {/* Added padding for better spacing on desktop */}
            <h3 className="font-playfair text-xl font-semibold mb-4 text-golden">Quick Links</h3>
            <ul className="space-y-2 font-poppins text-md">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-golden transition duration-300">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-golden transition duration-300">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu')} className="hover:text-golden transition duration-300">Menu</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-golden transition duration-300">Gallery</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-golden transition duration-300">Contact</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media & Contact Info (Optional addition) */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-golden">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-6 mb-4">
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-beige hover:text-golden transition duration-300 text-2xl">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-beige hover:text-golden transition duration-300 text-2xl">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-beige hover:text-golden transition duration-300 text-2xl">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-beige hover:text-golden transition duration-300 text-2xl">
                <FaYoutube />
              </a>
            </div>
            {/* You could also add a mini-contact section here for address/phone */}
            <div className="mt-6 text-sm font-poppins md:text-left">
              <p>123 Heritage Lane, Old Delhi, India</p>
              <p>+91 12345 67890</p>
              <p>info@tasteofpuranidelhi.com</p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-beige border-opacity-20 mt-10 pt-8 text-center">
          <p className="font-poppins text-sm">&copy; {new Date().getFullYear()} Taste of Purani Delhi. All rights reserved.</p>
          <p className="font-poppins text-xs mt-1">Crafted with passion for authentic Indian cuisine.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;