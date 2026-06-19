import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Palette, Droplets, Brush, Shield, Leaf, Lightbulb, Users, ArrowRight, Mail, CheckCircle, Pipette, Truck, PaintBucket, Sparkles } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import Categories from '../components/Categories.jsx'
import Products from '../components/Products.jsx'
import OfferBanner from '../components/OfferBanner.jsx'
import Brands from '../components/Brands.jsx'
import Reviews from '../components/Reviews.jsx'

/* ─── Inline: Color Visualizer ─── */
const wallColors = [
  { name: 'Warm Ivory', hex: '#F5E6D3' },
  { name: 'Sage Green', hex: '#B2C9AB' },
  { name: 'Ocean Blue', hex: '#7EB4D2' },
  { name: 'Sunset Coral', hex: '#E8917A' },
  { name: 'Lavender Mist', hex: '#C4B7D4' },
  { name: 'Charcoal', hex: '#4A4A4A' },
  { name: 'Blush Pink', hex: '#E8C4C4' },
  { name: 'Mint Fresh', hex: '#A8D8C8' },
]

function ColorVisualizer() {
  const [selected, setSelected] = useState(wallColors[0])
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title">Visualize Your Space</h2>
          <p className="section-subtitle">Try colors in real time — pick a shade and see the magic.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Room Preview */}
          <div className="relative rounded-3xl overflow-hidden shadow-soft border border-slate-100 aspect-[4/3]">
            <div className="absolute inset-0 transition-colors duration-500" style={{ backgroundColor: selected.hex, opacity: 0.35 }} />
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
              alt="Room Preview"
              className="w-full h-full object-cover mix-blend-multiply"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl px-4 py-2 flex items-center gap-2 shadow-sm">
              <div className="w-6 h-6 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: selected.hex }} />
              <span className="text-sm font-semibold text-slate-700">{selected.name}</span>
            </div>
          </div>
          {/* Color Picker */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Pipette className="text-brand-600" size={20} />
              <h3 className="text-xl font-bold">Pick a Color</h3>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {wallColors.map(c => (
                <button
                  key={c.name}
                  onClick={() => setSelected(c)}
                  className={`group relative rounded-2xl p-3 border-2 transition-all duration-300 hover:shadow-md ${selected.name === c.name ? 'border-brand-600 shadow-soft scale-105' : 'border-slate-100 hover:border-slate-300'}`}
                >
                  <div className="w-full aspect-square rounded-xl mb-2 transition-transform duration-300 group-hover:scale-105" style={{ backgroundColor: c.hex }} />
                  <p className="text-xs font-semibold text-slate-600 text-center truncate">{c.name}</p>
                </button>
              ))}
            </div>
            <Link to="/shop" className="btn-primary mt-8">
              Shop This Shade <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Inline: How It Works ─── */
const steps = [
  { icon: Palette, title: 'Choose Your Color', desc: 'Browse 1,200+ designer shades or use our AI color matcher.' },
  { icon: PaintBucket, title: 'Select Your Paint', desc: 'Pick from premium brands with the finish and coverage you need.' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Free next-day delivery on all orders over $50.' },
  { icon: Brush, title: 'Paint & Enjoy', desc: 'Transform your space with expert tips and how-to guides.' },
]

function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Four simple steps to a beautifully painted home.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-200 to-transparent" />
              )}
              <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-brand-50 to-pink-50 border border-brand-100 grid place-items-center mb-5 group-hover:shadow-soft group-hover:scale-110 transition-all duration-300">
                <s.icon size={28} className="text-brand-600" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-600 text-white text-xs font-bold grid place-items-center shadow-md">{i + 1}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 max-w-[220px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Inline: Why Choose Us ─── */
const reasons = [
  { icon: Shield, title: 'Quality Guaranteed', desc: 'Every product is tested and certified for lasting performance.', color: 'from-blue-500 to-indigo-600' },
  { icon: Leaf, title: 'Eco-Friendly', desc: 'Low-VOC & plant-based options for healthier homes.', color: 'from-emerald-500 to-teal-600' },
  { icon: Droplets, title: '1,200+ Shades', desc: 'The widest color palette from the world\'s top brands.', color: 'from-brand-500 to-pink-600' },
  { icon: Truck, title: 'Free Delivery', desc: 'Next-day delivery on orders above $50, anywhere nationwide.', color: 'from-amber-500 to-orange-600' },
]

function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="section-title">Why Choose ChromaHaus</h2>
          <p className="section-subtitle">Trusted by 50,000+ homeowners and professionals.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(r => (
            <div key={r.title} className="group bg-slate-50 rounded-3xl p-7 border border-slate-100 hover:bg-white hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.color} grid place-items-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <r.icon size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Inline: Newsletter ─── */
function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-12 lg:p-16 text-white">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="relative text-center max-w-xl mx-auto">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-brand-500 to-pink-500 grid place-items-center mb-6 shadow-lg">
              <Mail size={28} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold">Stay Inspired</h2>
            <p className="text-slate-400 mt-3">Get exclusive deals, color trends, and expert painting tips delivered weekly.</p>
            {subscribed ? (
              <div className="mt-8 flex items-center justify-center gap-2 text-emerald-400 font-semibold">
                <CheckCircle size={20} /> You're subscribed! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 rounded-full px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-slate-500 outline-none focus:border-brand-500 transition"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe <Sparkles size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Main: HomePage ─── */
export default function HomePage({ onAddToCart }) {
  return (
    <div className="page-enter">
      <Hero />
      <Categories />
      <Products onAddToCart={onAddToCart} />
      <ColorVisualizer />
      <HowItWorks />
      <OfferBanner />
      <WhyChooseUs />
      <Brands />
      <Reviews />
      <Newsletter />
    </div>
  )
}
