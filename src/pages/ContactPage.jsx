import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, Send } from 'lucide-react'

const faqs = [
  {
    q: 'How do I choose the right paint finish?',
    a: 'Matte finishes hide imperfections and are great for bedrooms. Eggshell and satin are ideal for living rooms and hallways as they\'re easier to clean. Semi-gloss and gloss are best for kitchens, bathrooms, trim, and doors.'
  },
  {
    q: 'Do you offer free color samples?',
    a: 'Yes! We offer sample pots for just $3.99 each. You can order up to 6 samples at a time. Paint a test patch and see exactly how the color looks in your lighting before committing to a full order.'
  },
  {
    q: 'What is the delivery timeframe?',
    a: 'Standard delivery takes 2–4 business days. We offer free next-day delivery on orders over $50. Express same-day delivery is available in select cities for an additional fee.'
  },
  {
    q: 'Can I return opened paint cans?',
    a: 'We accept returns on unopened cans within 30 days. For opened cans, if the color doesn\'t match our description or there\'s a quality issue, we\'ll replace it for free. We also offer a custom color re-mix service.'
  },
  {
    q: 'Do you offer professional painting services?',
    a: 'We partner with certified local painters in most major cities. Request a quote through our Pro Services page and we\'ll connect you with a vetted professional within 24 hours.'
  },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="inline-block bg-brand-500/20 border border-brand-500/30 text-brand-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            We're here to help
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">Get In Touch</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a question about colors, orders, or anything else? Our team is ready to help you create your perfect space.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-extrabold mb-2">Send Us a Message</h2>
              <p className="text-slate-500 mb-8">We typically reply within 24 hours.</p>

              {sent ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 grid place-items-center mb-4">
                    <Send size={28} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-2">Message Sent!</h3>
                  <p className="text-emerald-700">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name:'',email:'',phone:'',subject:'',message:'' }) }}
                    className="mt-6 btn-primary">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        placeholder="Alex Johnson"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition text-slate-800" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition text-slate-800" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                      <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition text-slate-800" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Subject *</label>
                      <select required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition text-slate-800 bg-white">
                        <option value="">Select a topic</option>
                        <option>Product Enquiry</option>
                        <option>Order Support</option>
                        <option>Color Consultation</option>
                        <option>Returns & Refunds</option>
                        <option>Professional Services</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition text-slate-800 resize-none" />
                  </div>
                  <button type="submit" className="btn-primary gap-2">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-extrabold mb-2">Contact Info</h2>
              <p className="text-slate-500 mb-8">Multiple ways to connect with our team.</p>

              {[
                { icon: Mail, title: 'Email Us', value: 'hello@chromahaus.com', sub: 'We reply within 24 hours', color: 'from-brand-500 to-pink-500' },
                { icon: Phone, title: 'Call Us', value: '+1 (555) 123-4567', sub: 'Mon–Fri, 9am–6pm EST', color: 'from-sky-500 to-blue-600' },
                { icon: MapPin, title: 'Visit Us', value: '428 Color Ave, Suite 200', sub: 'New York, NY 10001', color: 'from-emerald-500 to-teal-600' },
                { icon: Clock, title: 'Business Hours', value: 'Mon–Fri: 9am–6pm', sub: 'Sat: 10am–4pm | Sun: Closed', color: 'from-amber-500 to-orange-500' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 hover:bg-white transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} grid place-items-center text-white flex-shrink-0 shadow-md`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.title}</div>
                    <div className="font-bold text-slate-800 mt-0.5">{item.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about ChromaHaus.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={20} className="text-brand-600 flex-shrink-0" />
                    : <ChevronDown size={20} className="text-slate-400 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-x text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to start your project?</h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">Browse our full range of premium paints and find the perfect color for your home.</p>
          <Link to="/shop" className="btn-primary">Browse All Paints</Link>
        </div>
      </section>
    </div>
  )
}
