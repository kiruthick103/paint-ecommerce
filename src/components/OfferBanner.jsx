import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Zap } from 'lucide-react';

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
    <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="container-x">
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-700 via-brand-605 via-brand-600 to-pink-700" />

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

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Limited Time Offer</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Up to{' '}
                  <span className="text-yellow-350 font-black">40% OFF</span>
                  <br />
                  on Designer Collections
                </h2>

                <p className="text-white/80 text-base sm:text-lg max-w-md leading-relaxed">
                  Premium finishes, luxury textures, and trending palettes — all at unbeatable prices this season.
                </p>

                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition duration-300 shadow-md group text-sm"
                >
                  Grab the Deal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right: Countdown */}
              <div className="flex flex-col items-center lg:items-end space-y-6">
                <div className="flex items-center gap-2 text-white/70">
                  <Clock className="w-4 h-4 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider">Sale Ends In</span>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  {timeUnits.map((unit, i) => (
                    <React.Fragment key={unit.label}>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
                          <span className="text-xl sm:text-2xl font-bold text-white font-mono">
                            {String(unit.value).padStart(2, '0')}
                          </span>
                        </div>
                        <span className="text-[10px] text-white/60 mt-2 font-bold uppercase tracking-wider">
                          {unit.label}
                        </span>
                      </div>
                      {i < timeUnits.length - 1 && (
                        <span className="text-xl sm:text-2xl font-bold text-white/30 self-start mt-4 sm:mt-6">
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
                      className="px-3.5 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bold border border-white/10"
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
