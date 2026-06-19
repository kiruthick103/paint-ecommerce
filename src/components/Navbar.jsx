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
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-slate-100 shadow-sm'
          : 'bg-white/70 backdrop-blur-md border-transparent'
      }`}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8.5 h-8.5 rounded-xl bg-gradient-to-br from-brand-500 to-pink-500 flex items-center justify-center shadow-md">
              <Palette className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-slate-800">Chroma</span>
              <span className="text-brand-600 font-extrabold">Haus</span>
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
                  `relative px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg ${
                    isActive
                      ? 'text-brand-605 text-brand-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-brand-600 to-pink-500 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-slate-50 border border-slate-200/80 rounded-full px-3 py-1.5 gap-2 focus-within:border-brand-500/50 focus-within:bg-white transition-all duration-200">
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search paints..."
                className="bg-transparent text-xs text-slate-700 placeholder-slate-400 outline-none w-28 lg:w-36 font-medium"
              />
            </div>

            {/* Heart */}
            <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full text-slate-500 hover:text-brand-600 hover:bg-slate-50 transition">
              <Heart className="w-4.5 h-4.5" />
            </button>

            {/* Profile Avatar / User Dropdown */}
            <div className="relative">
              {user ? (
                <div>
                  <button
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-600 text-white text-xs font-bold hover:bg-brand-700 transition shadow-inner focus:outline-none"
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
                      <div className="absolute right-0 mt-3 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-20 animate-scale-in text-left">
                        <div className="px-4 py-2 border-b border-slate-100">
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Signed in as</p>
                          <p className="text-sm font-bold text-slate-800 truncate">{user.name}</p>
                          <p className="text-xs text-slate-500 truncate">{user.email}</p>
                        </div>
                        
                        <div className="py-1">
                          <Link 
                            to="/shop" 
                            onClick={() => setProfileDropdownOpen(false)}
                            className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition font-medium"
                          >
                            <Palette className="w-4 h-4" /> My Palettes
                          </Link>
                        </div>
                        
                        <div className="border-t border-slate-100 py-1">
                          <button
                            onClick={handleLogoutClick}
                            className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 transition text-left font-semibold"
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
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-50 text-brand-600 hover:bg-brand-100 transition duration-200"
                  title="Sign In"
                >
                  <User className="w-4.5 h-4.5" />
                </Link>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-brand-600 hover:bg-slate-50 transition"
              title="Open Shopping Cart"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 min-w-[18px] flex items-center justify-center bg-gradient-to-r from-brand-600 to-pink-600 text-white text-[10px] font-bold rounded-full shadow-md shadow-brand-500/20 animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full text-slate-655 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              {mobileOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md ${
          mobileOpen ? 'max-h-[30rem] border-t border-slate-100 shadow-inner' : 'max-h-0'
        }`}
      >
        <div className="container-x py-4 space-y-1">
          {/* Mobile Search */}
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 gap-2 mb-3">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search paints..."
              className="bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none w-full font-medium"
            />
          </div>

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-brand-600 bg-brand-50/50 border-l-2 border-brand-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="flex items-center gap-2 pt-3 border-t border-slate-100 mt-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm text-slate-605 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all font-medium">
              <Heart className="w-4 h-4" /> Wishlist
            </button>
            {user ? (
              <button 
                onClick={handleLogoutClick}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm text-rose-600 hover:bg-rose-50 transition-all font-semibold"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            ) : (
              <Link 
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm text-slate-605 text-slate-600 hover:text-brand-600 hover:bg-slate-50 transition-all font-medium"
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
