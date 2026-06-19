import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Palette, Search, Heart, ShoppingBag, Menu, X, User, LogOut } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = ({ cartCount = 0, onCartClick, user, onLogout }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogoutClick = () => {
    setProfileDropdownOpen(false);
    if (onLogout) onLogout();
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-black/30'
          : 'bg-slate-950/90 backdrop-blur-lg'
      }`}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-pink-500 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-shadow duration-300">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">Chroma</span>
              <span className="text-brand-400">Haus</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActive
                      ? 'text-brand-400'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-brand-400 to-pink-400 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1.5 gap-2 focus-within:border-brand-500/50 focus-within:bg-white/10 transition-all duration-200">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search paints..."
                className="bg-transparent text-sm text-white placeholder-slate-500 outline-none w-32 lg:w-40"
              />
            </div>

            {/* Heart */}
            <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full text-slate-400 hover:text-pink-400 hover:bg-white/5 transition-all duration-200">
              <Heart className="w-[18px] h-[18px]" />
            </button>

            {/* Profile Avatar / User Dropdown */}
            <div className="relative">
              {user ? (
                <div>
                  <button
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-605 bg-brand-600 text-white text-xs font-extrabold hover:bg-brand-700 transition shadow-inner focus:outline-none"
                    title={user.name}
                  >
                    {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </button>

                  {/* Dropdown Menu */}
                  {profileDropdownOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setProfileDropdownOpen(false)}
                      />
                      <div className="absolute right-0 mt-3 w-56 bg-slate-905 bg-slate-900 border border-white/10 rounded-2xl shadow-xl py-2 z-20 animate-scale-in text-left">
                        <div className="px-4 py-2 border-b border-white/5">
                          <p className="text-xs text-slate-400 font-semibold">Signed in as</p>
                          <p className="text-sm font-bold text-white truncate">{user.name}</p>
                          <p className="text-xs text-slate-500 truncate">{user.email}</p>
                        </div>
                        
                        <div className="py-1">
                          <Link 
                            to="/shop" 
                            onClick={() => setProfileDropdownOpen(false)}
                            className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition"
                          >
                            <Palette className="w-4 h-4" /> My Palettes
                          </Link>
                        </div>
                        
                        <div className="border-t border-white/5 py-1">
                          <button
                            onClick={handleLogoutClick}
                            className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-rose-400 hover:text-rose-350 hover:bg-rose-500/10 transition text-left"
                          >
                            <LogOut className="w-4 h-4" /> Sign Out
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-500/20 to-pink-500/20 text-brand-400 hover:from-brand-500/30 hover:to-pink-500/30 transition-all duration-200"
                  title="Sign In"
                >
                  <User className="w-[18px] h-[18px]" />
                </Link>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-brand-400 hover:bg-white/5 transition-all duration-200"
              title="Open Shopping Cart"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 min-w-[18px] flex items-center justify-center bg-gradient-to-r from-brand-500 to-pink-500 text-white text-[10px] font-bold rounded-full shadow-lg shadow-brand-500/40 animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[30rem] border-t border-white/5' : 'max-h-0'
        }`}
      >
        <div className="container-x py-4 space-y-1">
          {/* Mobile Search */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 gap-2 mb-3">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search paints..."
              className="bg-transparent text-sm text-white placeholder-slate-500 outline-none w-full"
            />
          </div>

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-brand-400 bg-brand-500/10 border-l-2 border-brand-400'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="flex items-center gap-2 pt-3 border-t border-white/5 mt-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm text-slate-300 hover:text-pink-400 hover:bg-white/5 transition-all">
              <Heart className="w-4 h-4" /> Wishlist
            </button>
            {user ? (
              <button 
                onClick={handleLogoutClick}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm text-rose-450 hover:bg-rose-500/15 transition-all text-rose-400"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            ) : (
              <Link 
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm text-slate-300 hover:text-brand-400 hover:bg-white/5 transition-all"
              >
                <User className="w-4 h-4" /> Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
