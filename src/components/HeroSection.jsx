import React, { useEffect, useState } from 'react';
import { ChevronRight, Star, Truck, Shield } from 'lucide-react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background image with responsive scaling */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.pexels.com/photos/28366271/pexels-photo-28366271/free-photo-of-granola.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Background" 
          className="w-full h-full object-cover md:object-center"
          style={{
            objectPosition: 'center center',
            transform: 'scale(1.1)',
            minHeight: '100%',
            minWidth: '100%'
          }}
        />
      </div>

      {/* Orange overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-800/10 via-orange-700/30 to-amber-600/10"></div>
      
      {/* Subtle animated background texture */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <div className="absolute w-full h-full bg-repeat opacity-10"></div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-amber-700/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500/20 to-amber-700/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      {/* Main content with enhanced animations */}
      <div className={`relative container mx-auto px-4 py-24 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-4xl mx-auto text-center mt-10">
          <div className="mb-3 inline-block">
            <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-100 text-sm font-medium">
              Premium Selection
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 mt-2 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white drop-shadow-sm">
              nicelo Dry fruits
            </span>
          </h1>
          
          <div className="w-24 h-0.5 bg-gradient-to-r from-white/20 via-white to-white/20 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            Discover our <span className="text-white font-medium underline decoration-amber-300 decoration-2 underline-offset-4">artisanal selection</span> of premium dates and 
            dairy products, ethically sourced and delivered fresh to your door.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mb-12 px-4 sm:px-0">
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
          </div>
        </div>

        {/* Feature highlights with enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 px-4 sm:px-0">
          {[
            { icon: Star, title: "Premium Quality", description: "Handpicked dates and dairy products from the finest sources, guaranteed freshness with every order." },
            { icon: Truck, title: "Fast Delivery", description: "Quick and reliable delivery to your location with real-time tracking and flexible delivery options." },
            { icon: Shield, title: "Secure Shopping", description: "Safe and secure payment options for your peace of mind with encrypted transactions and buyer protection." }
          ].map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white/10 group">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed font-light text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}