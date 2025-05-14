import React from 'react';
import { ShoppingCart, Heart, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Premium Medjool Dates",
    price: 24.99,
    image: "https://i.pinimg.com/736x/23/fa/e8/23fae875b4e6728ad50810c40f8dc08e.jpg",
    description: "Sweet and succulent Medjool dates, perfect for snacking",
   
  },
  {
    id: 2,
    name: "Organic Camel Milk",
    price: 19.99,
    image: "https://i.pinimg.com/736x/7e/53/96/7e5396566b15340a539424baf54bd46c.jpg",
    description: "Rich and nutritious camel milk, packed with vitamins",
    
  },
  {
    id: 3,
    name: "Artisanal Cheese",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlfGVufDB8fDB8fHww",
    description: "Handcrafted cheese made with traditional methods",
    
  },
  {
    id: 4,
    name: "Date Syrup",
    price: 14.99,
    image: "https://i.pinimg.com/736x/3a/78/81/3a78811ee6f53ed964ae66da0f7e1aa5.jpg",
    description: "Natural sweetener made from premium dates",
    
  }
];

const ProductsSection = () => {
  return (
    <section className="relative min-h-screen bg-amber-70/70">
      <div className="container mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600">
              Our Products
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-stone-700 text-lg max-w-2xl mx-auto">
            Discover our premium selection of dates and dairy products, carefully sourced and delivered to your doorstep.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-stone-100/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-stone-200 shadow-lg hover:shadow-amber-200/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
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

              {/* Hover Overlay */}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
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
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;