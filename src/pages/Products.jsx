import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, ChevronRight, Search } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Premium Medjool Dates",
    price: 24.99,
    image: "https://i.pinimg.com/736x/23/fa/e8/23fae875b4e6728ad50810c40f8dc08e.jpg",
    description: "Sweet and succulent Medjool dates, perfect for snacking",
    category: "Dates"
  },
  {
    id: 2,
    name: "Organic Camel Milk",
    price: 19.99,
    image: "https://i.pinimg.com/736x/7e/53/96/7e5396566b15340a539424baf54bd46c.jpg",
    description: "Rich and nutritious camel milk, packed with vitamins",
    category: "Dairy"
  },
  {
    id: 3,
    name: "Artisanal Cheese",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlfGVufDB8fDB8fHww",
    description: "Handcrafted cheese made with traditional methods",
    category: "Dairy"
  },
  {
    id: 4,
    name: "Date Syrup",
    price: 14.99,
    image: "https://i.pinimg.com/736x/3a/78/81/3a78811ee6f53ed964ae66da0f7e1aa5.jpg",
    description: "Natural sweetener made from premium dates",
    category: "Dates"
  },
  // Add more products here
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
            Explore our complete collection of premium dates and dairy products, carefully sourced and delivered to your doorstep.
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

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
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
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full border border-amber-200">
                  <span className="text-[10px] sm:text-xs text-amber-700">{product.category}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-6 flex flex-col h-[110px] sm:h-[150px]">
                <h3 className="text-base sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4 group-hover:text-amber-600 transition-colors duration-300 line-clamp-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-auto pt-2 sm:pt-3">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-2xl font-bold text-amber-600">${product.price}</span>
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

              {/* Hover Overlay */}
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-stone-600 text-lg">No products found matching your search.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Products; 