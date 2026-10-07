import React from 'react';
import { MapPin, Clock, Car, Phone, Mail, Sparkles, Calendar, ShieldCheck } from 'lucide-react';

export default function LocationSection({ onOpenReservation }) {
  return (
    <section id="location" className="py-24 relative bg-[#0b0907] text-[#f4efe6] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            The Royal Sanctuary
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            An Aristocratic Escape on <span className="text-gold-gradient italic">Khader Nawaz Khan Road</span>
          </h2>
          <p className="text-sm text-[#baa998]">
            Behind hand-carved Chettinad teakwood doors in Nungambakkam, Chennai.
          </p>
        </div>

        {/* 3-Column Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Card 1: Hours */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 bg-[#140f09]">
            <div className="w-10 h-10 rounded-xl bg-[#21170e] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Feast Service Hours</h3>
            <div className="space-y-3 text-xs text-[#ded8cb]">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8e8272]">Lunch & Banana Leaf Thali:</span>
                <span className="font-semibold text-white">11:30 AM – 3:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8e8272]">Evening Royal Dinner:</span>
                <span className="font-semibold text-white">5:30 PM – 11:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8e8272]">Weekend Dum Biryani Special:</span>
                <span className="font-semibold text-white">12:00 PM – Midnight</span>
              </div>
              <div className="flex justify-between pt-1 text-[11px] text-[#d4af37]">
                <span>Monday:</span>
                <span>Cellar Rest & Private Banquets</span>
              </div>
            </div>
          </div>

          {/* Card 2: Address & Valet */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 bg-[#140f09]">
            <div className="w-10 h-10 rounded-xl bg-[#21170e] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Arrival & Valet</h3>
            <div className="space-y-3 text-xs text-[#ded8cb]">
              <p className="text-white font-medium">
                42, Khader Nawaz Khan Road<br />
                Nungambakkam, Chennai, TN 600006
              </p>
              <div className="p-3 rounded-xl bg-[#1b140e] border border-[#d4af37]/25 text-[11px] text-[#c7bead] space-y-1">
                <p className="font-semibold text-[#fce09c] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Complimentary White Glove Valet
                </p>
                <p>Curbside attendant available immediately upon arrival at our teakwood entrance.</p>
              </div>
              <p className="text-[11px] text-[#8e8272]">
                <strong className="text-[#d8cfbe]">Dress Code:</strong> Smart Elegant. Traditional Indian ethnic attire welcomed and celebrated.
              </p>
            </div>
          </div>

          {/* Card 3: VIP Concierge & Private Dining */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 bg-[#140f09]">
            <div className="w-10 h-10 rounded-xl bg-[#21170e] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Private Concierge</h3>
            <div className="space-y-3 text-xs text-[#ded8cb]">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <a href="tel:+914428270198" className="hover:text-[#d4af37] transition-colors font-medium">
                  +91 (44) 2827 0198 (VIP Desk)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <a href="mailto:concierge@dakshinadining.com" className="hover:text-[#d4af37] transition-colors font-medium">
                  concierge@dakshinadining.com
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenReservation}
                  className="w-full py-3 rounded-xl bg-gold-gradient text-[#090704] font-bold text-xs uppercase tracking-widest shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Banana Leaf Table</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
