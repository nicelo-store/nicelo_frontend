import React from 'react';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { motion } from 'framer-motion';

const ProductsSection = () => {
  const { products, loading, error } = useProducts();
  const latestProducts = products.slice(-4);

  // Skeleton loader component
  const ProductSkeleton = () => (
    <div className="bg-stone-100/90 rounded-2xl overflow-hidden border border-stone-200">
      <div className="relative h-64 bg-stone-200 animate-pulse"></div>
      <div className="p-6 min-h-[180px] bg-gradient-to-b from-stone-100 to-amber-50">
        <div className="h-6 bg-stone-200 rounded mb-4 w-3/4 animate-pulse"></div>
        <div className="space-y-2">
          <div className="h-4 bg-stone-200 rounded animate-pulse"></div>
          <div className="h-4 bg-stone-200 rounded animate-pulse w-5/6"></div>
          <div className="h-4 bg-stone-200 rounded animate-pulse w-2/3"></div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="h-8 bg-stone-200 rounded w-16 animate-pulse"></div>
          <div className="h-10 bg-stone-200 rounded-full w-24 animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-lg mb-4">Error loading products</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-amber-70/70">
      <div className="container mx-auto px-4 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600">
              Our Products
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-600 mx-auto mb-8 rounded-full"
          />
          <p className="text-stone-700 text-lg max-w-2xl mx-auto">
            Discover our premium selection of dates and dairy products, carefully sourced and delivered to your doorstep.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
            Array(4).fill().map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          ) : (
            latestProducts.map((product, index) => (
              <motion.div
                key={product.$id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative bg-stone-100/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-stone-200 shadow-lg hover:shadow-amber-200/50 transition-all duration-500"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent"></div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col min-h-[180px] bg-gradient-to-b from-stone-100 to-amber-50">
                  <h3 className="text-xl font-semibold text-amber-700 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-stone-600 mb-4 text-sm flex-grow line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-amber-600">${product.price}</span>
                      <span className="text-xs text-amber-600/80">Free Shipping</span>
                    </div>
                    <button className="group/btn relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-600 hover:from-amber-700 hover:to-orange-800 text-white px-4 py-2 rounded-full shadow-md hover:shadow-amber-200/50 transition-all duration-300">
                      <span className="relative z-10 flex items-center gap-2">
                        <ShoppingCart size={18} className="group-hover/btn:scale-110 transition-transform duration-300" />
                        Buy
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300"></span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Link 
            to="/products" 
            className="group relative overflow-hidden bg-stone-100/80 backdrop-blur-md border border-stone-200 hover:border-amber-300 hover:bg-amber-50 text-amber-700 px-8 py-4 rounded-full shadow-sm hover:shadow-amber-200/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2 text-lg font-medium">
              View More Products
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-stone-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-stone-100/50 to-amber-100/50 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;