import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingBag, ArrowRight, Eye } from 'lucide-react';
import { products } from '../data/products';

const filterTabs = ['All', 'Interior', 'Exterior', 'Primers', 'Enamel'];

const Products = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const filtered =
    activeTab === 'All'
      ? products.slice(0, 8)
      : products.filter((p) => p.category === activeTab).slice(0, 8);

  return (
    <section className="py-16 lg:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 animate-fade-up">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-600 font-bold mb-2">Curated Selection</p>
            <h2 className="section-title text-slate-900">Trending Paint Shades</h2>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 border border-slate-200/50 rounded-full p-1 overflow-x-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="group relative bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 card-hover animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-slate-50">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-all duration-300" />

                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-brand-600 text-white text-[10px] font-bold rounded-full shadow-sm">
                    {product.tag}
                  </span>
                )}

                {/* Heart */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-sm hover:scale-110 active:scale-95 transition-all duration-200"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      favorites.has(product.id) ? 'fill-rose-500 text-rose-500' : 'text-slate-700'
                    }`}
                  />
                </button>

                {/* Quick View */}
                <Link
                  to={`/product/${product.id}`}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900/90 text-white text-xs font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-slate-900 shadow-lg"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Quick View
                </Link>

                {/* Color Swatch */}
                {product.hex && (
                  <div
                    className="absolute bottom-3 right-3 w-6 h-6 rounded-full border-2 border-white/80 shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: product.hex }}
                    title={product.color}
                  />
                )}
              </div>

              {/* Info */}
              <div className="p-5 space-y-2">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  {product.brand}
                </p>

                <Link
                  to={`/product/${product.id}`}
                  className="block text-sm sm:text-base font-bold text-slate-850 hover:text-brand-600 transition-colors line-clamp-1"
                >
                  {product.name}
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-3.5 h-3.5 ${
                          j < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-slate-200 text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">({product.reviews})</span>
                </div>

                {/* Price + Cart */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-extrabold text-slate-800">${product.price}</span>
                    {product.old && (
                      <span className="text-xs text-slate-400 line-through">${product.old}</span>
                    )}
                  </div>
                  <button
                    onClick={() => onAddToCart && onAddToCart(product)}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-50 text-brand-600 hover:bg-brand-600 hover:text-white transition-all duration-300 shadow-sm"
                    title="Add to Cart"
                  >
                    <ShoppingBag className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12 animate-fade-up">
          <Link
            to="/shop"
            className="btn-ghost inline-flex items-center gap-2 group bg-white border-slate-200 hover:border-brand-600"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
