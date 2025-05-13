import React from 'react'
import HeroSection from '../components/HeroSection'
import ProductsSection from '../components/ProductsSection'

const Home = () => {
  return (
    <main className="relative">
      <HeroSection />
      <ProductsSection />
      {/* Add more sections here as needed */}
    </main>
  )
}

export default Home 