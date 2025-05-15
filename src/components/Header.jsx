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
    { path: 'tel:+919074760272', label: 'Contact' }
  ];

  return (
    <>
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
            <Link to="/" className="flex items-center">
              <img 
                src="https://fra.cloud.appwrite.io/v1/storage/buckets/68245788001634364574/files/68257f85000ea9a38d51/view?project=nicelobackend2025&mode=user" 
                alt="Nicelo" 
                className="h-7 w-auto"
                style={{ marginTop: '-8px' }}
              />
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
              <a href="https://wa.me/+919074760272" target="_blank" rel="noopener noreferrer" className="text-stone-100 hover:text-stone-200 transition-colors duration-200">
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
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div 
        className={`md:hidden fixed inset-y-0 right-0 w-74 bg-white shadow-xl z-50 transition-all duration-300 ease-in-out transform ${
          isMenuOpen 
            ? 'translate-x-0' 
            : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto p-4 pt-20">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-stone-600 hover:text-stone-800 hover:bg-stone-50 rounded-lg transition-all duration-200"
          >
            <X size={24} />
          </button>

          <nav className="space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group flex items-center justify-between p-3 rounded-xl text-stone-600 hover:bg-stone-50 transition-all duration-200 ${
                  location.pathname === link.path ? 'bg-stone-50 font-medium' : ''
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300 ${
                    location.pathname === link.path ? 'bg-stone-600 scale-100' : 'bg-stone-400 scale-75 group-hover:scale-100'
                  }`}></span>
                  {link.label}
                </span>
                <ChevronRight 
                  size={18} 
                  className={`text-stone-600 transform transition-transform duration-300 ${
                    location.pathname === link.path ? 'translate-x-0' : '-translate-x-1 group-hover:translate-x-0'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t border-stone-100">
            <div className="grid grid-cols-3 gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 rounded-xl text-stone-600 hover:bg-stone-50 transition-all duration-200 group">
                <Instagram size={20} className="transform transition-transform duration-300 group-hover:scale-110" />
                <span className="mt-1 text-xs opacity-80">Instagram</span>
              </a>
              <a href="mailto:info@nicelofoods.com" className="flex flex-col items-center p-3 rounded-xl text-stone-600 hover:bg-stone-50 transition-all duration-200 group">
                <Mail size={20} className="transform transition-transform duration-300 group-hover:scale-110" />
                <span className="mt-1 text-xs opacity-80">Email</span>
              </a>
              <a href="https://wa.me/+919074760272" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 rounded-xl text-stone-600 hover:bg-stone-50 transition-all duration-200 group">
                <MessageCircle size={20} className="transform transition-transform duration-300 group-hover:scale-110" />
                <span className="mt-1 text-xs opacity-80">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(10px);
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