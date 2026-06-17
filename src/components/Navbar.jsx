import { useState } from 'react'
import { Search, ShoppingCart, Heart, User, Menu, X, Palette } from 'lucide-react'

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'Shop', 'Categories', 'Brands', 'Offers', 'Contact']
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-pink-500 grid place-items-center text-white"><Palette size={20}/></span>
          <span className="font-display font-extrabold text-xl tracking-tight">Chroma<span className="text-brand-600">Haus</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => <a key={l} href="#" className="text-sm font-medium hover:text-brand-600 transition">{l}</a>)}
        </nav>
        <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 w-72">
          <Search size={18} className="text-slate-500"/>
          <input placeholder="Search colors, brands..." className="bg-transparent outline-none text-sm flex-1"/>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:grid w-10 h-10 place-items-center rounded-full hover:bg-slate-100"><Heart size={20}/></button>
          <button className="hidden sm:grid w-10 h-10 overflow-hidden rounded-full border border-slate-200 hover:opacity-90">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-full h-full object-cover" />
          </button>
          <button className="relative w-10 h-10 grid place-items-center rounded-full bg-brand-600 text-white hover:bg-brand-700">
            <ShoppingCart size={18}/>
            <span className="absolute -top-1 -right-1 bg-pink-500 text-[10px] font-bold w-5 h-5 rounded-full grid place-items-center transition-all duration-300 transform scale-110">{cartCount}</span>
          </button>
          <button className="lg:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map(l => <a key={l} href="#" className="py-2 font-medium">{l}</a>)}
          </div>
        </div>
      )}
    </header>
  )
}
