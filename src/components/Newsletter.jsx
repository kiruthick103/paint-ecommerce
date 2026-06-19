import React, { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* ── Gradient background ────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-pink-700" />

      {/* ── Decorative blobs ───────────────── */}
      <div aria-hidden="true" className="pointer-events-none">
        {/* Top-left blob */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        {/* Bottom-right blob */}
        <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px]" />
        {/* Small floating circles */}
        <div className="absolute top-16 right-[20%] w-6 h-6 bg-white/20 rounded-full animate-float" />
        <div className="absolute bottom-20 left-[15%] w-4 h-4 bg-pink-300/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[30%] left-[10%] w-3 h-3 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* ── Content ────────────────────────── */}
      <div className="relative container-x py-24 lg:py-28 text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-scale-in">
          <Mail className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 animate-fade-up">
          Get Color Inspiration Delivered
        </h2>

        <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '100ms' }}>
          Join 50,000+ homeowners. Get exclusive deals, color trends, and design tips.
        </p>

        {/* ── Form ─────────────────────────── */}
        <form
          onSubmit={handleSubmit}
          className="relative max-w-lg mx-auto animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          <div className="flex items-center bg-white/15 backdrop-blur-md rounded-2xl p-1.5 border border-white/20 focus-within:border-white/40 transition-colors">
            <Mail className="w-5 h-5 text-white/50 ml-4 flex-shrink-0" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-transparent text-white placeholder-white/50 text-sm px-3 py-3 outline-none"
            />
            <button
              type="submit"
              className="btn-white flex-shrink-0 flex items-center gap-2 !rounded-xl !px-6 !py-3 font-semibold text-brand-700 hover:text-brand-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Subscribed!
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Trust text */}
        <p className="mt-5 text-xs text-white/50 animate-fade-up" style={{ animationDelay: '300ms' }}>
          🔒 No spam. Unsubscribe anytime. We respect your privacy.
        </p>

        {/* Social proof pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: '400ms' }}>
          {['Trending Colors', 'Design Tips', 'Exclusive Deals', 'Early Access'].map((tag) => (
            <span
              key={tag}
              className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-xs font-medium px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
