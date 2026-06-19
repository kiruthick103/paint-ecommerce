import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const shades = [
  { name: 'Crimson Dream', hex: '#DC2626', bg: 'from-red-50/50 via-white to-slate-50/30' },
  { name: 'Ocean Teal', hex: '#0D9488', bg: 'from-teal-50/50 via-white to-slate-50/30' },
  { name: 'Royal Indigo', hex: '#6366F1', bg: 'from-indigo-50/50 via-white to-slate-50/30' },
  { name: 'Sunset Amber', hex: '#F59E0B', bg: 'from-amber-50/50 via-white to-slate-50/30' },
  { name: 'Rose Blush', hex: '#EC4899', bg: 'from-pink-50/50 via-white to-slate-50/30' },
];

const stats = [
  { value: '1.2k+', label: 'Shades' },
  { value: '250+', label: 'Brands' },
  { value: '50k+', label: 'Happy Homes' },
];

const images = [
  {
    src: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=400&h=400&fit=crop',
    alt: 'Paint rollers',
  },
  {
    src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop',
    alt: 'Paint brushes',
  },
  {
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    alt: 'Painted wall interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop',
    alt: 'Color swatches',
  },
];

const Hero = () => {
  const [activeShade, setActiveShade] = useState(0);

  return (
    <section
      className={`relative min-h-[85vh] flex items-center overflow-hidden transition-all duration-700 bg-gradient-to-br ${shades[activeShade].bg} border-b border-slate-100`}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 -left-32 w-96 h-96 rounded-full blur-3xl opacity-15 transition-colors duration-700"
          style={{ backgroundColor: shades[activeShade].hex }}
        />
        <div
          className="absolute bottom-20 -right-32 w-80 h-80 rounded-full blur-3xl opacity-10 transition-colors duration-700"
          style={{ backgroundColor: shades[activeShade].hex }}
        />
      </div>

      <div className="container-x relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100/50">
              <Sparkles className="w-4 h-4 text-brand-600 animate-pulse" />
              <span className="text-sm font-semibold text-brand-700">New Season Collection 2026</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Color Your
              <br />
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r transition-all duration-700"
                style={{
                  backgroundImage: `linear-gradient(to right, ${shades[activeShade].hex}, #EC4899, ${shades[activeShade].hex})`,
                }}
              >
                World
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 max-w-lg leading-relaxed">
              Discover premium paints, curated palettes, and designer finishes that transform
              every space into a masterpiece. Find your perfect shade today.
            </p>

            {/* Shade Tester */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Interactive Swatch Tester
              </p>
              <div className="flex items-center gap-3">
                {shades.map((shade, i) => (
                  <button
                    key={shade.name}
                    onClick={() => setActiveShade(i)}
                    className={`group relative w-9 h-9 rounded-full transition-all duration-300 ${
                      activeShade === i
                        ? 'scale-125 ring-2 ring-brand-500 ring-offset-2 ring-offset-white shadow-md'
                        : 'hover:scale-110 shadow-sm'
                    }`}
                    style={{ backgroundColor: shade.hex }}
                    title={shade.name}
                  >
                    {activeShade === i && (
                      <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ backgroundColor: shade.hex }} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/shop"
                className="btn-ghost inline-flex items-center gap-2 bg-white hover:bg-slate-50 border-slate-200"
              >
                Explore Colors
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4 border-t border-slate-100/80">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl sm:text-2xl font-extrabold text-slate-800">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-slate-400 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="relative animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-3xl overflow-hidden group shadow-sm border border-slate-100 ${
                    i === 1 ? 'mt-8' : i === 3 ? 'mt-8' : ''
                  } ${i === 0 || i === 3 ? 'aspect-[3/4]' : 'aspect-square'}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                </div>
              ))}
            </div>

            {/* Floating Badge */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur px-5 py-3 rounded-2xl flex items-center gap-3 shadow-xl border border-slate-200/60 transition-all duration-500"
            >
              <div
                className="w-7 h-7 rounded-lg shadow-sm transition-colors duration-500 flex-shrink-0"
                style={{ backgroundColor: shades[activeShade].hex }}
              />
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Active Swatch</p>
                <p className="text-xs sm:text-sm font-bold text-slate-800">{shades[activeShade].name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
