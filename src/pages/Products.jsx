import React, { useState } from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import { useProducts } from '../context/ProductContext';

const Products = () => {
  const { products, loading, error } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-6">
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
            <div className="w-16 h-16 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-500 text-lg">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.$id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-200 shadow-lg hover:shadow-amber-200/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent"></div>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-6 flex flex-col h-[110px] sm:h-[150px]">
                  <h3 className="text-base sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4 group-hover:text-amber-600 transition-colors duration-300 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-2 sm:pt-3">
                    <div className="flex flex-col">
                      <span className="text-lg sm:text-2xl font-bold text-amber-600">₹ {parseFloat(product.price).toFixed(2)}</span>
                      <span className="text-[10px] sm:text-xs text-amber-600/80">Free Shipping</span>
                    </div>
                    <button className="group/btn relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md hover:shadow-amber-200/50 transition-all duration-300">
                      <span className="relative z-10 flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                        <ShoppingCart size={14} className="group-hover/btn:scale-110 transition-transform duration-300" />
                        Buy
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-600 transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300"></span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results Message */}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-stone-600 text-lg">No products found matching your search.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Products;