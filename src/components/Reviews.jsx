import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';

const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Interior Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    quote:
      'ChromaHaus transformed how I source paints for my projects. The shade accuracy is impeccable and delivery is always on time. My go-to store for every project!',
    color: 'from-brand-500 to-pink-500',
  },
  {
    name: 'Rajesh Menon',
    role: 'Homeowner',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    quote:
      'Painted our entire home using ChromaHaus recommendations. The color consultant feature helped us pick the perfect palette. Absolutely thrilled with the results!',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Ananya Iyer',
    role: 'Architect',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    quote:
      'The premium enamel and textured finishes from ChromaHaus are unmatched. I specify their products for all my commercial projects. Quality you can trust.',
    color: 'from-purple-500 to-indigo-500',
  },
];

const Reviews = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative z-10">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5 text-brand-400" />
            <p className="section-subtitle !mb-0">Testimonials</p>
          </div>
          <h2 className="section-title">Loved by Designers & Homeowners</h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            See why thousands of professionals and DIY enthusiasts choose ChromaHaus for their painting needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 lg:p-8 hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-2 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Quote Icon */}
              <div className={`absolute -top-4 right-6 w-10 h-10 rounded-xl bg-gradient-to-br ${review.color} flex items-center justify-center shadow-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300`}>
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 min-h-[80px]">
                "{review.quote}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/10 group-hover:border-brand-500/40 transition-colors duration-300"
                  />
                  <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br ${review.color} border-2 border-slate-950`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${review.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
