import { useState } from 'react';
import { Heart, Brain, Battery, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const features = [
    {
      id: "01",
      title: "Our Promise to You",
      description: "Pure quality, natural ingredients, guilt free indulgence. Nicelo: Naturally Delicious, Always Nutritious."
    },
    {
      id: "02",
      title: "Our Journey from Farm to You",
      description: "Finest dry fruits, carefully processed, freshly packed, and delivered with love - pure, natural goodness."
    },
    {
      id: "03",
      title: "Why Choose Us?",
      description: "Nicelo was founded to make a difference. We bring you the finest all-natural and premium nuts and snacks, free from artificial additives and colors."
    }
  ];

  const products = [
    {
      id: 1,
      name: "Omani Dates (Fard)",
      description: "Naturally sweet and nutrient-rich, Nicelo's Omani Fard Dates are soft, wholesome, and free from added sugar or preservatives. A perfect daily snack that supports energy, digestion, and heart health.",
      sizes: ["200g", "400g"],
      benefits: ["Heart Healthy", "Promoting Digestive Health", "Energy Boost", "Boost Brain Health"],
      image: "https://i.pinimg.com/736x/0e/e0/06/0ee006b2b9a0710e91fdbe952161e4ff.jpg"
    },
    {
      id: 2,
      name: "California Pistachios",
      description: "Crunchy, roasted California Pistachios - naturally wholesome, rich in antioxidants, and free from preservatives. A guilt-free snack that supports heart health and helps reduce bad cholesterol.",
      sizes: ["200g", "400g"],
      benefits: ["Heart Healthy", "Promoting Digestive Health", "Energy Boost", "Boost Brain Health"],
      image: "https://i.pinimg.com/736x/14/92/75/149275669c5e1822264c94ec1920d694.jpg"
    },
    {
      id: 3,
      name: "Cranberry",
      description: "Carefully dried for full flavor, our cranberries deliver a luxurious blend of tartness and sweetness - perfect in salads, desserts, or as a refined, healthy snack.",
      sizes: ["200g", "400g"],
      benefits: ["Heart Healthy", "Promoting Digestive Health", "Energy Boost", "Boost Brain Health"],
      image: "https://i.pinimg.com/736x/bb/ff/58/bbff589022dd72d48a348b65f98dffe9.jpg"
    }
  ];

  const BenefitIcon = ({ benefit }) => {
    if (benefit.includes("Heart")) return <Heart className="w-5 h-5 text-red-500" />;
    if (benefit.includes("Brain")) return <Brain className="w-5 h-5 text-purple-500" />;
    if (benefit.includes("Energy")) return <Battery className="w-5 h-5 text-yellow-500" />;
    if (benefit.includes("Digestive")) return <Leaf className="w-5 h-5 text-green-500" />;
    return <Leaf className="w-5 h-5 text-green-500" />;
  };

  return (
    <div className="bg-amber-50 ">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center" style={{
        backgroundImage: 'url("https://fra.cloud.appwrite.io/v1/storage/buckets/68245788001634364574/files/682571140026431691ea/view?project=nicelobackend2025&mode=user")',
        height: '50vh', // Reduced height for mobile
        minHeight: '400px' // Minimum height to ensure content visibility
      }}>
        {/* Orange Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10"></div>
        
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
         
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4 md:mb-6">Our Mission</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed px-4">
              At Nicelo, we make healthy living simple and delicious. Our dry fruits are 100% natural, 
              with no added sugar or preservatives. Perfect for snacking, blending, or baking - 
              pure goodness in every bite. Naturally nourishing. Effortlessly wholesome.
            </p>
          </div>
          
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold text-center text-amber-800 mb-6 md:mb-8">
              What Makes Nicelo Special?
            </h3>
            <p className="text-center text-base md:text-lg text-gray-700 mb-8 md:mb-12 px-4">
              100% natural dry fruits and snacks - nutritious, delicious, and free from added sugar.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.id} className="bg-amber-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 mx-auto">
                    <span className="font-bold">{feature.id}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-amber-800 mb-3 text-center">{feature.title}</h4>
                  <p className="text-gray-700 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">Our Products</h2>
          
          <div className="flex flex-col space-y-8 md:space-y-12">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                gap-6 md:gap-8 bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="md:w-1/2 relative group overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-[300px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-amber-800 mb-3 md:mb-4">{product.name}</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="mb-4 md:mb-6 p-3 md:p-4 bg-amber-50/50 rounded-lg md:rounded-xl border border-amber-100">
                    <span className="font-semibold text-amber-800 block mb-2">Available Quantities: </span>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {product.sizes.map((size, idx) => (
                        <span key={idx} className="px-3 md:px-4 py-1 bg-white rounded-full text-sm md:text-base text-amber-700 border border-amber-200">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 md:gap-3 p-2 bg-white rounded-lg shadow-sm hover:shadow transition-shadow">
                        <BenefitIcon benefit={benefit} />
                        <span className="text-xs md:text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Guilt-Free Indulgence, 100% Natural Goodness!</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Experience the pure taste of nature with Nicelo's premium selection of dry fruits and nuts.
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-white text-amber-600 px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:bg-amber-50 transition-colors text-base md:text-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}