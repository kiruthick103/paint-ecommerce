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
    <section className="py-20 lg:py-28 bg-slate-950">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 animate-fade-up">
          <div>
            <p className="section-subtitle">Curated Selection</p>
            <h2 className="section-title">Trending Paints</h2>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full p-1 overflow-x-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                    : 'text-slate-400 hover:text-white'
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
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden card-hover animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-slate-900">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all duration-300" />

                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-brand-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-lg shadow-lg">
                    {product.tag}
                  </span>
                )}

                {/* Heart */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-slate-950/50 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-slate-950/70"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      favorites.has(product.id) ? 'fill-pink-500 text-pink-500' : 'text-white'
                    }`}
                  />
                </button>

                {/* Quick View */}
                <Link
                  to={`/product/${product.id}`}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Quick View
                </Link>

                {/* Color Swatch */}
                {product.hex && (
                  <div
                    className="absolute bottom-3 right-3 w-6 h-6 rounded-full border-2 border-white/30 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: product.hex }}
                    title={product.color}
                  />
                )}
              </div>

              {/* Info */}
              <div className="p-4 space-y-2">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                  {product.brand}
                </p>

                <Link
                  to={`/product/${product.id}`}
                  className="block text-sm font-semibold text-white hover:text-brand-400 transition-colors line-clamp-1"
                >
                  {product.name}
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-3 h-3 ${
                          j < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-slate-700 text-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">({product.reviews})</span>
                </div>

                {/* Price + Cart */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white">${product.price}</span>
                    {product.old && (
                      <span className="text-xs text-slate-500 line-through">${product.old}</span>
                    )}
                  </div>
                  <button
                    onClick={() => onAddToCart && onAddToCart(product)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-500/10 text-brand-400 hover:bg-brand-500 hover:text-white transition-all duration-300"
                    title="Add to Cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
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
            className="btn-ghost inline-flex items-center gap-2 group"
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
