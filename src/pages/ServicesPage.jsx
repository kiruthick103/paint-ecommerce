import React, { useState } from 'react'
import { Sparkles, Calendar, Calculator, Check, ArrowRight, Paintbrush, HelpCircle } from 'lucide-react'

const services = [
  {
    id: 'color-consultation',
    icon: Sparkles,
    title: 'Color & Design Consultation',
    desc: 'Work 1-on-1 with a certified ChromaHaus designer to curate custom palettes matching your room lighting, flooring, and personal aesthetics.',
    features: ['Curated Color Swatches', 'Digital Room Visuals', 'Lighting & Finish Advice'],
    price: '$99 / Room',
  },
  {
    id: 'residential-painting',
    icon: Paintbrush,
    title: 'Professional House Painting',
    desc: 'Certified professional painters handle everything from detailed surface preparation to clean execution using premium low-VOC ChromaHaus paints.',
    features: ['Dust-Free Sanding', '10-Year Quality Guarantee', 'Post-Paint Clean-up'],
    price: 'Custom Quote',
  },
  {
    id: 'commercial-spaces',
    icon: Calendar,
    title: 'Commercial Project Paint Solutions',
    desc: 'Heavy-duty coatings and fast execution for offices, showrooms, retail stores, and commercial developments with minimal business downtime.',
    features: ['Off-Hours Paint Schedules', 'High-Durability Finishes', 'Certified Site Supervisors'],
    price: 'Custom Quote',
  },
]

export default function ServicesPage() {
  // Calculator State
  const [wallHeight, setWallHeight] = useState('10')
  const [wallWidth, setWallWidth] = useState('12')
  const [numWalls, setNumWalls] = useState('4')
  const [doors, setDoors] = useState('1')
  const [windows, setWindows] = useState('2')
  const [coats, setCoats] = useState('2')
  const [calculatedPaint, setCalculatedPaint] = useState(null)

  // Booking Form State
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [serviceType, setServiceType] = useState('color-consultation')
  const [bookingMessage, setBookingMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Calculate Paint Coverage logic
  const handleCalculate = (e) => {
    e.preventDefault()
    const height = parseFloat(wallHeight) || 0
    const width = parseFloat(wallWidth) || 0
    const walls = parseInt(numWalls) || 0
    const drs = parseInt(doors) || 0
    const wnds = parseInt(windows) || 0
    const cts = parseInt(coats) || 1

    const rawArea = height * width * walls
    const doorArea = drs * 20 // 20 sq ft per door
    const windowArea = wnds * 15 // 15 sq ft per window
    const netArea = Math.max(0, rawArea - doorArea - windowArea)
    const totalAreaToPaint = netArea * cts

    // 1 Gallon covers approx 350 sq ft
    const gallonsNeeded = totalAreaToPaint / 350
    const litersNeeded = gallonsNeeded * 3.78541 // 3.78L per gallon

    setCalculatedPaint({
      netArea: Math.round(netArea),
      totalArea: Math.round(totalAreaToPaint),
      gallons: Math.ceil(gallonsNeeded * 10) / 10,
      gallonsRounded: Math.ceil(gallonsNeeded),
      liters: Math.ceil(litersNeeded * 10) / 10,
    })
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setClientName('')
      setClientEmail('')
      setBookingMessage('')
    }, 3000)
  }

  return (
    <div className="page-enter bg-slate-50 min-h-screen pb-16 lg:pb-24">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-20">
        <div className="container-x text-center">
          <p className="text-xs uppercase tracking-widest text-brand-400 font-bold mb-3">ChromaHaus Services</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Professional Services & Consultation</h1>
          <p className="text-slate-450 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From picking the perfect color palette with design experts to scheduling certified painters for a flawless execution, we transform spaces with premium quality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-x">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-subtitle">Tailored painting solutions to match your needs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div 
                  key={service.id} 
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 card-hover flex flex-col justify-between"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-605 flex items-center justify-center mb-6">
                      <Icon size={24} className="text-brand-600" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-850 mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                          <span className="w-4 h-4 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                            <Check size={10} className="stroke-[3]" />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="block text-xs text-slate-400 font-semibold uppercase">Pricing</span>
                      <span className="font-extrabold text-slate-805 text-slate-800">{service.price}</span>
                    </div>
                    <a 
                      href="#booking-section"
                      className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 hover:underline transition"
                    >
                      Book Service <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Paint Calculator & Booking Form Dual Column */}
      <section className="py-8 lg:py-12" id="booking-section">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Paint Coverage Calculator */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                  <Calculator className="text-brand-600" size={24} /> Paint Volume Calculator
                </h2>
                <p className="text-sm text-slate-500 mb-6">
                  Estimate how many gallons/liters of paint you need to buy based on your room dimensions.
                </p>

                <form onSubmit={handleCalculate} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Wall Height (ft)</label>
                    <input 
                      type="number"
                      required
                      min="1"
                      value={wallHeight}
                      onChange={(e) => setWallHeight(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-brand-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Wall Width (ft)</label>
                    <input 
                      type="number"
                      required
                      min="1"
                      value={wallWidth}
                      onChange={(e) => setWallWidth(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-brand-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Number of Walls</label>
                    <input 
                      type="number"
                      required
                      min="1"
                      value={numWalls}
                      onChange={(e) => setNumWalls(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-brand-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Number of Doors</label>
                    <input 
                      type="number"
                      required
                      min="0"
                      value={doors}
                      onChange={(e) => setDoors(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-brand-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Number of Windows</label>
                    <input 
                      type="number"
                      required
                      min="0"
                      value={windows}
                      onChange={(e) => setWindows(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-brand-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Number of Coats</label>
                    <select
                      value={coats}
                      onChange={(e) => setCoats(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-brand-500 transition cursor-pointer"
                    >
                      <option value="1">1 Coat (Primer)</option>
                      <option value="2">2 Coats (Recommended)</option>
                      <option value="3">3 Coats (Vibrant/Dark)</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="col-span-2 sm:col-span-3 btn-primary py-2.5 font-bold mt-2"
                  >
                    Calculate Coverage
                  </button>
                </form>
              </div>

              {/* Calculator output */}
              {calculatedPaint ? (
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mt-4 space-y-4 animate-scale-in">
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Estimated Paint Coverage</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-3 border border-slate-100">
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase">Net Paint Area</span>
                      <span className="font-extrabold text-slate-800 text-lg">{calculatedPaint.totalArea} sq ft</span>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-slate-100">
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase">Paint Needed (Gal)</span>
                      <span className="font-extrabold text-brand-700 text-lg">~{calculatedPaint.gallons} Gal</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    Based on standard calculations, you will need approximately <strong className="text-slate-800">{calculatedPaint.gallonsRounded} Gallons</strong> (or roughly <strong className="text-slate-800">{calculatedPaint.liters} Liters</strong>) of paint for a {coats}-coat finish.
                  </p>
                </div>
              ) : (
                <div className="bg-slate-50 border border-dashed border-slate-250 rounded-2xl p-6 text-center text-slate-400 mt-4 flex items-center justify-center gap-2">
                  <HelpCircle size={18} /> Run the calculator to see estimated volumes.
                </div>
              )}
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                  <Calendar className="text-brand-600" size={24} /> Book a Consultation
                </h2>
                <p className="text-sm text-slate-500 mb-6">
                  Schedule your virtual design call or onsite paint walkthrough with our experts.
                </p>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center text-emerald-800 animate-scale-in">
                    <Check className="mx-auto text-emerald-600 mb-3" size={32} />
                    <h3 className="font-bold text-base mb-1">Booking Request Received!</h3>
                    <p className="text-xs text-emerald-600 leading-relaxed">
                      Our expert paint design consultant will contact you shortly to coordinate schedules and finalize details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="johndoe@example.com"
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Service Required</label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-500 transition cursor-pointer"
                      >
                        <option value="color-consultation">Color & Design Consultation</option>
                        <option value="residential-painting">Professional House Painting</option>
                        <option value="commercial-spaces">Commercial Project Paint Solutions</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Notes / Preferences</label>
                      <textarea 
                        value={bookingMessage}
                        onChange={(e) => setBookingMessage(e.target.value)}
                        placeholder="Tell us a bit about your space, preferred colors, or project timelines..."
                        rows={3}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-500 transition resize-none"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full btn-primary py-3 font-bold mt-2 shadow-lg"
                    >
                      Submit Request
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
