import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Page transition wrapper component
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]  // Custom cubic-bezier for smoother feel
      }}
      style={{
        willChange: "opacity, transform",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden"
      }}
    >
      {children}
    </motion.div>
  )
}

// AnimatedRoutes component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/products" element={
          <PageTransition>
            <Products />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

// Main App component
const AppContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div className="App min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-50 relative">
      {/* Global decorative elements with optimized animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-overlay filter blur-2xl opacity-60 motion-safe:animate-pulse"
          style={{
            willChange: "transform, opacity",
            transform: "translateZ(0)",
            animationDuration: '6s'
          }}
        ></div>
        <div 
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full mix-blend-overlay filter blur-2xl opacity-60 motion-safe:animate-pulse"
          style={{
            willChange: "transform, opacity",
            transform: "translateZ(0)",
            animationDelay: '2s',
            animationDuration: '7s'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/10 rounded-full mix-blend-overlay filter blur-2xl opacity-60 motion-safe:animate-pulse"
          style={{
            willChange: "transform, opacity",
            transform: "translateZ(0)",
            animationDelay: '4s',
            animationDuration: '8s'
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(#4ade8011_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-10"></div>
      </div>

      {/* Optimized blur overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
          style={{ willChange: "opacity" }}
        ></motion.div>
      )}

      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <main 
        className={`pt-0 ${isMenuOpen ? 'blur-sm' : 'blur-none'}`}
        style={{
          willChange: "filter",
          transition: "filter 0.2s ease-out"
        }}
      >
        <AnimatedRoutes />
      </main>
    </div>
  )
}

// Root component with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App