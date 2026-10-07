import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Clock, Utensils, CreditCard, Lock } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, orderDetails, onOrderComplete }) {
  if (!isOpen) return null;

  const [step, setStep] = useState('form'); // 'form' | 'success'
  const [formData, setFormData] = useState({
    name: 'Vikram Chandrasekhar',
    phone: '+91 98401 23456',
    email: 'vikram.chandra@dakshinmail.com',
    address: '42, Khader Nawaz Khan Road, Nungambakkam, Chennai, TN 600006',
    notes: 'Please pack hot sambar and gunpowder podi ghee separately.',
    paymentMethod: 'upi'
  });

  const [orderId, setOrderId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrderId = `DAK-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(newOrderId);
    setStep('success');
    onOrderComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={step === 'success' ? onClose : undefined} />

      <div className="relative w-full max-w-xl bg-[#130e09] border border-[#d4af37]/45 rounded-3xl overflow-hidden shadow-2xl z-10 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1c150e] text-[#a89d8f] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#d4af37] uppercase tracking-widest font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dakshin Royal Dispatch</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-white">Finalize Your Royal Feast</h2>
              <p className="text-xs text-[#a39788]">
                Order total: <span className="text-[#d4af37] font-bold font-serif text-sm">₹{orderDetails?.total || '0'}</span> ({orderDetails?.orderType === 'delivery' ? 'Insulated Thermal Dispatch' : 'Curbside Valet Pickup'})
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b140e] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1">Mobile (SMS Delivery Updates)</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b140e] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1">Email for Receipt</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b140e] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {orderDetails?.orderType === 'delivery' ? (
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1">Delivery Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b140e] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              ) : (
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1">Vehicle Details (For Valet Hand-off)</label>
                  <input
                    type="text"
                    defaultValue="White BMW 5 Series - Plate #TN 09 BX 4291"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b140e] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              )}

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1">Special Culinary or Chutney Instructions</label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b140e] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Payment Selector */}
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1.5">Payment Method</label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'upi', label: 'UPI / GPay / Paytm' },
                    { id: 'card', label: 'Card / NetBanking' },
                    { id: 'cod', label: 'Pay on Hand-off' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: p.id })}
                      className={`py-2 px-3 rounded-xl border text-center font-semibold transition-all cursor-pointer ${
                        formData.paymentMethod === p.id
                          ? 'border-[#d4af37] bg-[#d4af37]/20 text-[#fce09c]'
                          : 'border-white/10 bg-[#18110a] text-[#8e8272] hover:text-white'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gold-gradient text-[#090704] font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Authorize & Transmit Feast (₹{orderDetails?.total || '0'})</span>
                </button>
                <p className="text-[10px] text-center text-[#786c5f] mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" /> Encrypted 256-Bit UPI & Payment Security
                </p>
              </div>
            </form>

          </div>
        ) : (
          /* Confirmation State */
          <div className="p-8 sm:p-10 text-center space-y-6 animate-in zoom-in-95 duration-400">
            <div className="w-20 h-20 rounded-full bg-[#1c150e] border-2 border-[#d4af37] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              <CheckCircle2 className="w-10 h-10 text-[#d4af37]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Feast Firing at the Hearth
              </span>
              <h2 className="text-3xl font-serif font-bold text-white">Your Royal Feast is Underway</h2>
              <p className="text-xs text-[#cdc5b3] max-w-sm mx-auto">
                Chef Meenakshi Sundaram's hearth team has received your ticket and is currently spreading parchment dosas, roasting spices, and preparing your order.
              </p>
            </div>

            {/* Tracking Receipt Card */}
            <div className="bg-[#1b140e] p-4 rounded-2xl border border-white/10 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8e8272]">Order Reference:</span>
                <span className="text-[#fce09c] font-bold font-mono">{orderId}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8e8272]">Guest:</span>
                <span className="text-white font-medium">{formData.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8e8272]">Estimated Dispatch:</span>
                <span className="text-[#d4af37] font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 20-30 Minutes
                </span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-serif">
                <span className="text-white font-bold">Total Paid / Billed:</span>
                <span className="text-[#d4af37] font-bold">₹{orderDetails?.total}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-2xl bg-gold-gradient text-[#090704] font-bold text-xs uppercase tracking-widest shadow-lg hover:brightness-110 transition-all cursor-pointer"
            >
              Return to Dakshina Experience
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
