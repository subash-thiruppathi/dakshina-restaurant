import React from 'react';
import { Sparkles, Star, Plus, Flame, Wine, ChevronRight, Eye, Coffee } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';

export default function CuratedSpecials({ onSelectItem, onQuickAdd }) {
  const signatureDishes = MENU_ITEMS.filter((item) => item.isSignature).slice(0, 4);

  return (
    <section id="specials" className="py-24 relative overflow-hidden bg-[#0e0b08] border-t border-[#d4af37]/20 text-[#f4efe6]">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#d4af37]/7 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#b4421b]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b140e] border border-[#d4af37]/40 text-[#d4af37] text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Treasures of Dakshin Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Curated to Spark <span className="text-gold-gradient italic">Irresistible Cravings</span>
          </h2>
          <p className="text-sm sm:text-base text-[#bfaea0] font-light leading-relaxed">
            Four iconic South Indian masterpieces—crisped in golden A2 ghee, slow-seared with Tellicherry black pepper, and bathed in fresh coconut milk.
          </p>
        </div>

        {/* 4 Flagship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {signatureDishes.map((dish) => (
            <div
              key={dish.id}
              className="group glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-[#d4af37]/60 bg-[#140f0a]"
            >
              {/* Image & Badges */}
              <div className="relative h-56 overflow-hidden bg-[#18120c]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140f0a] via-transparent to-transparent opacity-90" />

                {/* Badge top-left */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#0b0907]/90 border border-[#d4af37]/60 text-[#fce09c] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1 shadow-md">
                    <Sparkles className="w-2.5 h-2.5 text-[#d4af37]" />
                    {dish.badge}
                  </span>
                </div>

                {/* Rating top-right */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#0b0907]/85 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 text-[11px] text-[#fce09c] font-semibold">
                  <Star className="w-3 h-3 fill-[#d4af37] text-[#d4af37]" />
                  <span>{dish.rating}</span>
                </div>

                {/* Spice Level or Sensory Notes */}
                <div className="absolute bottom-2.5 left-3 right-3 flex flex-wrap gap-1">
                  <span className="text-[9px] uppercase tracking-wider bg-[#b4421b]/80 backdrop-blur-sm text-[#fce09c] px-2 py-0.5 rounded border border-[#d4af37]/30 font-semibold">
                    {dish.spiceLevel}
                  </span>
                  {dish.sensoryNotes.slice(0, 1).map((note) => (
                    <span
                      key={note}
                      className="text-[9px] uppercase tracking-wider bg-[#0b0907]/75 backdrop-blur-sm text-[#e4dac6] px-2 py-0.5 rounded border border-white/10"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#fce09c] transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <span className="font-serif text-lg font-bold text-[#d4af37] whitespace-nowrap">
                      ₹{dish.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#a89b8d] line-clamp-2 leading-relaxed">
                    {dish.tagline}
                  </p>
                </div>

                {/* Sensory Flavor Meter */}
                <div className="bg-[#1a140d] rounded-xl p-2.5 border border-white/5 space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-[#a89b8d]">
                    <span>Flavor Depth & Masala Richness</span>
                    <span className="text-[#fce09c] font-semibold">{dish.flavorProfile.richness}%</span>
                  </div>
                  <div className="w-full bg-[#271d14] rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-gold-gradient h-1.5 rounded-full transition-all duration-1000"
                      style={{ width: `${dish.flavorProfile.richness}%` }}
                    />
                  </div>
                </div>

                {/* Pairing Teaser */}
                {dish.pairWith && (
                  <div className="text-[11px] text-[#a89d8f] bg-[#120e0a] p-2 rounded-lg border border-[#d4af37]/20 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 truncate">
                      <Coffee className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span className="truncate">Pair: {dish.pairWith.name}</span>
                    </div>
                    <span className="text-[#d4af37] font-semibold text-[10px] shrink-0">+₹{dish.pairWith.price}</span>
                  </div>
                )}

                {/* Actions: View Details & Quick Add */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => onSelectItem(dish)}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-white/15 hover:border-[#d4af37]/60 text-xs font-semibold text-[#ede8df] hover:text-[#fce09c] hover:bg-[#1f170f] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Sensory View</span>
                  </button>

                  <button
                    onClick={() => onQuickAdd(dish)}
                    className="p-2.5 rounded-xl bg-gold-gradient text-[#090704] font-bold shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                    title="Add to Feast Bag"
                    aria-label={`Add ${dish.name} to order`}
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
