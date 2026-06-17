import { Star, Quote } from 'lucide-react'
const reviews = [
  { 
    name: 'Aisha Khan', 
    role: 'Interior Designer', 
    text: 'The color accuracy and finish quality is unmatched. My clients love every project we deliver with ChromaHaus paints.', 
    color: 'from-rose-400 to-pink-600',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  { 
    name: 'Marcus Lee', 
    role: 'Homeowner', 
    text: 'Ordered samples on Friday, painted my living room by Sunday. Smooth experience and stunning result.', 
    color: 'from-sky-400 to-indigo-600',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  { 
    name: 'Priya Sharma', 
    role: 'Architect', 
    text: 'Best eco-paint range I have used. Low odor, beautiful matte finish, and ships next day.', 
    color: 'from-emerald-400 to-teal-600',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
  },
]
export default function Reviews() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold">Loved by Designers & Homeowners</h2>
          <p className="text-slate-500 mt-3">Over 50,000 happy customers worldwide.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map(r => (
            <div key={r.name} className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-soft">
              <Quote className="absolute top-6 right-6 text-brand-100" size={48}/>
              <div className="flex text-amber-500 mb-4">
                {[...Array(5)].map((_,i)=><Star key={i} size={16} fill="currentColor"/>)}
              </div>
              <p className="text-slate-700 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs text-slate-500">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
