import { Link } from 'react-router-dom'
import { ArrowRight, Award, Leaf, Droplets, Users, Palette, Heart, Target, Globe } from 'lucide-react'

const stats = [
  { value: '50k+', label: 'Happy Homes' },
  { value: '1,200+', label: 'Shades' },
  { value: '250+', label: 'Brands' },
  { value: '15+', label: 'Years' },
]

const values = [
  { icon: Award, title: 'Uncompromising Quality', desc: 'Every can is tested in our lab before it reaches you. We only stock paints we\'d use in our own homes.', color: 'from-amber-500 to-orange-500' },
  { icon: Leaf, title: 'Sustainability First', desc: 'Our eco-range features zero-VOC, plant-based formulas that are safe for your family and the planet.', color: 'from-emerald-500 to-teal-600' },
  { icon: Palette, title: 'Design Innovation', desc: 'Our in-house color experts collaborate with leading interior designers to bring you the latest trends.', color: 'from-brand-500 to-pink-500' },
  { icon: Heart, title: 'Community Driven', desc: 'We give 1% of every sale to home renovation programs for underserved communities.', color: 'from-sky-500 to-blue-600' },
]

const team = [
  { name: 'Sarah Chen', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
  { name: 'Marcus Rivera', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
  { name: 'Priya Nair', role: 'Color Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80' },
  { name: 'James Park', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' },
]

const milestones = [
  { year: '2009', title: 'Founded', desc: 'ChromaHaus started in a garage with a simple mission: make premium paint accessible.' },
  { year: '2013', title: 'First 10k Customers', desc: 'Reached 10,000 happy homes and launched our eco-friendly paint line.' },
  { year: '2017', title: 'AI Color Match', desc: 'Launched our patented AI color-matching technology — a first in the industry.' },
  { year: '2022', title: 'National Expansion', desc: 'Now serving customers across all 50 states with same-day delivery in 20 cities.' },
  { year: '2024', title: '50k Homes Painted', desc: 'Celebrated 50,000 happy homes and launched our Premium Designer Collection.' },
]

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 lg:py-32 text-white">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-brand-500/20 border border-brand-500/30 text-brand-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Painting the Future,<br />
              <span className="bg-gradient-to-r from-brand-400 to-pink-400 bg-clip-text text-transparent">
                One Wall at a Time
              </span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              ChromaHaus was born from the belief that everyone deserves access to beautiful, high-quality paint.
              We've spent 15 years building the world's most curated paint collection — and we're just getting started.
            </p>
            <div className="flex gap-4 mt-8">
              <Link to="/shop" className="btn-primary">Explore Our Paints <ArrowRight size={18} /></Link>
              <Link to="/contact" className="btn-ghost border-white/20 text-white hover:border-brand-400 hover:text-brand-400">Contact Us</Link>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=400&q=80"
                alt="Paint" className="rounded-3xl shadow-2xl w-full object-cover aspect-square" />
              <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=400&q=80"
                alt="Brushes" className="rounded-3xl shadow-2xl w-full object-cover aspect-square mt-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-600 py-14">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center text-white">
              <div className="text-4xl lg:text-5xl font-extrabold font-display">{s.value}</div>
              <div className="text-brand-200 text-sm mt-1 uppercase tracking-wider font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80"
              alt="Beautiful Room" className="rounded-3xl shadow-soft w-full object-cover aspect-[4/3]" />
          </div>
          <div>
            <span className="text-brand-600 font-bold text-sm uppercase tracking-wider">Our Mission</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold mt-3 mb-6">Color Should Be a Joy, Not a Chore</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We started ChromaHaus because finding great paint was frustrating — overwhelming choices, inconsistent quality, and no real guidance. We knew there was a better way.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Today, we curate only the finest paints from around the world, add our own color-expert guidance, and deliver it all with a seamless experience that makes painting your home feel exciting rather than overwhelming.
            </p>
            <div className="flex items-center gap-3 p-4 bg-brand-50 rounded-2xl border border-brand-100">
              <Target size={24} className="text-brand-600 flex-shrink-0" />
              <p className="text-brand-800 font-medium text-sm">
                Our goal: every ChromaHaus customer ends up with a home they love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle">The principles that guide every product we sell and every decision we make.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-3xl p-7 border border-slate-100 hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.color} grid place-items-center text-white mb-5 shadow-md`}>
                  <v.icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">From a garage startup to 50,000 happy homes.</p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 to-pink-500" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex gap-8 pl-16">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-pink-500 grid place-items-center text-white text-xs font-bold shadow-lg shadow-brand-200 border-4 border-white">
                    {m.year.slice(2)}
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex-1 hover:border-brand-200 hover:shadow-soft transition-all duration-300">
                    <div className="text-brand-600 font-bold text-sm mb-1">{m.year}</div>
                    <h3 className="font-bold text-lg mb-1">{m.title}</h3>
                    <p className="text-slate-500 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle">The color enthusiasts behind ChromaHaus.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(member => (
              <div key={member.name} className="text-center group">
                <div className="relative w-36 h-36 mx-auto mb-4 rounded-3xl overflow-hidden shadow-soft border-4 border-white group-hover:scale-105 transition-transform duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-brand-600 text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-pink-600 text-white">
        <div className="container-x text-center">
          <Globe size={40} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">Browse 1,200+ premium shades and find the perfect color for your home today.</p>
          <Link to="/shop" className="bg-white text-brand-700 font-bold px-8 py-4 rounded-full hover:bg-brand-50 transition-all duration-300 inline-flex items-center gap-2 shadow-xl">
            Shop All Paints <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
