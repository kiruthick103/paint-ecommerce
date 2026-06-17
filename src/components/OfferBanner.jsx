import { ArrowRight, Tag } from 'lucide-react'
export default function OfferBanner() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 via-pink-600 to-purple-700 p-8 sm:p-12 lg:p-16 text-white">
          <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80" alt="Textured Painted Wall" className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none mix-blend-overlay" />
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-2xl"/>
          <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-amber-300/30 blur-2xl"/>
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold"><Tag size={14}/> Limited Time</span>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Up to <span className="text-amber-300">40% OFF</span><br/>on Designer Collections</h2>
              <p className="mt-4 text-white/80 max-w-md">Refresh your space with premium finishes. Free home delivery & color consultation.</p>
              <a href="#" className="mt-8 inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-6 py-3 rounded-full hover:bg-amber-300 transition">Grab the Deal <ArrowRight size={18}/></a>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {['HRS','MIN','SEC'].map((l,i)=>(
                <div key={l} className="bg-white/15 backdrop-blur rounded-2xl p-4 text-center border border-white/20">
                  <div className="font-display text-3xl sm:text-4xl font-extrabold">{['12','45','30'][i]}</div>
                  <div className="text-xs uppercase tracking-wider opacity-80 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
