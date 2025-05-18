import React, { useEffect, useState } from 'react';
import { ChevronRight, Star, Truck, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnhancedHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax effect for scroll
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden flex flex-col justify-center">
      {/* Single Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{ 
          backgroundImage: `url(https://fra.cloud.appwrite.io/v1/storage/buckets/68245788001634364574/files/6825c81b00101e86ccea/view?project=nicelobackend2025&mode=user)`,
          transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.05}px)` 
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-orange-800/60 to-amber-700/70 z-10" />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Animated patterns */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-amber-500 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute top-3/4 left-3/4 w-1/2 h-1/2 bg-gradient-to-br from-orange-500 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-br from-amber-300 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
        </div>
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA1IDAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIwLjgiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay pointer-events-none z-20" />

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 py-12 sm:py-20 relative z-30">
        <div className="max-w-5xl mx-auto">
          {/* Animated badge */}
          <div className="overflow-hidden mb-6 mt-10">
            <div className="transform translate-y-0 transition-transform duration-700 ease-out flex justify-center">
              <span className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-400/90 to-orange-400/90 text-amber-950 text-sm font-semibold inline-flex items-center gap-2 shadow-lg shadow-amber-500/20 border border-amber-300/30">
                <span className="w-2 h-2 bg-amber-100 rounded-full animate-ping inline-block" />
                Premium Selection
              </span>
            </div>
          </div>
          
          {/* Main heading with gradient */}
          <h1 className="text-4xl sm:text-4xl md:text-7xl lg:text-8xl font-[Unageo-Black] text-center mb-8 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-100 via-white to-amber-100 drop-shadow-md leading-tight" 
            style={{'font-family':'SmileCandy'}}>
              Smart Snacking
            </span>
          </h1>
          
          {/* Animated separator */}
          <div className="relative flex justify-center mb-8">
            <div className="w-36 h-1 bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0 rounded-full" />
            <div className="absolute w-16 h-1 bg-white/80 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
          </div>
          
          {/* Enhanced description */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed font-light max-w-3xl mx-auto text-center">
            Discover our <span className="text-amber-300 font-medium">artisanal selection</span> of premium dates and 
            dry fruits, ethically sourced and delivered fresh to your door.
          </p>
          
          {/* Interactive CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16 px-4 sm:px-0">
            <button className="group relative bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 rounded-full shadow-lg shadow-amber-600/30 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <Link 
            to="/products" className="relative z-10 flex items-center justify-center gap-2 text-amber-950 font-semibold">

              
                Shop Items
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              
              </Link>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </button>
            
            <button className="relative overflow-hidden group bg-transparent hover:bg-white/10 backdrop-blur-md text-white font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 border border-white/30 hover:border-white/50">
              <span className="relative z-10 flex items-center justify-center gap-2">
                100% Natural
                <div className="w-2 h-2 bg-green-400 rounded-full group-hover:animate-ping" />
              </span>
              <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </button>
          </div>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8 px-4 sm:px-0">
          {[
            { 
              icon: Star, 
              title: "Premium Quality", 
              description: "Handpicked dates and dairy products from the finest sources, guaranteed freshness with every order.",
              gradient: "from-amber-400 to-orange-400"
            },
            { 
              icon: Truck, 
              title: "Fast Delivery", 
              description: "Quick and reliable delivery to your location with real-time tracking and flexible delivery options.",
              gradient: "from-orange-400 to-amber-500"
            },
            { 
              icon: Shield, 
              title: "Secure Shopping", 
              description: "Safe and secure payment options for your peace of mind with encrypted transactions and buyer protection.",
              gradient: "from-amber-500 to-orange-400"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:border-white/30"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animation: `fadeIn 0.8s ease-out ${0.8 + index * 0.2}s both`
              }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-amber-600/20`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">{feature.title}</h3>
              <p className="text-white/80 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent z-20" />
    </div>
  );
}