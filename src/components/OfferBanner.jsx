import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Percent, Zap } from 'lucide-react';

const targetDate = new Date('2026-07-31T23:59:59').getTime();

const calcTimeLeft = () => {
  const diff = Math.max(0, targetDate - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const OfferBanner = () => {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-950">
      <div className="container-x">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600 via-pink-600 to-purple-700" />

          {/* Background Image */}
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1200&h=600&fit=crop)',
            }}
          />

          {/* Decorative Blur Circles */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-semibold text-white">Limited Time Offer</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Up to{' '}
                  <span className="relative inline-block">
                    <span className="text-yellow-300">40% OFF</span>
                    <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                      <path d="M2 6C50 2 150 2 198 6" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </span>
                  <br />
                  on Designer Collections
                </h2>

                <p className="text-white/70 text-lg max-w-md">
                  Premium finishes, luxury textures, and trending palettes — all at unbeatable prices this season.
                </p>

                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-300/20 transition-all duration-300 group"
                >
                  Grab the Deal
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right: Countdown */}
              <div className="flex flex-col items-center lg:items-end space-y-6">
                <div className="flex items-center gap-2 text-white/60">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium uppercase tracking-wider">Sale Ends In</span>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  {timeUnits.map((unit, i) => (
                    <React.Fragment key={unit.label}>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                          <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                            {String(unit.value).padStart(2, '0')}
                          </span>
                        </div>
                        <span className="text-xs text-white/50 mt-2 font-medium uppercase tracking-wider">
                          {unit.label}
                        </span>
                      </div>
                      {i < timeUnits.length - 1 && (
                        <span className="text-2xl sm:text-3xl font-bold text-white/30 self-start mt-4 sm:mt-5">
                          :
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Discount Badges */}
                <div className="flex gap-2 mt-4">
                  {['Interior', 'Exterior', 'Enamel'].map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/10"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
