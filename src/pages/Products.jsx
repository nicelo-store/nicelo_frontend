import React, { useState, useEffect } from 'react';
import { CircleArrowOutUpRight, Search, X } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
  const { products, loading, error } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Add effect to handle body scroll and scroll position
  useEffect(() => {
    if (selectedProduct) {
      // Store current scroll position and lock scroll
      window.modalScrollPosition = window.pageYOffset;
      document.body.style.overflow = 'hidden';
      
      // Fix the body position to prevent jumping
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.modalScrollPosition}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position when modal closes
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Scroll back to the original position
      if (window.modalScrollPosition !== undefined) {
        window.scrollTo(0, window.modalScrollPosition);
      }
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Scroll back to the original position
      if (window.modalScrollPosition !== undefined) {
        window.scrollTo(0, window.modalScrollPosition);
      }
    };
  }, [selectedProduct]);

  // Filter products based on search query
  const filteredProducts = products
    .sort((a, b) => new Date(b.$createdAt) - new Date(a.$createdAt)) // Convert to Date objects for proper comparison
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleWhatsAppOrder = (product) => {
    const message = `Hi, I'm interested in ordering:\n\nProduct ID: ${product.$id}\nName: ${product.name}\nPrice: ₹${product.price}\n${product.description ? `\nDescription: ${product.description}` : ''}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919074760272?text=${encodedMessage}`, '_blank');
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-amber-700 via-orange-600 to-amber-600">
              Our Store
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-br from-amber-700 via-orange-600 to-amber-700 mx-auto mb-8 rounded-full"></div>
          <p className="text-stone-700 text-lg max-w-2xl mx-auto">
            Explore our complete collection of premium products, carefully sourced and delivered to your doorstep.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-10 mt-[-20px]">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-amber-200 text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-200/50 transition-all duration-300 shadow-sm"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-600" size={20} />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-16 h-16 border-4 border-[#F28125]/20 border-t-[#F28125] rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-500 text-lg">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-[#F28125] text-white rounded-full hover:bg-[#F28125]/90 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && (
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 transition-all duration-300 ${selectedProduct ? 'blur-sm' : ''}`}>
            {filteredProducts.map((product) => (
              <div 
                key={product.$id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-200/50 shadow-lg hover:shadow-xl hover:shadow-amber-200/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="relative h-64 sm:h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Floating Price Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200/50 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                    <span className="text-lg sm:text-lg font-bold text-amber-600">₹ {parseFloat(product.price)}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5 sm:p-5 flex flex-col min-h-[130px] sm:min-h-[150px] relative">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-100/20 via-amber-50/10 to-transparent rounded-bl-3xl"></div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-amber-700 mb-2 group-hover:text-amber-600 transition-colors duration-300 line-clamp-1 relative">
                    {product.name}
                  </h3>
                  
                  {product.description && (
                    <span className="inline-flex px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm sm:text-sm mb-3 w-fit border border-amber-200/50 hover:bg-amber-100/50 transition-colors duration-300">
                      {product.description}
                    </span>
                  )}
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs sm:text-xs text-amber-600/80 font-medium">Free Shipping</span>
                    <button 
                      onClick={() => handleWhatsAppOrder(product)}
                      className="group/btn relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-4 sm:px-4 py-2 sm:py-2 rounded-full shadow-md hover:shadow-lg hover:shadow-amber-200/30 transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center gap-2 sm:gap-2 text-sm sm:text-sm">
                        <CircleArrowOutUpRight size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
                        Buy Now
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-600 transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300"></span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product Modal - Dropdown style */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-24 left-0 right-0 z-50 flex justify-center px-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-lg flex flex-col relative mt-20"
                style={{ maxHeight: 'calc(100vh - 120px)' }}
              >
                {/* Decorative top arrow */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-white rotate-45"></div>
                </div>

                {/* Product Image with Gradient Overlay */}
                <div className="relative h-72 flex-shrink-0">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute right-4 top-4 bg-white/90 p-2.5 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <X size={20} className="text-stone-600" />
                  </button>
                  
                  {/* Product Name and Price Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2 text-white/90">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                      ₹{parseFloat(selectedProduct.price).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6 pt-4 bg-gradient-to-b from-white to-amber-50/30 overflow-y-auto flex-grow">
                  {/* Description */}
                  {selectedProduct.description && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-stone-800 mb-2">Description</h4>
                      <p className="text-stone-600 leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>
                  )}
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-stone-600">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Free Shipping</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-600">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>24/7 Support</span>
                    </div>
                  </div>
                  
                  {/* WhatsApp Button */}
                  <button
                    onClick={() => handleWhatsAppOrder(selectedProduct)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 transform hover:-translate-y-0.5"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Order on WhatsApp
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results Message */}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className={`text-center mt-12 transition-all duration-300 ${selectedProduct ? 'blur-sm' : ''}`}>
            <p className="text-stone-600 text-lg">No products found matching your search.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Products;