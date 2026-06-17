import { Palette, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-pink-500 grid place-items-center text-white"><Palette size={20}/></span>
            <span className="font-display font-extrabold text-xl text-white">Chroma<span className="text-brand-500">Haus</span></span>
          </div>
          <p className="mt-4 text-sm max-w-sm">Premium paints, designer colors, and pro tools delivered with love. Color your world beautifully.</p>
          <div className="mt-6 flex gap-3">
            {[Facebook,Instagram,Twitter,Youtube].map((I,i)=>(
              <a key={i} href="#" className="w-10 h-10 grid place-items-center rounded-full bg-slate-800 hover:bg-brand-600 transition"><I size={16}/></a>
            ))}
          </div>
        </div>
        {[
          { title:'Shop', links:['Interior','Exterior','Primers','Tools','Brushes']},
          { title:'Company', links:['About Us','Careers','Blog','Press','Contact']},
          { title:'Support', links:['Help Center','Shipping','Returns','Color Match','Warranty']},
        ].map(col=>(
          <div key={col.title}>
            <h4 className="text-white font-bold mb-4">{col.title}</h4>
            <ul className="space-y-2 text-sm">{col.links.map(l=><li key={l}><a href="#" className="hover:text-brand-500">{l}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2026 ChromaHaus. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-xs">
            <span className="flex items-center gap-1"><Mail size={14}/> hello@chromahaus.com</span>
            <span className="flex items-center gap-1"><Phone size={14}/> +1 (555) 123-4567</span>
            <span className="flex items-center gap-1"><MapPin size={14}/> New York, USA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
