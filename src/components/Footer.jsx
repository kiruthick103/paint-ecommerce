import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Palette,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Send,
  Heart,
} from 'lucide-react';

const shopLinks = [
  { label: 'Interior Paints', to: '/shop?category=Interior' },
  { label: 'Exterior Paints', to: '/shop?category=Exterior' },
  { label: 'Primers', to: '/shop?category=Primers' },
  { label: 'Tools', to: '/shop?category=Tools' },
  { label: 'Brushes', to: '/shop?category=Brushes' },
];

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
  { label: 'Login', to: '/login' },
];

const supportLinks = [
  { label: 'Help Center', to: '#' },
  { label: 'Shipping Info', to: '#' },
  { label: 'Returns & Exchange', to: '#' },
  { label: 'Color Match', to: '#' },
  { label: 'Warranty', to: '#' },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      {/* Main Footer */}
      <div className="container-x py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 space-y-6">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-pink-500 flex items-center justify-center shadow-lg shadow-brand-500/20">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Chroma</span>
                <span className="text-brand-400">Haus</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              India's premium paint destination. Discover 1,200+ shades from top brands,
              with expert color consultation and fast delivery.
            </p>

            {/* Newsletter */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Get Color Inspiration
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-l-xl text-sm text-white placeholder-slate-500 outline-none focus:border-brand-500/50 transition-colors"
                />
                <button className="px-4 py-2.5 bg-gradient-to-r from-brand-500 to-pink-500 rounded-r-xl text-white hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-300">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Shop Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-x py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 flex items-center gap-1">
              © 2026 ChromaHaus. Made with{' '}
              <Heart className="w-3 h-3 fill-brand-500 text-brand-500" /> in India.
              All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-xs text-slate-500">
              <a href="mailto:hello@chromahaus.in" className="flex items-center gap-1.5 hover:text-brand-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                hello@chromahaus.in
              </a>
              <a href="tel:+911800123456" className="flex items-center gap-1.5 hover:text-brand-400 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                1800-123-456
              </a>
              <span className="hidden sm:flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Mumbai, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
