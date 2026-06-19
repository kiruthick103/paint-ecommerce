import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Droplets, Sparkles, Brush, Wrench, ArrowUpRight } from 'lucide-react';

const categories = [
  {
    label: 'Interior',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=500&h=600&fit=crop',
    desc: 'Premium wall finishes',
    count: '320+ shades',
  },
  {
    label: 'Exterior',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=600&fit=crop',
    desc: 'Weather-proof coatings',
    count: '180+ shades',
  },
  {
    label: 'Primers',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=600&fit=crop',
    desc: 'Surface preparation',
    count: '45+ variants',
  },
  {
    label: 'Enamel',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=600&fit=crop',
    desc: 'High-gloss finishes',
    count: '120+ shades',
  },
  {
    label: 'Brushes',
    icon: Brush,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=600&fit=crop',
    desc: 'Professional grade',
    count: '80+ types',
  },
  {
    label: 'Tools',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=500&h=600&fit=crop',
    desc: 'Rollers & accessories',
    count: '150+ items',
  },
];

const Categories = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-950">
      <div className="container-x">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-up">
          <p className="section-subtitle">Browse Collection</p>
          <h2 className="section-title">Shop by Category</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            From interior elegance to exterior durability — find everything you need for your next project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.label}
                to={`/shop?category=${cat.label}`}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] card-hover animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Image */}
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-4 lg:p-5">
                  <div className="mb-3 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-brand-500/20 group-hover:border-brand-500/30 transition-all duration-300">
                    <Icon className="w-5 h-5 text-white group-hover:text-brand-400 transition-colors" />
                  </div>
                  <h3 className="text-white font-semibold text-sm lg:text-base">{cat.label}</h3>
                  <p className="text-slate-400 text-xs mt-0.5">{cat.desc}</p>
                  <p className="text-brand-400 text-xs font-medium mt-1">{cat.count}</p>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/10 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
