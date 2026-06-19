import React from 'react';
import { Palette, Package, ShoppingCart, Home } from 'lucide-react';

const steps = [
  {
    num: 1,
    title: 'Browse Colors',
    desc: 'Explore our curated palette of 2,000+ premium shades. Use our AI tool to find your perfect match.',
    Icon: Palette,
    accent: 'from-brand-500 to-brand-600',
    iconBg: 'bg-brand-50 text-brand-600',
  },
  {
    num: 2,
    title: 'Order Samples',
    desc: 'Get peel-and-stick samples delivered to your door. See true colors in your own lighting.',
    Icon: Package,
    accent: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-50 text-amber-600',
  },
  {
    num: 3,
    title: 'Choose & Order',
    desc: 'Pick your finish, quantity, and checkout in minutes. Free shipping on orders over $50.',
    Icon: ShoppingCart,
    accent: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
  {
    num: 4,
    title: 'Transform Your Space',
    desc: 'Enjoy a beautifully painted space with lasting, vibrant color that stands the test of time.',
    Icon: Home,
    accent: 'from-violet-500 to-purple-500',
    iconBg: 'bg-violet-50 text-violet-600',
  },
];

const HowItWorks = () => (
  <section className="py-24 bg-slate-50 overflow-hidden">
    <div className="container-x">
      {/* ── Header ─────────────────────────── */}
      <div className="text-center mb-20 animate-fade-up">
        <span className="inline-block text-sm font-semibold tracking-wider uppercase text-brand-600 mb-4">
          Simple Process
        </span>
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          From inspiration to transformation in 4 simple steps.
        </p>
      </div>

      {/* ── Steps grid ─────────────────────── */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {/* ── Connecting line (desktop only) ── */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-0.5"
        >
          <div className="w-full h-full bg-gradient-to-r from-brand-300 via-amber-300 via-emerald-300 to-violet-300 opacity-50 rounded-full" />
          {/* Dots */}
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-slate-300"
              style={{ left: `${33.33 * (i + 1)}%`, transform: 'translate(-50%, -50%)' }}
            />
          ))}
        </div>

        {steps.map(({ num, title, desc, Icon, accent, iconBg }, idx) => (
          <div
            key={num}
            className="group relative bg-white rounded-3xl p-8 pt-10 text-center shadow-sm border border-slate-100
                       hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-up"
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            {/* Number badge */}
            <div className="mx-auto mb-6 relative w-[88px] h-[88px]">
              {/* Gradient ring */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${accent} opacity-20 group-hover:opacity-30 transition-opacity`} />
              <div className="absolute inset-[3px] rounded-full bg-white flex items-center justify-center">
                <span className={`text-3xl font-extrabold bg-gradient-to-br ${accent} bg-clip-text text-transparent`}>
                  {num}
                </span>
              </div>
            </div>

            {/* Icon */}
            <div className={`mx-auto w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6" />
            </div>

            {/* Text */}
            <h3 className="text-lg font-bold text-slate-800 mb-3">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>

            {/* Bottom accent bar */}
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-16 rounded-full bg-gradient-to-r ${accent} transition-all duration-500`} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
