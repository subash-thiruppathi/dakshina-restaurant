import React from 'react';
import { Star, Award, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/menuData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 relative bg-[#09090b] text-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold flex items-center justify-center gap-2">
            <Award className="w-4 h-4" />
            Critics & Connoisseurs
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Acclaimed by the <span className="text-gold-gradient italic">World's Finest Palates</span>
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1 text-sm text-[#d4af37]">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
              ))}
            </div>
            <span className="text-white font-bold font-serif">4.98 / 5.0</span>
            <span className="text-[#888] text-xs">(Over 1,400 Epicurean Reviews)</span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Gold Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#787163] uppercase tracking-wider">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base font-serif italic text-[#ded7c8] leading-relaxed">
                  {review.highlight}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-4">
                <div>
                  <h4 className="font-serif text-sm font-bold text-white group-hover:text-[#fce09c] transition-colors">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-[#a8a192] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#d4af37]" /> {review.source}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
