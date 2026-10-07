import React from 'react';
import { Award, Flame, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { CHEF_PHILOSOPHY } from '../data/menuData';

export default function StorySection({ onOpenReservation }) {
  return (
    <section id="philosophy" className="py-24 relative overflow-hidden bg-[#0e0b08] border-t border-[#d4af37]/20 text-[#f4efe6]">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#d4af37]/7 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#b4421b]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Chef Portrait & Plating Shot */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-3xl overflow-hidden glass-card border border-[#d4af37]/45 shadow-2xl relative bg-[#17110b]">
                <img
                  src={CHEF_PHILOSOPHY.image}
                  alt={CHEF_PHILOSOPHY.name}
                  className="w-full h-[460px] object-cover scale-100 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0907] via-transparent to-transparent opacity-80" />

                {/* Floating Award Stamp */}
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <div className="p-3.5 rounded-2xl bg-[#0b0907]/90 border border-[#d4af37]/45 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" /> Chettinad & Travancore Lineage
                    </p>
                    <p className="text-white font-serif font-bold text-base mt-0.5">{CHEF_PHILOSOPHY.name}</p>
                    <p className="text-[11px] text-[#baa998]">{CHEF_PHILOSOPHY.title}</p>
                  </div>
                </div>
              </div>

              {/* Decorative gold frame offset */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full rounded-3xl border border-[#d4af37]/30 -z-10" />
            </div>
          </div>

          {/* Right Column: Culinary Philosophy & Pillars */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b140e] border border-[#d4af37]/40 text-[#d4af37] text-xs uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Sacred Culinary Hearth</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Honoring the Sacred Soul of <span className="text-gold-gradient italic">Dakshin</span> Spices
              </h2>
            </div>

            {/* Chef's Quote Callout */}
            <blockquote className="border-l-2 border-[#d4af37] pl-4 sm:pl-6 italic font-serif text-lg sm:text-xl text-[#f4efe6]/90 leading-relaxed">
              "{CHEF_PHILOSOPHY.quote}"
            </blockquote>

            <p className="text-sm text-[#baa998] leading-relaxed font-light">
              {CHEF_PHILOSOPHY.story}
            </p>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#17110b] p-4 rounded-2xl border border-white/5 space-y-1.5">
                <Flame className="w-5 h-5 text-[#d4af37]" />
                <h4 className="font-serif text-sm font-bold text-white">Cast Iron Hearth</h4>
                <p className="text-[11px] text-[#9c8f80] leading-snug">Heavy seasoned iron skillet cooking locking in roasted Tellicherry pepper and curry leaf aromatics.</p>
              </div>

              <div className="bg-[#17110b] p-4 rounded-2xl border border-white/5 space-y-1.5">
                <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
                <h4 className="font-serif text-sm font-bold text-white">Pure Gir Cow Ghee</h4>
                <p className="text-[11px] text-[#9c8f80] leading-snug">Slow-churned grass-fed A2 ghee giving our paper roast dosas their golden crackle and nutty fragrance.</p>
              </div>

              <div className="bg-[#17110b] p-4 rounded-2xl border border-white/5 space-y-1.5">
                <Sparkles className="w-5 h-5 text-[#d4af37]" />
                <h4 className="font-serif text-sm font-bold text-white">Stone-Ground Batters</h4>
                <p className="text-[11px] text-[#9c8f80] leading-snug">Fermented heirloom rice & urad dal ground in granite mortars daily for cloud-soft idlis and lacy appams.</p>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 rounded-full border border-[#d4af37] text-[#fce09c] hover:bg-[#d4af37]/20 text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer"
              >
                Reserve Banana Leaf Tasting Table
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
