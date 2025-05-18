import React, { useState, useEffect } from 'react';
import { Instagram, Leaf, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative py-24 bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-amber-200 opacity-20"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-orange-200 opacity-20"></div>
        <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-amber-100 opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section with enhanced styling */}
          <div 
            className={`relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <img
              src="https://i.pinimg.com/736x/d7/54/cf/d754cfe3fb2261ed26c47876e2971624.jpg"
              alt="Premium dates and dry fruits"
              className="w-full h-96 lg:h-[540px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/30 to-transparent"></div>
            
            {/* Image overlay caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Nature's Goodness</h3>
            </div>
            
            {/* Floating badge */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <div className="flex items-center gap-1">
                <Award size={16} className="text-amber-600" />
                <span className="text-xs font-bold text-stone-800">Premium Quality</span>
              </div>
            </div>
          </div>

          {/* Content Section with enhanced styling */}
          <div 
            className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div>
              <p className="text-amber-600 font-semibold mb-2 tracking-wider"
              style={{'font-family':'SmileCandy'}}
              >OUR JOURNEY</p>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600"
                style={{'font-family':'SmileCandy'}}
                >
                  Our Story
                </span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-stone-700 text-lg leading-relaxed">
                At Nicelo, we believe in guilt-free indulgence. Our premium dry fruits are made with 100% natural ingredients — no added sugar, no preservatives, no compromises. From farm to pouch, we're committed to nourishing your lifestyle with wholesome, delicious goodness.
              </p>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Leaf size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">100% Natural</h4>
                    <p className="text-sm text-stone-600">No artificial additives</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Heart size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Wellness Focused</h4>
                    <p className="text-sm text-stone-600">Nutrient-rich </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-500">
                <h3 className="text-2xl font-semibold text-amber-600 mb-4">Stay Connected</h3>
                <p className="text-stone-700">
                  Tag us with <span className="font-semibold">#SnackWithNicelo</span> to get featured and show your love for clean snacking!
                </p>
                <p className="text-stone-700 mt-2">
                  Follow us on Instagram <span className="font-semibold">@nicelo.in</span> and join the movement
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://instagram.com/nicelo.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-amber-200 font-medium"
                >
                  <Instagram size={20} />
                  <span>Follow Us</span>
                </a>
                
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-amber-500 text-amber-600 font-medium rounded-full hover:bg-amber-50 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;