import { Home, Building2, Brush, Sparkles, Droplets, Wrench } from 'lucide-react'
const cats = [
  { icon: Home, label: 'Interior', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=300&q=80' },
  { icon: Building2, label: 'Exterior', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80' },
  { icon: Droplets, label: 'Primers', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=300&q=80' },
  { icon: Sparkles, label: 'Enamel', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80' },
  { icon: Brush, label: 'Brushes', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=300&q=80' },
  { icon: Wrench, label: 'Tools', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=300&q=80' },
]
export default function Categories() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold">Shop by Category</h2>
            <p className="text-slate-500 mt-2">Find exactly what your project needs.</p>
          </div>
          <a href="#" className="hidden sm:inline text-brand-600 font-semibold hover:underline">View all →</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {cats.map(({icon:Icon,label,image}) => (
            <a href="#" key={label} className="group relative aspect-[4/5] rounded-3xl overflow-hidden hover:shadow-soft transition block">
              <img src={image} alt={label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur grid place-items-center mb-3 group-hover:scale-110 transition duration-300">
                  <Icon size={22}/>
                </div>
                <div className="font-bold tracking-wide text-xs sm:text-sm uppercase">{label}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
