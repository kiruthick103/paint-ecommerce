import React from 'react';
import { Award } from 'lucide-react';

const brands = [
  { name: 'Asian Paints', initials: 'AP', gradient: 'from-red-500 to-orange-500' },
  { name: 'Berger', initials: 'BG', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Nerolac', initials: 'NR', gradient: 'from-emerald-500 to-teal-500' },
  { name: 'Dulux', initials: 'DX', gradient: 'from-violet-500 to-purple-500' },
  { name: 'Sherwin', initials: 'SW', gradient: 'from-amber-500 to-yellow-500' },
  { name: 'Behr', initials: 'BH', gradient: 'from-pink-500 to-rose-500' },
  { name: 'Benjamin', initials: 'BM', gradient: 'from-indigo-500 to-blue-500' },
  { name: 'Jotun', initials: 'JT', gradient: 'from-lime-500 to-green-500' },
];

const BrandCard = ({ brand }) => (
  <div className="group flex-shrink-0 w-44 lg:w-52 px-2">
    <div className="flex flex-col items-center gap-3 px-6 py-6 rounded-2xl bg-white border border-slate-100/80 shadow-sm hover:shadow-md hover:border-slate-200 hover:bg-slate-50/50 transition-all duration-300 cursor-pointer">
      {/* Initial Badge */}
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${brand.gradient} flex items-center justify-center shadow-sm opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300`}
      >
        <span className="text-white text-base font-bold">{brand.initials}</span>
      </div>
      <span className="text-sm font-semibold text-slate-500 group-hover:text-slate-800 transition-colors duration-300">
        {brand.name}
      </span>
    </div>
  </div>
);

const Brands = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50/30 border-b border-slate-100 overflow-hidden">
      <div className="container-x mb-12">
        <div className="text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-3 bg-brand-50 border border-brand-100/50 px-3 py-1.5 rounded-full">
            <Award className="w-4.5 h-4.5 text-brand-600" />
            <p className="text-xs font-bold text-brand-700 uppercase tracking-wider">Official Partners</p>
          </div>
          <h2 className="section-title text-slate-900">Trusted by Top Brands</h2>
          <p className="text-slate-505 text-slate-500 mt-2 max-w-lg mx-auto">
            We partner with the world's most trusted paint manufacturers to bring you authentic, premium quality products.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="flex animate-marquee mb-4">
          {[...brands, ...brands].map((brand, i) => (
            <BrandCard key={`a-${i}`} brand={brand} />
          ))}
        </div>

        {/* Row 2 - reverse */}
        <div className="flex animate-marquee" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
          {[...brands, ...brands].map((brand, i) => (
            <BrandCard key={`b-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
