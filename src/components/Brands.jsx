const brands = ['Asian Paints','Berger','Nerolac','Dulux','Sherwin','Behr','Benjamin','Jotun']
export default function Brands() {
  return (
    <section className="py-16 bg-white">
      <div className="container-x">
        <h2 className="text-center text-2xl lg:text-3xl font-extrabold">Trusted by Top Brands</h2>
        <p className="text-center text-slate-500 mt-2">Authorized retailer of the world's leading paint manufacturers.</p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {brands.map(b => (
            <div key={b} className="h-20 grid place-items-center rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-brand-50 hover:to-pink-50 border border-slate-100 transition">
              <span className="font-display font-bold text-slate-600">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
