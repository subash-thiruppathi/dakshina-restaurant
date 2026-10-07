import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Heart, Shield } from 'lucide-react';

export default function Footer({ onOpenReservation, onOpenMenu }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#080604] border-t border-[#d4af37]/20 pt-16 pb-12 text-[#9a8e7e] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter / Society Callout */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 mb-16 border border-[#d4af37]/25 relative overflow-hidden bg-[#120e08]">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                The Dakshin Connoisseur Circle
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Receive Seasonal Festival Menus & Private Feasts
              </h3>
              <p className="text-xs sm:text-sm text-[#baa998]">
                Be the first to reserve seats for authentic Onam Sadya, Diwali Royal Banquets, and rare Western Ghats spice harvests.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-[#1b140d] border border-[#d4af37]/40 text-[#fce09c] text-xs font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>Vanakkam. You are now part of the Dakshin Circle.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your personal email..."
                    className="flex-1 px-4 py-3 rounded-xl bg-[#1a130b] border border-white/10 text-xs text-white placeholder-[#786c5f] focus:outline-none focus:border-[#d4af37]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-gold-gradient text-[#090704] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer flex items-center gap-1 shrink-0"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Brand & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#17110b]">
                <span className="text-[#d4af37] font-serif text-lg font-bold">द</span>
              </div>
              <span className="font-serif text-xl tracking-[0.2em] font-bold text-white">DAKSHINA</span>
            </div>
            <p className="text-xs text-[#8c8072] leading-relaxed">
              Royal South Indian gastronomy, cast-iron hearth roasts, and single-estate spices curated for the discerning palate.
            </p>
            <p className="text-[11px] text-[#d4af37] tracking-wider uppercase font-semibold">
              42, Khader Nawaz Khan Road, Chennai, TN
            </p>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Culinary</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#specials" className="hover:text-[#fce09c] transition-colors">Royal Curations</a></li>
              <li><a href="#menu" className="hover:text-[#fce09c] transition-colors">Heritage Tiffins & Curries</a></li>
              <li><a href="#philosophy" className="hover:text-[#fce09c] transition-colors">The Sacred Hearth</a></li>
              <li><button onClick={onOpenReservation} className="hover:text-[#fce09c] transition-colors cursor-pointer text-left">Banana Leaf Booking</button></li>
            </ul>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Hospitality</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#location" className="hover:text-[#fce09c] transition-colors">White Glove Valet</a></li>
              <li><a href="#location" className="hover:text-[#fce09c] transition-colors">Private Maharaja Salons</a></li>
              <li><a href="#reviews" className="hover:text-[#fce09c] transition-colors">Michelin Reviews</a></li>
              <li><span className="text-[#baa998]">Traditional Attire Welcome</span></li>
            </ul>
          </div>

          {/* Concierge */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Concierge</h4>
            <p className="text-xs text-[#8c8072]">Direct dining reservations & catering bookings:</p>
            <p className="text-sm font-serif font-bold text-[#fce09c]">+91 (44) 2827 0198</p>
            <p className="text-xs text-[#8c8072]">concierge@dakshinadining.com</p>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#706456] gap-4">
          <p>© 2026 DAKSHINA Royal South Indian Gastronomy. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with sacred heritage & spices in Chennai.
          </p>
        </div>

      </div>
    </footer>
  );
}
