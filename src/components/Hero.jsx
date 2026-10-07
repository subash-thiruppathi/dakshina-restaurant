import React from 'react';
import { Sparkles, Calendar, ArrowRight, Star, Clock, Flame, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenReservation, onOpenMenu, onQuickAddHeroItem }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Cinematic Dark Background with Warm South Indian Hearth Glow */}
      <div className="absolute inset-0 bg-[#0b0907]">
        {/* Visual Warm Backdrop Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Rich Radial Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0907] via-[#0b0907]/80 to-[#0b0907]/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d4af37]/12 rounded-full blur-[140px] pointer-events-none glow-warm" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#b4421b]/15 rounded-full blur-[130px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Compelling South Indian Sensory Narrative & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Michelin & Live Status Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-card border border-[#d4af37]/40 shadow-[0_0_20px_rgba(212,175,55,0.15)] bg-[#17110c]/80">
              <span className="flex items-center gap-1 text-[#fce09c] text-xs font-semibold tracking-wider uppercase">
                <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                Michelin Guide 2026 Recommended
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
              <span className="text-[11px] text-[#cfc7b4] tracking-wide flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#d4af37]" /> Royal Hearth Active Tonight
              </span>
            </div>

            {/* Headline with High-Impact South Indian Craving Trigger */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08]">
                Where Sacred Spices & Golden Ghee Spark an <span className="text-gold-gradient italic font-serif">Unstoppable</span> Craving.
              </h1>
              <p className="text-base sm:text-lg text-[#ded5c5] max-w-xl font-light leading-relaxed">
                Experience the royal culinary traditions of Chettinad, Malabar, Mysore, and the Coromandel coast. Parchment-crisp ghee roast dosas, sizzling Tellicherry pepper chukka, clay-pot dum biryani, and tableside brass filter coffee.
              </p>
            </div>

            {/* Sensory Taste Notes Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                'Pure A2 Gir Cow Ghee',
                'Tellicherry Stone-Ground Pepper',
                'Slow Clay-Pot Dum',
                'Fresh First-Press Coconut Milk',
                'Estate Filter Coffee Decoction'
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wider text-[#d4af37] px-3 py-1 rounded-md bg-[#1b140e]/90 border border-[#d4af37]/25 flex items-center gap-1.5 font-medium"
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {/* Order Online Instant CTA */}
              <button
                onClick={onOpenMenu}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold-gradient text-[#090704] font-bold text-sm uppercase tracking-widest shadow-[0_10px_35px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <span>Order Royal Feast Online</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Reserve Table CTA */}
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-[#d4af37]/70 text-[#fce09c] hover:bg-[#d4af37]/15 hover:border-[#d4af37] font-semibold text-sm uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)] active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#d4af37]" />
                Book Banana Leaf Table
              </button>
            </div>

            {/* Social Trust Metrics */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-2xl font-serif font-bold text-white">4.99 ★</p>
                <p className="text-[11px] text-[#a89e8f] uppercase tracking-wider">Over 1,800 Diners</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-white">100% A2</p>
                <p className="text-[11px] text-[#a89e8f] uppercase tracking-wider">Grass-Fed Churned Ghee</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#d4af37]">20 Mins</p>
                <p className="text-[11px] text-[#a89e8f] uppercase tracking-wider">Fresh Hearth Delivery</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Floating Sensory Masterpiece Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Subtle Ambient Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#d4af37]/40 via-[#b4421b]/40 to-[#d4af37]/40 blur-xl opacity-60 animate-pulse" />

              <div className="relative rounded-3xl overflow-hidden glass-card border border-[#d4af37]/35 shadow-2xl p-4 text-left bg-[#140f0a]">
                {/* Visual Image with Dish Badge */}
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=85"
                    alt="A2 Gir Cow Ghee Paper Roast Dosa"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0907] via-transparent to-transparent opacity-85" />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#0b0907]/90 border border-[#d4af37]/70 text-[#fce09c] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-md">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      Dakshin Signature
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-[#d4af37] text-[#090704] text-xs font-extrabold uppercase tracking-widest shadow-lg">
                      ₹420
                    </span>
                  </div>

                  {/* Scent & Flavor Profile Preview */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-0.5">Tonight's Star Craving</p>
                    <h3 className="text-xl font-serif font-bold text-white">A2 Gir Cow Ghee Paper Roast Dosa</h3>
                    <p className="text-xs text-[#ded5c5] line-clamp-1">Golden parchment crisp, trio of fresh chutneys & drumstick sambar</p>
                  </div>
                </div>

                {/* Instant Craving Trigger in Hero */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#cfc7b4]">Pairs with Brass Filter Coffee</p>
                    <p className="text-[11px] text-[#9c9180] flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#d4af37]" /> Churned A2 Gir Cow Ghee
                    </p>
                  </div>
                  <button
                    onClick={() => onQuickAddHeroItem('ghee-roast-dosa')}
                    className="px-4 py-2 rounded-xl bg-gold-gradient text-[#090704] text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    Add to Feast
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
