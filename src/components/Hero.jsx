import { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const shades = [
  { name: 'Sunset Coral', gradient: 'from-orange-500 to-rose-500', bgClass: 'from-orange-50 via-rose-50 to-amber-50', brandText: 'text-orange-600', ringColor: 'ring-orange-500' },
  { name: 'Ocean Breeze', gradient: 'from-sky-500 to-blue-600', bgClass: 'from-sky-50 via-blue-50 to-indigo-50', brandText: 'text-blue-600', ringColor: 'ring-blue-500' },
  { name: 'Forest Moss', gradient: 'from-emerald-500 to-teal-600', bgClass: 'from-emerald-50 via-teal-50 to-slate-50', brandText: 'text-teal-600', ringColor: 'ring-teal-500' },
  { name: 'Lemon Zest', gradient: 'from-amber-400 to-yellow-500', bgClass: 'from-amber-50 via-yellow-50 to-orange-50', brandText: 'text-amber-600', ringColor: 'ring-amber-500' },
  { name: 'Orchid Bloom', gradient: 'from-fuchsia-500 to-purple-600', bgClass: 'from-fuchsia-50 via-purple-50 to-pink-50', brandText: 'text-purple-600', ringColor: 'ring-purple-500' },
]

export default function Hero() {
  const [activeShade, setActiveShade] = useState(shades[0])

  return (
    <section className={`relative overflow-hidden transition-all duration-700 bg-gradient-to-br ${activeShade.bgClass}`}>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-brand-500 to-pink-500 opacity-20 blur-3xl"/>
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300 to-rose-400 opacity-20 blur-3xl"/>
      <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-brand-700 shadow-soft">
            <Sparkles size={16}/> New Season Collection 2026
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Color Your World <br/>
            <span className={`bg-gradient-to-r ${activeShade.gradient} bg-clip-text text-transparent transition-all duration-500`}>
              {activeShade.name === 'Sunset Coral' ? 'Beautifully.' : activeShade.name + '.'}
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-lg">
            Discover designer-grade paints, eco-friendly finishes, and pro tools — delivered to your doorstep with free color matching.
          </p>

          {/* Color Switcher Widget */}
          <div className="mt-6 p-4 rounded-2xl bg-white/40 backdrop-blur border border-white/50 max-w-xs transition-all duration-500">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-2">Live Shade Tester</div>
            <div className="flex gap-2">
              {shades.map(s => (
                <button
                  key={s.name}
                  onClick={() => setActiveShade(s)}
                  title={s.name}
                  className={`w-7 h-7 rounded-full bg-gradient-to-br ${s.gradient} transition duration-300 transform hover:scale-110 shadow-sm ${activeShade.name === s.name ? `ring-2 ring-offset-2 ${s.ringColor} scale-110` : 'opacity-85'}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="btn-primary">Shop Now <ArrowRight size={18}/></a>
            <a href="#products" className="btn-ghost">Explore Colors</a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[['1.2k+','Shades'],['250+','Brands'],['50k+','Happy Homes']].map(([n,l])=>(
              <div key={l}>
                <div className="font-display text-2xl font-extrabold text-brand-700">{n}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-rose-400 to-pink-600 shadow-soft overflow-hidden">
                <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=400&q=80" alt="Paint and Roller" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-300 to-orange-500 shadow-soft overflow-hidden">
                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80" alt="Paint Buckets" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-teal-400 to-cyan-600 shadow-soft overflow-hidden">
                <img src="https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=400&q=80" alt="Paint Roller" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-700 shadow-soft overflow-hidden">
                <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=400&q=80" alt="Paint Brushes" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-soft flex items-center gap-3 border border-slate-100 transition-all duration-500">
            <div className={`w-12 h-12 rounded-xl transition-all duration-500 bg-gradient-to-br ${activeShade.gradient} shadow-inner flex items-center justify-center text-white`}>
              <Sparkles size={16} className="animate-pulse" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Live Swatch Test</div>
              <div className="font-bold text-slate-800 transition-all duration-300">{activeShade.name}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
