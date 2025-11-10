import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Clear form
    // In a real application, you'd send this data to a backend server
  };

  return (
    <section id="contact" className="py-16 bg-beige text-dark-brown">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-maroon"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-3xl font-semibold mb-6 text-maroon">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-poppins font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-golden bg-white text-dark-brown"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-poppins font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-golden bg-white text-dark-brown"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-poppins font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-golden bg-white text-dark-brown"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-maroon text-beige font-poppins px-8 py-3 rounded-lg shadow-lg hover:bg-dark-brown transition duration-300 text-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Details and Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-3xl font-semibold mb-6 text-maroon">Find Us</h3>
            <div className="space-y-4 mb-8 text-lg font-poppins">
              <p><strong>Address:</strong> 123 Heritage Lane, Old Delhi, India</p>
              <p><strong>Phone:</strong> +91 12345 67890</p>
              <p><strong>Email:</strong> info@tasteofpuranidelhi.com</p>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              {/* Replace with your actual Google Maps embed code */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.518693892305!2d77.22467541508316!3d28.67027558238692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd17c7e3a95d%3A0x70c793796d8e2e9c!2sJama%20Masjid!5e0!3m2!1sen!2sin!4v1678912345678!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;