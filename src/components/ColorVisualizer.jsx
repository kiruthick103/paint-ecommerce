import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Paintbrush, ChevronRight, Sparkles } from 'lucide-react';

const colors = [
  { name: 'Sunset Coral',    hex: '#FF6F61' },
  { name: 'Ocean Blue',      hex: '#0077B6' },
  { name: 'Forest Green',    hex: '#2D6A4F' },
  { name: 'Lavender Dream',  hex: '#B39DDB' },
  { name: 'Warm Sand',       hex: '#D4A373' },
  { name: 'Midnight Navy',   hex: '#1B263B' },
  { name: 'Cherry Blossom',  hex: '#F4A7BB' },
  { name: 'Arctic White',    hex: '#F0F4F8' },
  { name: 'Golden Hour',     hex: '#E6A817' },
  { name: 'Dusty Rose',      hex: '#C9848A' },
];

const ColorVisualizer = () => {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-x">
        {/* ── Header ─────────────────────────────── */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-brand-600 mb-4">
            <Sparkles className="w-4 h-4" />
            Color Preview Tool
          </span>
          <h2 className="section-title">Visualize Your Space</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            See how colors look in real rooms before you buy.
          </p>
        </div>

        {/* ── Main grid ──────────────────────────── */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Room preview – spans 3 cols */}
          <div className="lg:col-span-3 relative group rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
            {/* Base room image */}
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
              alt="Modern living room"
              className="w-full h-[420px] sm:h-[500px] object-cover"
            />

            {/* Color overlay */}
            <div
              className="absolute inset-0 transition-colors duration-700 ease-in-out mix-blend-multiply"
              style={{ backgroundColor: selected.hex + '55' }}
            />

            {/* Gradient vignette for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Glass info card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:min-w-[300px] glass rounded-2xl p-5 flex items-center gap-4 animate-fade-up">
              <div
                className="w-14 h-14 rounded-xl shadow-lg border-2 border-white/50 flex-shrink-0 transition-colors duration-500"
                style={{ backgroundColor: selected.hex }}
              />
              <div>
                <p className="text-white font-bold text-lg leading-tight">{selected.name}</p>
                <p className="text-white/70 text-sm font-mono uppercase tracking-wide">{selected.hex}</p>
              </div>
            </div>

            {/* Corner badge */}
            <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-lg">
              Live Preview
            </div>
          </div>

          {/* ── Sidebar: palette + CTA – spans 2 cols ── */}
          <div className="lg:col-span-2 flex flex-col gap-8 animate-fade-up">
            {/* Palette card */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <div className="flex items-center gap-2 mb-6">
                <Paintbrush className="w-5 h-5 text-brand-600" />
                <h3 className="text-lg font-bold text-slate-800">Pick a Color</h3>
              </div>

              <div className="grid grid-cols-5 gap-3">
                {colors.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setSelected(c)}
                    className="group/swatch relative"
                    aria-label={c.name}
                  >
                    <span
                      className={`block w-full aspect-square rounded-xl shadow-md transition-all duration-300
                        ${selected.hex === c.hex
                          ? 'ring-[3px] ring-brand-500 ring-offset-2 scale-110'
                          : 'hover:scale-110 hover:shadow-lg'
                        }`}
                      style={{ backgroundColor: c.hex }}
                    />
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-medium px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover/swatch:opacity-100 transition-opacity pointer-events-none z-10">
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selected color detail */}
              <div className="mt-6 flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-200">
                <div
                  className="w-10 h-10 rounded-lg shadow-inner flex-shrink-0 transition-colors duration-500"
                  style={{ backgroundColor: selected.hex }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 truncate">{selected.name}</p>
                  <p className="text-xs text-slate-400 font-mono">{selected.hex}</p>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-500 bg-brand-50 px-2 py-1 rounded-full">
                  Selected
                </span>
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <h3 className="text-xl font-bold mb-2 relative z-10">Need Help Choosing?</h3>
              <p className="text-white/80 text-sm mb-6 relative z-10">
                Our color experts will help you find the perfect shade for every room.
              </p>
              <Link
                to="/contact"
                className="btn-white inline-flex items-center gap-2 relative z-10 text-brand-700 font-semibold"
              >
                Get Free Color Consultation
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorVisualizer;
