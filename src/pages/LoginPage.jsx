import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Palette, Lock, Mail, ArrowRight, UserCheck } from 'lucide-react'

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      if (onLogin) {
        onLogin({
          name: email.split('@')[0].split('.').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Valued Designer',
          email: email
        })
      }
      navigate('/')
    }, 1200)
  }

  const handleDemoLogin = () => {
    setIsLoading(true)
    setEmail('designer@chromahaus.com')
    setPassword('password123')

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      if (onLogin) {
        onLogin({
          name: 'Demo Designer',
          email: 'designer@chromahaus.com'
        })
      }
      navigate('/')
    }, 800)
  }

  return (
    <div className="page-enter min-h-[85vh] flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl" />

      {/* Login Box */}
      <div className="max-w-md w-full space-y-8 bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-xl z-10">
        
        {/* Logo and Headings */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-pink-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-slate-900">Chroma</span>
              <span className="text-brand-600">Haus</span>
            </span>
          </Link>
          <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Access your curated paint projects and palettes.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
          <div className="space-y-4">
            
            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full border border-slate-200 rounded-xl pl-11 pr-4 py-2.5 text-sm outline-none focus:border-brand-500 transition bg-slate-50/50 focus:bg-white"
                />
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-slate-200 rounded-xl pl-11 pr-4 py-2.5 text-sm outline-none focus:border-brand-500 transition bg-slate-50/50 focus:bg-white"
                />
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <label className="flex items-center gap-2 text-slate-650 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-350 text-brand-650 focus:ring-brand-550" />
              <span>Remember me</span>
            </label>
            <a href="#" className="font-bold text-brand-600 hover:text-brand-700 transition">
              Forgot password?
            </a>
          </div>

          {/* Submit Actions */}
          <div className="space-y-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-3 px-6 font-bold justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing In...' : 'Sign In'} <ArrowRight size={16} />
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100" />
              </div>
              <span className="relative px-3 bg-white text-xs text-slate-400 uppercase tracking-widest font-semibold">
                Or Quick Access
              </span>
            </div>

            {/* Demo Access Button */}
            <button
              type="button"
              onClick={handleDemoLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 rounded-full border border-brand-200 hover:border-brand-500 bg-brand-50/50 hover:bg-brand-50 text-brand-750 font-bold px-6 py-3 transition duration-300 disabled:opacity-50 shadow-sm"
            >
              <UserCheck size={16} />
              {isLoading ? 'Loading Demo...' : 'Demo Professional Login'}
            </button>

          </div>
        </form>

        {/* Footer info */}
        <p className="text-center text-xs text-slate-400 pt-4">
          Demo Credentials: <strong className="text-slate-600">designer@chromahaus.com</strong> / <strong className="text-slate-600">password123</strong>
        </p>

      </div>
    </div>
  )
}
