import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
// import About from './pages/About'
// import Contact from './pages/Contact'

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
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
      transition={{ duration: 0.3, ease: "easeInOut" }}
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
  return (
    <div className="App min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-50 relative">
      {/* Global decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-pulse" style={{animationDelay: '2s', animationDuration: '7s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/10 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-pulse" style={{animationDelay: '4s', animationDuration: '8s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(#4ade8011_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
      </div>

      <Header />
      <main className="pt-0">
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
