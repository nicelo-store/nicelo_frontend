import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, MessageCircle, ChevronRight } from 'lucide-react';

const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: 'tel:+919074760272', label: 'Contact' }
  ];

  return (
    <>
      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden ${
        isScrolled 
          ? 'bg-gradient-to-r from-[#F28125] to-[#F28125]/90 backdrop-blur-sm shadow-md py-1' 
          : location.pathname === '/' || location.pathname === '/about'
            ? 'bg-transparent py-2' 
            : 'bg-gradient-to-r from-[#F28125] to-[#F28125]/90 backdrop-blur-sm py-1'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 relative">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="https://fra.cloud.appwrite.io/v1/storage/buckets/68245788001634364574/files/68257f85000ea9a38d51/view?project=nicelobackend2025&mode=user" 
                alt="Nicelo" 
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-stone-100 hover:text-white transition-colors duration-200 px-2 py-1 font-['MB-vintage'] ${
                    location.pathname === link.path ? 'font-semibold' : 'font-medium'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-white rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-stone-100 hover:text-white transition-colors duration-200 p-1.5 rounded-full hover:bg-white/10">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@nicelo.com" 
                className="text-stone-100 hover:text-white transition-colors duration-200 p-1.5 rounded-full hover:bg-white/10">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/+919074760272" target="_blank" rel="noopener noreferrer" 
                className="text-stone-100 hover:text-white transition-colors duration-200 p-1.5 rounded-full hover:bg-white/10">
                <MessageCircle size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-stone-100 hover:text-white transition-colors duration-200 p-1.5 rounded-full hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div 
        className={`md:hidden fixed inset-y-0 right-0 w-full max-w-full bg-white shadow-2xl z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto p-6 pt-20">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 p-2 text-stone-500 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-all duration-200"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav className="space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group flex items-center justify-between p-3 rounded-lg text-stone-700 hover:bg-stone-100 transition-all duration-200 font-['MB-vintage'] ${
                  location.pathname === link.path ? 'bg-stone-100 font-semibold' : ''
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                    location.pathname === link.path ? 'bg-[#F28125] scale-100' : 'bg-stone-400 scale-75 group-hover:scale-100'
                  }`}></span>
                  <span className="text-lg">{link.label}</span>
                </span>
                <ChevronRight 
                  size={20} 
                  className={`text-stone-400 transform transition-transform duration-300 ${
                    location.pathname === link.path ? 'translate-x-0 text-[#F28125]' : '-translate-x-1 group-hover:translate-x-0'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-stone-200">
            <h3 className="text-sm font-medium text-stone-500 mb-4 px-3">Connect with us</h3>
            <div className="grid grid-cols-3 gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="flex flex-col items-center p-3 rounded-lg text-stone-700 hover:bg-stone-100 transition-all duration-200 group">
                <Instagram size={22} className="transform transition-transform duration-300 group-hover:scale-110 mb-1.5" />
                <span className="text-xs font-medium opacity-90">Instagram</span>
              </a>
              <a href="mailto:info@nicelofoods.com" 
                className="flex flex-col items-center p-3 rounded-lg text-stone-700 hover:bg-stone-100 transition-all duration-200 group">
                <Mail size={22} className="transform transition-transform duration-300 group-hover:scale-110 mb-1.5" />
                <span className="text-xs font-medium opacity-90">Email</span>
              </a>
              <a href="https://wa.me/+919074760272" target="_blank" rel="noopener noreferrer" 
                className="flex flex-col items-center p-3 rounded-lg text-stone-700 hover:bg-stone-100 transition-all duration-200 group">
                <MessageCircle size={22} className="transform transition-transform duration-300 group-hover:scale-110 mb-1.5" />
                <span className="text-xs font-medium opacity-90">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 overflow-hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;