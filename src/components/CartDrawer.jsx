import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Sparkles, Clock, Coffee, UtensilsCrossed } from 'lucide-react';
import { CRAVING_ADDONS } from '../data/menuData';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onAddAddon,
  onProceedToCheckout
}) {
  const [orderType, setOrderType] = useState('delivery'); // 'delivery' | 'pickup'
  const [tipPercent, setTipPercent] = useState(10);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, entry) => {
    let itemTotal = entry.item.price * entry.quantity;
    if (entry.includePairing) {
      itemTotal += entry.includePairing.price;
    }
    return acc + itemTotal;
  }, 0);

  const deliveryFee = orderType === 'delivery' ? (subtotal >= 1000 ? 0 : 80) : 0;
  const tipAmount = Math.round((subtotal * tipPercent) / 100);
  const tax = Math.round(subtotal * 0.05); // 5% GST
  const total = subtotal + deliveryFee + tipAmount + tax;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#120e09] border-l border-[#d4af37]/35 shadow-2xl flex flex-col text-left">
          
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#19130d]/90">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-gold-gradient text-[#090704]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-white">Your Royal Feast Bag</h2>
                <p className="text-[11px] text-[#baa998]">
                  {cartItems.length} {cartItems.length === 1 ? 'curation' : 'curations'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-[#a89d8f] hover:text-white transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery / Pickup Mode Toggle */}
          <div className="p-4 bg-[#140f0a] border-b border-white/5">
            <div className="grid grid-cols-2 p-1 rounded-xl bg-[#1d160f] border border-white/10 text-xs font-semibold">
              <button
                onClick={() => setOrderType('delivery')}
                className={`py-2 rounded-lg transition-all cursor-pointer ${
                  orderType === 'delivery'
                    ? 'bg-[#d4af37] text-[#090704] shadow'
                    : 'text-[#9c8f80] hover:text-white'
                }`}
              >
                Hearth Hot Delivery
              </button>
              <button
                onClick={() => setOrderType('pickup')}
                className={`py-2 rounded-lg transition-all cursor-pointer ${
                  orderType === 'pickup'
                    ? 'bg-[#d4af37] text-[#090704] shadow'
                    : 'text-[#9c8f80] hover:text-white'
                }`}
              >
                Curbside Valet Pickup
              </button>
            </div>
            <p className="text-[11px] text-[#8e8272] mt-2 flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#d4af37]" />
              {orderType === 'delivery'
                ? 'Dispatched in insulated steam-vent thermal carriers (25-35 min)'
                : 'Ready hot for valet hand-off at front drive (15-20 min)'}
            </p>
          </div>

          {/* Scrollable Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#1c150e] border border-[#d4af37]/35 flex items-center justify-center mx-auto text-[#d4af37]">
                  <UtensilsCrossed className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">Your Feast Bag is Empty</h3>
                <p className="text-xs text-[#8c8072] max-w-xs mx-auto">
                  Explore our menu to satisfy your cravings with crisp A2 ghee roast dosas, Tellicherry pepper chukka, and fragrant biryanis.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs uppercase tracking-widest font-semibold text-[#fce09c] border border-[#d4af37] rounded-full hover:bg-[#d4af37]/15 transition-colors cursor-pointer"
                >
                  Explore Heritage Menu
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-3">
                  {cartItems.map((entry, index) => (
                    <div
                      key={`${entry.item.id}-${index}`}
                      className="bg-[#17110b] border border-white/5 rounded-2xl p-3.5 space-y-2.5 relative group hover:border-[#d4af37]/35 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={entry.item.image}
                          alt={entry.item.name}
                          className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10"
                        />
                        <div className="flex-1 min-w-0 text-left">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-serif text-sm font-bold text-white truncate">
                              {entry.item.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(index)}
                              className="text-[#6d6154] hover:text-red-400 p-1 cursor-pointer"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <p className="text-xs font-serif font-bold text-[#d4af37] mt-0.5">
                            ₹{entry.item.price * entry.quantity}
                          </p>

                          {/* Spice / Custom notes */}
                          {entry.doneness && (
                            <p className="text-[10px] text-[#c4b6a4] mt-1 bg-[#21170e] px-2 py-0.5 rounded inline-block">
                              {entry.doneness}
                            </p>
                          )}
                          {entry.specialNotes && (
                            <p className="text-[10px] text-[#938575] italic mt-0.5">
                              "{entry.specialNotes}"
                            </p>
                          )}

                          {/* Paired item */}
                          {entry.includePairing && (
                            <div className="mt-2 text-[10px] text-[#d4af37] bg-[#21170e] p-1.5 rounded-lg border border-[#d4af37]/25 flex items-center justify-between">
                              <span className="flex items-center gap-1">
                                <Coffee className="w-3 h-3" /> {entry.includePairing.name}
                              </span>
                              <span className="font-bold">+₹{entry.includePairing.price}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between pt-2 border-t border-white/5">
                        <span className="text-[11px] text-[#8e8272]">Quantity</span>
                        <div className="flex items-center gap-2 bg-[#21170e] px-2 py-1 rounded-lg border border-white/10">
                          <button
                            onClick={() => onUpdateQuantity(index, entry.quantity - 1)}
                            className="text-[#aaa] hover:text-white p-0.5 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-white px-2">{entry.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(index, entry.quantity + 1)}
                            className="text-[#aaa] hover:text-white p-0.5 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Impulse Craving Add-ons Section */}
                <div className="bg-[#150f0a] border border-[#d4af37]/25 rounded-2xl p-3.5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#d4af37] font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Elevate Your Royal Feast</span>
                  </div>
                  <div className="space-y-2">
                    {CRAVING_ADDONS.map((addon) => (
                      <div
                        key={addon.id}
                        className="flex items-center justify-between gap-3 bg-[#1c150e] p-2 rounded-xl border border-white/5 hover:border-[#d4af37]/35 transition-colors"
                      >
                        <img
                          src={addon.image}
                          alt={addon.name}
                          className="w-10 h-10 rounded-lg object-cover border border-white/10 shrink-0"
                        />
                        <div className="flex-1 min-w-0 text-left">
                          <p className="text-xs font-medium text-white truncate">{addon.name}</p>
                          <p className="text-[11px] text-[#d4af37] font-semibold">₹{addon.price}</p>
                        </div>
                        <button
                          onClick={() => onAddAddon(addon)}
                          className="px-2.5 py-1 rounded-lg bg-[#d4af37]/20 hover:bg-[#d4af37] text-[#fce09c] hover:text-[#090704] text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap"
                        >
                          + Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gratuity Selector */}
                <div className="bg-[#16100a] p-3.5 rounded-2xl border border-white/5 space-y-2 text-left">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#a89d8f]">Service & Staff Gratuity:</span>
                    <span className="text-[#fce09c] font-bold">₹{tipAmount}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[5, 10, 15, 20].map((pct) => (
                      <button
                        key={pct}
                        onClick={() => setTipPercent(pct)}
                        className={`py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          tipPercent === pct
                            ? 'bg-[#d4af37] text-[#090704] font-bold shadow'
                            : 'bg-[#21170e] text-[#a89d8f] hover:text-white'
                        }`}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary Totals */}
                <div className="bg-[#16100a] p-4 rounded-2xl border border-white/5 space-y-2 text-xs text-[#a89d8f]">
                  <div className="flex justify-between">
                    <span>Curations Subtotal</span>
                    <span className="text-white font-medium">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{orderType === 'delivery' ? 'Insulated Thermal Dispatch' : 'Curbside Valet'}</span>
                    <span className="text-white font-medium">
                      {deliveryFee === 0 ? 'FREE (Above ₹1000)' : `₹${deliveryFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Staff Gratuity ({tipPercent}%)</span>
                    <span className="text-white font-medium">₹{tipAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (5%)</span>
                    <span className="text-white font-medium">₹{tax}</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between items-baseline text-white">
                    <span className="font-serif text-sm font-bold uppercase tracking-wider">Total</span>
                    <span className="font-serif text-xl font-bold text-[#d4af37]">₹{total}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout CTA */}
          {cartItems.length > 0 && (
            <div className="p-4 bg-[#18120b] border-t border-white/10">
              <button
                onClick={() => onProceedToCheckout({ total, subtotal, tipAmount, tax, deliveryFee, orderType })}
                className="w-full py-3.5 px-6 rounded-2xl bg-gold-gradient text-[#090704] font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-between cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-sm font-extrabold">₹{total}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
