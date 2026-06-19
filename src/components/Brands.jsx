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
  <div className="group flex-shrink-0 w-44 lg:w-52">
    <div className="flex flex-col items-center gap-3 px-6 py-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-pointer">
      {/* Initial Badge */}
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${brand.gradient} flex items-center justify-center shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
      >
        <span className="text-white text-lg font-bold">{brand.initials}</span>
      </div>
      <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300">
        {brand.name}
      </span>
    </div>
  </div>
);

const Brands = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-950 overflow-hidden">
      <div className="container-x mb-12">
        <div className="text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-brand-400" />
            <p className="section-subtitle !mb-0">Official Partners</p>
          </div>
          <h2 className="section-title">Trusted by Top Brands</h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            We partner with the world's most trusted paint manufacturers to bring you authentic, premium quality products.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

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
