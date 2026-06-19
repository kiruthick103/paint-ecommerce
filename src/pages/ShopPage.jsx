import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingCart, Heart, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '../data/products.js'

const categoryOptions = ['Interior', 'Exterior', 'Primers', 'Enamel']
const priceRanges = [
  { label: 'Under $50', min: 0, max: 49.99 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80.01, max: Infinity },
]
const finishOptions = ['Matte', 'Silk', 'Gloss', 'Semi-Gloss', 'High Gloss', 'Satin', 'Textured', 'Metallic', 'Chalk', 'Eggshell', 'Flat']
const brandOptions = [...new Set(products.map(p => p.brand))].sort()

export default function ShopPage({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCat = searchParams.get('category')

  const [selectedCategories, setSelectedCategories] = useState(initialCat ? [initialCat] : [])
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedFinishes, setSelectedFinishes] = useState([])
  const [sortBy, setSortBy] = useState('popular')
  const [favorites, setFavorites] = useState([])
  const [mobileFilter, setMobileFilter] = useState(false)

  const toggleArray = (arr, setArr, val) => {
    setArr(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val])
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPrice(null)
    setSelectedBrands([])
    setSelectedFinishes([])
  }

  const hasFilters = selectedCategories.length || selectedPrice !== null || selectedBrands.length || selectedFinishes.length

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length) {
      result = result.filter(p => selectedCategories.includes(p.category))
    }
    if (selectedPrice !== null) {
      const range = priceRanges[selectedPrice]
      result = result.filter(p => p.price >= range.min && p.price <= range.max)
    }
    if (selectedBrands.length) {
      result = result.filter(p => selectedBrands.includes(p.brand))
    }
    if (selectedFinishes.length) {
      result = result.filter(p => selectedFinishes.some(f => p.finish.toLowerCase().includes(f.toLowerCase())))
    }

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break
      case 'price-desc': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => b.rating - a.rating); break
      default: result.sort((a, b) => b.reviews - a.reviews)
    }

    return result
  }, [selectedCategories, selectedPrice, selectedBrands, selectedFinishes, sortBy])

  /* ── Filter sidebar (reusable for desktop & mobile) ── */
  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-3">Category</h4>
        <div className="space-y-2">
          {categoryOptions.map(c => (
            <label key={c} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(c)}
                onChange={() => toggleArray(selectedCategories, setSelectedCategories, c)}
                className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              <span className="text-sm text-slate-700 group-hover:text-brand-600 transition">{c}</span>
              <span className="ml-auto text-xs text-slate-400">{products.filter(p => p.category === c).length}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-3">Price Range</h4>
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((r, i) => (
            <button
              key={r.label}
              onClick={() => setSelectedPrice(selectedPrice === i ? null : i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedPrice === i ? 'bg-brand-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-3">Brand</h4>
        <div className="space-y-2">
          {brandOptions.map(b => (
            <label key={b} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedBrands.includes(b)}
                onChange={() => toggleArray(selectedBrands, setSelectedBrands, b)}
                className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              <span className="text-sm text-slate-700 group-hover:text-brand-600 transition">{b}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Finish */}
      <div>
        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-3">Finish</h4>
        <div className="flex flex-wrap gap-2">
          {finishOptions.map(f => (
            <button
              key={f}
              onClick={() => toggleArray(selectedFinishes, setSelectedFinishes, f)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${selectedFinishes.includes(f) ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasFilters && (
        <button onClick={clearFilters} className="w-full py-2.5 rounded-full border-2 border-brand-600 text-brand-600 font-semibold text-sm hover:bg-brand-50 transition">
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="page-enter">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 lg:py-16">
        <div className="container-x">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">Our Collection</h1>
          <p className="text-slate-400 mt-2 max-w-lg">Explore {products.length} premium paints from top brands. Filter by color, finish, and price.</p>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="container-x">
          <div className="lg:grid lg:grid-cols-[280px_1fr] gap-10">

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <SlidersHorizontal size={18} className="text-brand-600" /> Filters
                </h3>
                <FilterPanel />
              </div>
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6 flex items-center justify-between">
              <button
                onClick={() => setMobileFilter(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 font-semibold text-sm shadow-sm hover:shadow-md transition"
              >
                <SlidersHorizontal size={16} /> Filters {hasFilters ? `(${selectedCategories.length + selectedBrands.length + selectedFinishes.length + (selectedPrice !== null ? 1 : 0)})` : ''}
              </button>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 rounded-full pl-4 pr-10 py-2.5 text-sm font-medium outline-none focus:border-brand-500"
                >
                  <option value="popular">Popular</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="price-desc">Price: High → Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Mobile Filter Drawer */}
            {mobileFilter && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilter(false)} />
                <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Filters</h3>
                    <button onClick={() => setMobileFilter(false)} className="w-9 h-9 grid place-items-center rounded-full hover:bg-slate-100">
                      <X size={20} />
                    </button>
                  </div>
                  <FilterPanel />
                </div>
              </div>
            )}

            {/* Main Content */}
            <div>
              {/* Top bar */}
              <div className="hidden lg:flex items-center justify-between mb-8">
                <p className="text-slate-500 text-sm">
                  Showing <span className="font-bold text-slate-800">{filtered.length}</span> of {products.length} products
                </p>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-slate-200 rounded-full pl-4 pr-10 py-2.5 text-sm font-medium outline-none focus:border-brand-500 cursor-pointer"
                  >
                    <option value="popular">Popular</option>
                    <option value="price-asc">Price: Low → High</option>
                    <option value="price-desc">Price: High → Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Product Grid */}
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold mb-2">No products found</h3>
                  <p className="text-slate-500 mb-6">Try adjusting your filters.</p>
                  <button onClick={clearFilters} className="btn-primary">Clear Filters</button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map(p => (
                    <article key={p.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-soft transition-all duration-300">
                      <Link to={`/product/${p.id}`} className="block">
                        <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${p.color}`}>
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">{p.tag}</span>
                          <button
                            onClick={(e) => { e.preventDefault(); toggleArray(favorites, setFavorites, p.id) }}
                            className="absolute top-3 right-3 w-9 h-9 grid place-items-center bg-white/90 rounded-full hover:bg-white shadow-sm transition-transform duration-200 hover:scale-110 active:scale-95"
                          >
                            <Heart size={16} className={favorites.includes(p.id) ? 'fill-rose-500 text-rose-500' : 'text-slate-700'} />
                          </button>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                        </div>
                      </Link>
                      <div className="p-5">
                        <div className="text-xs uppercase tracking-wider text-slate-500">{p.brand}</div>
                        <Link to={`/product/${p.id}`}>
                          <h3 className="font-bold mt-1 line-clamp-1 hover:text-brand-600 transition">{p.name}</h3>
                        </Link>
                        <div className="flex items-center gap-1 mt-2 text-amber-500 text-sm">
                          <Star size={14} fill="currentColor" /> <span className="text-slate-700 font-semibold">{p.rating}</span>
                          <span className="text-slate-400">({p.reviews})</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div>
                            <span className="font-display text-xl font-extrabold text-brand-700">${p.price}</span>
                            {p.old && <span className="ml-2 text-sm text-slate-400 line-through">${p.old}</span>}
                          </div>
                          <button
                            onClick={() => onAddToCart && onAddToCart(p)}
                            className="w-10 h-10 rounded-full bg-brand-600 text-white grid place-items-center hover:bg-brand-700 transition-transform duration-200 hover:scale-110 active:scale-95 shadow-md"
                            title="Add to Cart"
                          >
                            <ShoppingCart size={16} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
