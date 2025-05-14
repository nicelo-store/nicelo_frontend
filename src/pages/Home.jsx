import React from 'react'
import HeroSection from '../components/HeroSection'
import ProductsSection from '../components/ProductsSection'
import OurStory from '../components/OurStory'

const Home = () => {
  return (
    <main className="relative">
      <HeroSection />
      <ProductsSection />
      <OurStory />
      {/* Add more sections here as needed */}
    </main>
  )
}

export default Home