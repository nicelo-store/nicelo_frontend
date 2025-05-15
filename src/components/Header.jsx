import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, MessageCircle, ChevronRight } from 'lucide-react';

const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-[#F28125] via-[#F28125] to-[#F28125] backdrop-blur-md shadow-lg' 
        : location.pathname === '/' || location.pathname === '/about'
          ? 'bg-transparent' 
          : 'bg-gradient-to-r from-[#F28125] via-[#F28125] to-[#F28125] backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-stone-100">
            nicelo
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-stone-100 hover:text-stone-200 transition-colors duration-200 ${
                  location.pathname === link.path ? 'font-medium' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-stone-100 hover:text-stone-200 transition-colors duration-200">
              <Instagram size={20} />
            </a>
            <a href="mailto:contact@nicelo.com" className="text-stone-100 hover:text-stone-200 transition-colors duration-200">
              <Mail size={20} />
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="text-stone-100 hover:text-stone-200 transition-colors duration-200">
              <MessageCircle size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-100 hover:text-stone-200 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-x-0 top-20 transition-all duration-300 ease-in-out transform p-4 ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{ zIndex: 50 }}
        >
          <div className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 shadow-lg rounded-t-2xl rounded-b-2xl overflow-hidden">
            <nav className="px-4 py-6">
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`group flex items-center justify-between p-3 rounded-xl text-stone-100 hover:bg-stone-100/10 transition-all duration-200 ${
                      location.pathname === link.path ? 'bg-stone-100/10 font-medium' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300 ${
                        location.pathname === link.path ? 'bg-stone-100 scale-100' : 'bg-stone-100/50 scale-75 group-hover:scale-100'
                      }`}></span>
                      {link.label}
                    </span>
                    <ChevronRight 
                      size={18} 
                      className={`transform transition-transform duration-300 ${
                        location.pathname === link.path ? 'translate-x-0' : '-translate-x-1 group-hover:translate-x-0'
                      }`}
                    />
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-stone-100/10">
                <div className="grid grid-cols-3 gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 rounded-xl text-stone-100 hover:bg-stone-100/10 transition-all duration-200 group">
                    <Instagram size={20} className="transform transition-transform duration-300 group-hover:scale-110" />
                    <span className="mt-1 text-xs opacity-80">Instagram</span>
                  </a>
                  <a href="mailto:contact@nicelo.com" className="flex flex-col items-center p-3 rounded-xl text-stone-100 hover:bg-stone-100/10 transition-all duration-200 group">
                    <Mail size={20} className="transform transition-transform duration-300 group-hover:scale-110" />
                    <span className="mt-1 text-xs opacity-80">Email</span>
                  </a>
                  <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 rounded-xl text-stone-100 hover:bg-stone-100/10 transition-all duration-200 group">
                    <MessageCircle size={20} className="transform transition-transform duration-300 group-hover:scale-110" />
                    <span className="mt-1 text-xs opacity-80">WhatsApp</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;