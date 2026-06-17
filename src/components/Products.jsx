import { useState } from 'react'
import { Star, ShoppingCart, Heart } from 'lucide-react'

const products = [
  { 
    name: 'Velvet Matte Interior', 
    brand: 'ChromaPro', 
    price: 49, 
    old: 65, 
    rating: 4.8, 
    color: 'from-rose-300 to-rose-500', 
    tag: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=500&q=80',
    category: 'Interior'
  },
  { 
    name: 'WeatherShield Exterior', 
    brand: 'DuraCoat', 
    price: 89, 
    old: 110, 
    rating: 4.9, 
    color: 'from-sky-300 to-sky-600', 
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1541535881962-e668f38d4f3f?auto=format&fit=crop&w=500&q=80',
    category: 'Exterior'
  },
  { 
    name: 'Eco Silk Emulsion', 
    brand: 'GreenLeaf', 
    price: 59, 
    old: null, 
    rating: 4.7, 
    color: 'from-emerald-300 to-emerald-600', 
    tag: 'Eco',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=80',
    category: 'Interior'
  },
  { 
    name: 'Royal Gloss Enamel', 
    brand: 'Regal', 
    price: 39, 
    old: 55, 
    rating: 4.6, 
    color: 'from-amber-300 to-orange-500', 
    tag: '-30%',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80',
    category: 'Exterior'
  },
  { 
    name: 'Designer Texture Pro', 
    brand: 'ArtWall', 
    price: 79, 
    old: null, 
    rating: 4.8, 
    color: 'from-fuchsia-300 to-purple-600', 
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80',
    category: 'Interior'
  },
  { 
    name: 'Quick Dry Primer', 
    brand: 'BaseCoat', 
    price: 29, 
    old: 38, 
    rating: 4.5, 
    color: 'from-slate-300 to-slate-500', 
    tag: 'Deal',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=500&q=80',
    category: 'Tools'
  },
  { 
    name: 'Metallic Finish Gold', 
    brand: 'Lumière', 
    price: 99, 
    old: null, 
    rating: 4.9, 
    color: 'from-yellow-300 to-amber-600', 
    tag: 'Luxe',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80',
    category: 'Interior'
  },
  { 
    name: 'Kids Safe Washable', 
    brand: 'PlayPaint', 
    price: 69, 
    old: 85, 
    rating: 4.8, 
    color: 'from-pink-300 to-rose-500', 
    tag: 'Safe',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80',
    category: 'Interior'
  },
]

export default function Products({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (name) => {
    setFavorites(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    )
  }

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="py-16 lg:py-24 bg-slate-50">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold">Trending Products</h2>
            <p className="text-slate-500 mt-2">Picked by designers, loved by homes.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All','Interior','Exterior','Tools'].map((t) => (
              <button 
                key={t} 
                onClick={() => setActiveCategory(t)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === t ? 'bg-brand-600 text-white shadow-soft' : 'bg-white border border-slate-200 hover:border-brand-600 text-slate-700'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(p => (
            <article key={p.name} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-soft transition-all duration-300">
              <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${p.color}`}>
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">{p.tag}</span>
                <button 
                  onClick={() => toggleFavorite(p.name)} 
                  className="absolute top-3 right-3 w-9 h-9 grid place-items-center bg-white/90 rounded-full hover:bg-white shadow-sm transition-transform duration-200 hover:scale-110 active:scale-95"
                >
                  <Heart size={16} className={favorites.includes(p.name) ? 'fill-rose-500 text-rose-500' : 'text-slate-700'}/>
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"/>
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-slate-500">{p.brand}</div>
                <h3 className="font-bold mt-1 line-clamp-1">{p.name}</h3>
                <div className="flex items-center gap-1 mt-2 text-amber-500 text-sm">
                  <Star size={14} fill="currentColor"/> <span className="text-slate-700 font-semibold">{p.rating}</span>
                  <span className="text-slate-400">(120)</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="font-display text-xl font-extrabold text-brand-700">${p.price}</span>
                    {p.old && <span className="ml-2 text-sm text-slate-400 line-through">${p.old}</span>}
                  </div>
                  <button 
                    onClick={onAddToCart}
                    className="w-10 h-10 rounded-full bg-brand-600 text-white grid place-items-center hover:bg-brand-700 transition-transform duration-200 hover:scale-110 active:scale-95 shadow-md"
                  >
                    <ShoppingCart size={16}/>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
