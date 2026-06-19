import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Heart, ShoppingBag, Check, Plus, Minus, ArrowLeft, Shield, Clock, Sparkles } from 'lucide-react'
import { products } from '../data/products.js'

export default function ProductDetailPage({ onAddToCart }) {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const [quantity, setQuantity] = useState(1)
  const [isWishlist, setIsWishlist] = useState(false)
  const [activeTab, setActiveTab] = useState('description')

  useEffect(() => {
    window.scrollTo(0, 0)
    setQuantity(1)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 page-enter bg-slate-950 text-white">
        <div className="text-6xl mb-4">🎨</div>
        <h2 className="text-2xl font-extrabold text-white mb-2">Product Not Found</h2>
        <p className="text-slate-400 mb-6 font-medium">The paint color or product you are looking for doesn't exist or has been discontinued.</p>
        <Link to="/shop" className="btn-primary">
          <ArrowLeft size={18} /> Back to Shop
        </Link>
      </div>
    )
  }

  // Find related products (same category, excluding current product, limit to 4)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1)
  }

  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const handleAddToCartClick = () => {
    if (onAddToCart) {
      for (let i = 0; i < quantity; i++) {
        onAddToCart(product)
      }
    }
  }

  return (
    <div className="page-enter bg-slate-50 min-h-screen py-8 lg:py-12">
      <div className="container-x">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-brand-600 transition">Home</Link>
          <span className="text-slate-300">/</span>
          <Link to="/shop" className="hover:text-brand-600 transition">Shop</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-400 font-medium hover:text-slate-600 transition">{product.category}</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800 font-semibold truncate">{product.name}</span>
        </nav>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-100 mb-16">
          
          {/* Left Column: Image and Swatches */}
          <div className="space-y-6">
            <div className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${product.color} flex items-center justify-center p-8 group shadow-inner`}>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
              {product.tag && (
                <span className="absolute top-4 left-4 bg-brand-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Visualizer and consultation prompt */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5 flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-full border-2 border-white shadow-md flex-shrink-0"
                style={{ backgroundColor: product.hex }}
              />
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Hex Value: {product.hex}</h4>
                <p className="text-xs text-slate-500">Color Match Name: {product.name} ({product.brand})</p>
              </div>
              <Link to="/contact" className="ml-auto text-xs font-bold text-brand-600 hover:text-brand-700 transition whitespace-nowrap bg-brand-50 hover:bg-brand-100 px-3.5 py-2 rounded-full">
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Right Column: Info & Options */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Brand and category */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-2.5 py-1 rounded">
                  {product.brand}
                </span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                  {product.category} Paint
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-1">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        className={i < Math.floor(product.rating) ? "text-amber-500" : "text-slate-300"}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-slate-800 ml-1.5">{product.rating}</span>
                </div>
                <span className="text-slate-300">|</span>
                <span className="text-sm text-slate-500 font-medium">{product.reviews} Customer Reviews</span>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl sm:text-4xl font-extrabold text-brand-700">${product.price}</span>
                {product.old && (
                  <span className="text-lg text-slate-400 line-through">${product.old}</span>
                )}
                <span className="text-xs text-emerald-600 font-bold ml-2 bg-emerald-50 px-2 py-0.5 rounded">
                  In Stock & Ready to Ship
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
                <div className="text-center">
                  <span className="block text-xs font-semibold text-slate-400 uppercase">Finish</span>
                  <span className="font-bold text-slate-800 text-sm">{product.finish}</span>
                </div>
                <div className="text-center border-x border-slate-200">
                  <span className="block text-xs font-semibold text-slate-400 uppercase">Coverage</span>
                  <span className="font-bold text-slate-800 text-sm">{product.coverage}</span>
                </div>
                <div className="text-center">
                  <span className="block text-xs font-semibold text-slate-400 uppercase">Dry Time</span>
                  <span className="font-bold text-slate-800 text-sm">{product.dryTime}</span>
                </div>
              </div>

              {/* Features check-list */}
              <div className="mb-8">
                <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-3">Key Benefits</h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-600 text-sm">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center justify-between border border-slate-200 rounded-full p-1 bg-white sm:w-36">
                  <button 
                    onClick={handleDecreaseQuantity}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition active:scale-90"
                    title="Decrease Quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-bold text-slate-800 text-base">{quantity}</span>
                  <button 
                    onClick={handleIncreaseQuantity}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition active:scale-90"
                    title="Increase Quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Add to Cart */}
                <button 
                  onClick={handleAddToCartClick}
                  className="flex-1 btn-primary py-3.5 px-8 font-bold justify-center"
                >
                  <ShoppingBag size={18} /> Add {quantity} to Cart
                </button>

                {/* Wishlist */}
                <button 
                  onClick={() => setIsWishlist(!isWishlist)}
                  className={`w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isWishlist 
                      ? 'bg-rose-50 border-rose-200 text-rose-500' 
                      : 'border-slate-200 hover:bg-slate-50 text-slate-500'
                  }`}
                  title={isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                >
                  <Heart size={20} className={isWishlist ? "fill-rose-500" : ""} />
                </button>
              </div>

              {/* Brand guarantees */}
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="flex flex-col items-center gap-1">
                  <Shield size={16} className="text-slate-400" />
                  <span className="text-[10px] font-medium text-slate-500">100% Original Brand</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-x border-slate-200">
                  <Clock size={16} className="text-slate-400" />
                  <span className="text-[10px] font-medium text-slate-500">Fast Local Delivery</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Sparkles size={16} className="text-slate-400" />
                  <span className="text-[10px] font-medium text-slate-500">Premium Quality</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Tabs for Info */}
        <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm mb-16">
          <div className="flex border-b border-slate-100 mb-6">
            <button 
              onClick={() => setActiveTab('description')}
              className={`pb-4 px-2 font-bold text-sm tracking-wider uppercase border-b-2 transition-all ${
                activeTab === 'description' ? 'border-brand-600 text-brand-600' : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Description & Specifications
            </button>
            <button 
              onClick={() => setActiveTab('application')}
              className={`pb-4 px-2 font-bold text-sm tracking-wider uppercase border-b-2 ml-8 transition-all ${
                activeTab === 'application' ? 'border-brand-600 text-brand-600' : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Application Guide
            </button>
          </div>
          
          {activeTab === 'description' && (
            <div className="space-y-6 animate-fade-in text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                Our <strong>{product.name}</strong> from <strong>{product.brand}</strong> represents the finest choice for your paint projects. Specially engineered to offer consistent flow, high coverage, and a long-lasting aesthetic appeal, it incorporates advanced color lock technology that keeps colors looking fresh and vibrant for years.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="font-bold text-slate-800 mb-3">Product Specifications</h4>
                  <table className="w-full border-collapse text-left">
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-2.5 font-medium text-slate-400 w-1/3">Finish</td>
                        <td className="py-2.5 font-bold text-slate-700">{product.finish}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2.5 font-medium text-slate-400">Coverage</td>
                        <td className="py-2.5 font-bold text-slate-700">{product.coverage}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2.5 font-medium text-slate-400">Drying Time</td>
                        <td className="py-2.5 font-bold text-slate-700">{product.dryTime}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2.5 font-medium text-slate-400">VOC Content</td>
                        <td className="py-2.5 font-bold text-emerald-600">Low/Zero VOC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-3">Recommended Use Cases</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Perfect for {product.category.toLowerCase()} painting jobs.</li>
                    <li>Highly recommended for residential properties, high-quality renovations, and corporate spaces.</li>
                    <li>Best results when applied over high-quality primers (dry time 30 mins to 2 hours).</li>
                    <li>Easy cleanup with soap and warm water.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'application' && (
            <div className="space-y-6 animate-fade-in text-slate-600 text-sm md:text-base leading-relaxed">
              <h4 className="font-bold text-slate-800">Step-by-Step Application Guide</h4>
              <ol className="space-y-4 list-decimal list-inside">
                <li>
                  <strong className="text-slate-800">Surface Preparation:</strong> Ensure the wall surface is clean, dry, and free of dust, grease, or peeling paint. Fill any cracks or holes with appropriate filler.
                </li>
                <li>
                  <strong className="text-slate-800">Priming:</strong> Apply a single coat of primer (such as our Quick Dry Primer) to establish adhesion and color consistency. Let it dry completely.
                </li>
                <li>
                  <strong className="text-slate-800">First Coat:</strong> Stir {product.name} thoroughly. Apply using a high-quality synthetic brush or roller. Allow it to dry for {product.dryTime}.
                </li>
                <li>
                  <strong className="text-slate-800">Second Coat:</strong> Apply the second coat for optimal opacity, color depth, and finish protection. Let it cure fully before placing objects against it.
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-600 font-bold">Related Paints</p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Customers Also Viewed</h2>
              </div>
              <Link to="/shop" className="text-sm font-bold text-brand-600 hover:text-brand-700 hover:underline transition">
                View All Collection
              </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <article key={p.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-soft transition-all duration-300">
                  <Link to={`/product/${p.id}`} className="block">
                    <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${p.color}`}>
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      {p.tag && (
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">{p.tag}</span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                    </div>
                  </Link>
                  <div className="p-5">
                    <div className="text-xs uppercase tracking-wider text-slate-500">{p.brand}</div>
                    <Link to={`/product/${p.id}`}>
                      <h3 className="font-bold mt-1 line-clamp-1 hover:text-brand-600 transition text-slate-800">{p.name}</h3>
                    </Link>
                    <div className="flex items-center gap-1 mt-2 text-amber-500 text-sm">
                      <Star size={14} fill="currentColor" /> <span className="text-slate-700 font-semibold">{p.rating}</span>
                      <span className="text-slate-400">({p.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-display text-xl font-extrabold text-brand-700">${p.price}</span>
                      <button
                        onClick={() => onAddToCart && onAddToCart(p)}
                        className="w-10 h-10 rounded-full bg-brand-600 text-white grid place-items-center hover:bg-brand-700 transition-transform duration-200 hover:scale-110 active:scale-95 shadow-md"
                      >
                        <ShoppingBag size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
