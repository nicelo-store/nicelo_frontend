import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-stone-100 to-stone-200/80 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#F28125] mb-6">Nicelo</h3>
            <p className="text-stone-600 text-lg">
              Premium quality dates and dairy products delivered to your doorstep.
            </p>
            <div className="flex space-x-6 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-stone-500 hover:text-[#F28125] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Instagram size={24} />
              </a>
              <a href="mailto:info@nicelofoods.com" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-stone-500 hover:text-[#F28125] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Mail size={24} />
              </a>
              <a href="https://wa.me/+919074760272" target="_blank" rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-stone-500 hover:text-[#F28125] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-stone-600 hover:text-[#F28125] transition-colors text-lg">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-stone-600 hover:text-[#F28125] transition-colors text-lg">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-600 hover:text-[#F28125] transition-colors text-lg">About Us</Link>
              </li>
              <li>
                <Link to="tel:+919074760272" className="text-stone-600 hover:text-[#F28125] transition-colors text-lg">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin size={20} className="text-[#F28125]" />
                <span className="text-lg">123 Business Street, City, State</span>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <Phone size={20} className="text-[#F28125]" />
                <span className="text-lg">+91 907 476 0272</span>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <Mail size={20} className="text-[#F28125]" />
                <span className="text-lg">info@nicelofoods.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-300/50 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-stone-600 text-base">
              © {new Date().getFullYear()} Nicelo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;