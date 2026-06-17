import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Categories from './components/Categories.jsx'
import Products from './components/Products.jsx'
import OfferBanner from './components/OfferBanner.jsx'
import Brands from './components/Brands.jsx'
import Reviews from './components/Reviews.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [cartCount, setCartCount] = useState(3)

  const handleAddToCart = () => {
    setCartCount(c => c + 1)
  }

  return (
    <div className="min-h-screen">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <Categories />
        <Products onAddToCart={handleAddToCart} />
        <OfferBanner />
        <Brands />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}
