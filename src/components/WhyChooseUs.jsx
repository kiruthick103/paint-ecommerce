import React from 'react';
import { Leaf, Truck, Palette, Headphones, RotateCcw, Award } from 'lucide-react';

const features = [
  {
    title: 'Eco-Friendly',
    desc: 'Zero VOC, plant-based formulas that are safe for your family and the planet.',
    Icon: Leaf,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    ring: 'group-hover:ring-emerald-200',
  },
  {
    title: 'Fast Delivery',
    desc: 'Free shipping on orders over $50. Most orders arrive within 2–4 business days.',
    Icon: Truck,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    ring: 'group-hover:ring-blue-200',
  },
  {
    title: 'Color Matching',
    desc: 'AI-powered color matching technology to find the exact shade you envision.',
    Icon: Palette,
    color: 'text-brand-600',
    bg: 'bg-brand-50',
    ring: 'group-hover:ring-brand-200',
  },
  {
    title: 'Expert Support',
    desc: '24/7 color consultation experts ready to guide you through every choice.',
    Icon: Headphones,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    ring: 'group-hover:ring-violet-200',
  },
  {
    title: 'Easy Returns',
    desc: '30-day hassle-free returns — love your color or send it back, no questions asked.',
    Icon: RotateCcw,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    ring: 'group-hover:ring-amber-200',
  },
  {
    title: 'Premium Quality',
    desc: '10-year durability guarantee. Fade-resistant, washable, and built to last.',
    Icon: Award,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    ring: 'group-hover:ring-rose-200',
  },
];

const WhyChooseUs = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container-x">
      {/* ── Header ─────────────────────────── */}
      <div className="text-center mb-16 animate-fade-up">
        <span className="inline-block text-sm font-semibold tracking-wider uppercase text-brand-600 mb-4">
          Our Advantages
        </span>
        <h2 className="section-title">Why Choose ChromaHaus</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          We go beyond just selling paint.
        </p>
      </div>

      {/* ── Feature grid ───────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {features.map(({ title, desc, Icon, color, bg, ring }, idx) => (
          <div
            key={title}
            className={`group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-100
                        ring-2 ring-transparent ${ring}
                        hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-fade-up`}
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            {/* Icon circle */}
            <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className={`w-7 h-7 ${color}`} />
            </div>

            <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>

            {/* Decorative corner glow */}
            <div
              className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full ${bg} opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 pointer-events-none`}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
