import React, { useState } from 'react'
import { X, Minus, Plus, Trash2, ShoppingBag, CreditCard, Lock, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart 
}) {
  const [checkoutStep, setCheckoutStep] = useState('cart') // 'cart' | 'checkout' | 'success'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shippingThreshold = 150
  const isFreeShipping = subtotal >= shippingThreshold
  const shippingNeeded = shippingThreshold - subtotal

  const handleCheckoutSubmit = (e) => {
    e.preventDefault()
    setCheckoutStep('success')
  }

  const handleSuccessClose = () => {
    onClearCart()
    setCheckoutStep('cart')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-500 animate-fade-in"
        onClick={checkoutStep === 'success' ? handleSuccessClose : onClose}
      />

      {/* Drawer Container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-500 ease-in-out translate-x-0 animate-slide-left">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShoppingBag size={20} className="text-brand-600" />
              {checkoutStep === 'cart' && 'Shopping Cart'}
              {checkoutStep === 'checkout' && 'Secure Checkout'}
              {checkoutStep === 'success' && 'Order Confirmed!'}
            </h2>
            <button 
              onClick={checkoutStep === 'success' ? handleSuccessClose : onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Checkout Steps */}

          {/* STEP 1: CART LIST */}
          {checkoutStep === 'cart' && (
            <>
              {/* Free Shipping Promo */}
              {cartItems.length > 0 && (
                <div className="bg-slate-50 px-6 py-3 border-b border-slate-100">
                  {isFreeShipping ? (
                    <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 justify-center">
                      🎉 You qualify for <strong>FREE shipping</strong> on this order!
                    </p>
                  ) : (
                    <div className="space-y-1.5">
                      <p className="text-xs text-slate-600 text-center">
                        Add <strong className="text-brand-700">${shippingNeeded.toFixed(2)}</strong> more for <strong>FREE Shipping</strong>.
                      </p>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-brand-600 h-full rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((subtotal / shippingThreshold) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-400">
                      <ShoppingBag size={28} />
                    </div>
                    <h3 className="font-bold text-slate-800 text-base mb-1">Your cart is empty</h3>
                    <p className="text-sm text-slate-500 max-w-[240px] mb-6">Explore our curated collection of premium paints to color your space.</p>
                    <button 
                      onClick={onClose}
                      className="btn-primary py-2.5 px-6 text-sm"
                    >
                      Browse Paints
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div 
                      key={item.product.id}
                      className="flex items-center gap-4 py-3 border-b border-slate-100 last:border-0"
                    >
                      {/* Product Image */}
                      <div className={`w-18 h-18 rounded-xl overflow-hidden bg-gradient-to-br ${item.product.color} flex-shrink-0 p-1`}>
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover rounded-lg shadow-sm"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-slate-850 hover:text-brand-600 transition truncate">
                          <Link to={`/product/${item.product.id}`} onClick={onClose}>
                            {item.product.name}
                          </Link>
                        </h4>
                        <p className="text-xs text-slate-450 mt-0.5">{item.product.brand} · {item.product.finish}</p>
                        
                        {/* Quantity controls */}
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border border-slate-200 rounded-full bg-slate-50 p-0.5">
                            <button 
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-white transition"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-bold text-slate-800 px-1 w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-white transition"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-xs font-semibold text-rose-500 hover:text-rose-700 transition flex items-center gap-1"
                          >
                            <Trash2 size={12} /> Remove
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right flex-shrink-0">
                        <span className="font-bold text-sm text-slate-800">${(item.product.price * item.quantity).toFixed(2)}</span>
                        {item.quantity > 1 && (
                          <span className="block text-[10px] text-slate-400 font-medium">${item.product.price} each</span>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Summary Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-slate-100 p-6 bg-slate-50/50 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-sm text-slate-500">
                      <span>Subtotal</span>
                      <span className="font-semibold text-slate-800">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-500">
                      <span>Shipping</span>
                      <span>{isFreeShipping ? <span className="text-emerald-600 font-semibold">FREE</span> : '$12.00'}</span>
                    </div>
                    <div className="border-t border-slate-200/60 pt-3 flex justify-between text-base font-bold text-slate-900">
                      <span>Estimated Total</span>
                      <span className="text-brand-700">${(isFreeShipping ? subtotal : subtotal + 12).toFixed(2)}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setCheckoutStep('checkout')}
                    className="w-full btn-primary py-3 px-6 font-bold justify-center shadow-lg"
                  >
                    Proceed to Checkout <ArrowRight size={16} />
                  </button>

                  <div className="flex items-center justify-center gap-3 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1"><Lock size={12} /> Secure 256-bit SSL</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><CreditCard size={12} /> Visa, MC, Amex</span>
                  </div>
                </div>
              )}
            </>
          )}

          {/* STEP 2: CHECKOUT INFO */}
          {checkoutStep === 'checkout' && (
            <form onSubmit={handleCheckoutSubmit} className="flex-1 flex flex-col justify-between">
              <div className="p-6 space-y-5 overflow-y-auto">
                <div className="bg-brand-50/50 border border-brand-100/50 rounded-xl p-3.5 flex items-center gap-3">
                  <Lock size={18} className="text-brand-600 flex-shrink-0" />
                  <p className="text-xs text-brand-800">
                    Your details are protected using industry-grade SSL encryption.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider">Shipping Details</h3>
                  
                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-500 transition"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="johndoe@example.com"
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Delivery Address</label>
                      <textarea 
                        required 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="123 Creative Studio, Paint St, Design District"
                        rows={3}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-500 transition resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider">Order Summary</h3>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2 text-sm text-slate-600">
                    {cartItems.map(item => (
                      <div key={item.product.id} className="flex justify-between">
                        <span className="truncate max-w-[200px]">{item.product.name} (x{item.quantity})</span>
                        <span className="font-medium text-slate-800">${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="border-t border-slate-200 pt-2 flex justify-between font-bold text-slate-850">
                      <span>Total Due</span>
                      <span>${(isFreeShipping ? subtotal : subtotal + 12).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkout Footer */}
              <div className="border-t border-slate-100 p-6 bg-slate-50/50 space-y-3">
                <button 
                  type="submit" 
                  className="w-full btn-primary py-3.5 px-6 font-bold justify-center shadow-lg"
                >
                  Place Order & Pay
                </button>
                <button 
                  type="button" 
                  onClick={() => setCheckoutStep('cart')}
                  className="w-full text-center text-sm font-semibold text-slate-500 hover:text-slate-700 transition"
                >
                  Back to Cart
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: SUCCESS MODAL */}
          {checkoutStep === 'success' && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-emerald-500 animate-scale-in">
                <CheckCircle size={44} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Thank you, {name}!</h2>
              <p className="text-slate-500 font-medium mb-1">Your order has been placed successfully.</p>
              <p className="text-xs text-slate-400 max-w-[280px] mb-8">
                We have sent a confirmation email to <strong>{email}</strong>. Your premium paints will arrive in 1-2 business days.
              </p>
              <button 
                onClick={handleSuccessClose}
                className="btn-primary px-8 py-3 font-bold"
              >
                Continue Shopping
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
