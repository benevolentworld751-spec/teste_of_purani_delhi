import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <nav className="fixed w-full z-50 bg-blue-50 text-beige shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-playfair font-bold cursor-pointer" onClick={() => scrollToSection('home')}>
          Taste of Purani Delhi
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-beige focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-poppins text-lg">
          <button onClick={() => scrollToSection('home')} className="hover:text-golden transition duration-300">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-golden transition duration-300">About Us</button>
          <button onClick={() => scrollToSection('menu')} className="hover:text-golden transition duration-300">Menu</button>
          <button onClick={() => scrollToSection('gallery')} className="hover:text-golden transition duration-300">Gallery</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-golden transition duration-300">Contact</button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-50 py-2">
          <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-beige hover:bg-dark-brown transition duration-300">Home</button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-beige hover:bg-dark-brown transition duration-300">About Us</button>
          <button onClick={() => scrollToSection('menu')} className="block w-full text-left px-4 py-2 text-beige hover:bg-dark-brown transition duration-300">Menu</button>
          <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-4 py-2 text-beige hover:bg-dark-brown transition duration-300">Gallery</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-beige hover:bg-dark-brown transition duration-300">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;