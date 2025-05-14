import React, { useEffect, useState } from 'react';
import { ChevronRight, Star, Truck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = "https://images.pexels.com/photos/28366271/pexels-photo-28366271/free-photo-of-granola.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background image with loading state */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img 
          src="https://images.pexels.com/photos/28366271/pexels-photo-28366271/free-photo-of-granola.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Background" 
          className="w-full h-full object-cover md:object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            objectPosition: 'center center',
            minHeight: '100%',
            minWidth: '100%'
          }}
        />
      </div>

      {/* Loading overlay that fades out */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute inset-0 bg-white z-10"
      />

      {/* Content layers */}
      <div className="relative">
        {/* Orange overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-800/10 via-orange-700/30 to-amber-600/10"
        />
        
        {/* Abstract shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-amber-700/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500/20 to-amber-700/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
        />

        {/* Main content with staggered animations */}
        <div className="container mx-auto px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mt-10"
          >
            <div className="mb-3 inline-block">
              <motion.span
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-100 text-sm font-medium inline-block"
              >
                Premium Selection
              </motion.span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 mt-2 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white drop-shadow-sm">
                nicelo Dry fruits
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-24 h-0.5 bg-gradient-to-r from-white/20 via-white to-white/20 mx-auto mb-8 rounded-full"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-3xl mx-auto"
            >
              Discover our <span className="text-white font-medium underline decoration-amber-300 decoration-2 underline-offset-4">artisanal selection</span> of premium dates and 
              dairy products, ethically sourced and delivered fresh to your door.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mb-12 px-4 sm:px-0"
            >
              <button className="group relative bg-white hover:bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2 text-amber-800 font-medium text-sm sm:text-base">
                  Shop Collection
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </button>
              
              <button className="relative overflow-hidden group bg-transparent hover:bg-white/10 backdrop-blur-md text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 border border-white/20 text-sm sm:text-base">
                <span className="relative z-10">100% Natural</span>
                <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </button>
            </motion.div>
          </motion.div>

          {/* Feature cards with staggered loading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 px-4 sm:px-0"
          >
            {[
              { icon: Star, title: "Premium Quality", description: "Handpicked dates and dairy products from the finest sources, guaranteed freshness with every order." },
              { icon: Truck, title: "Fast Delivery", description: "Quick and reliable delivery to your location with real-time tracking and flexible delivery options." },
              { icon: Shield, title: "Secure Shopping", description: "Safe and secure payment options for your peace of mind with encrypted transactions and buyer protection." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white/10 group"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed font-light text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}