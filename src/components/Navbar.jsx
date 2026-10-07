import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Phone, Menu, X, Sparkles, Clock, Flame } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-gold py-3 shadow-2xl border-b border-[#d4af37]/25 bg-[#0d0a07]/95'
            : 'bg-gradient-to-b from-[#0d0a07]/95 via-[#0d0a07]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group text-left">
              <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#17110c] group-hover:border-[#f5c754] group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <span className="text-[#d4af37] font-serif text-xl font-bold tracking-widest">द</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl tracking-[0.25em] font-semibold text-white group-hover:text-[#f8d87a] transition-colors">
                    DAKSHINA
                  </span>
                </div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#d4af37] font-medium">
                  Royal South Indian Gastronomy
                </p>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] text-[#d8cfbe]">
              <a href="#specials" className="hover:text-[#fce09c] transition-colors font-medium">
                Royal Curations
              </a>
              <a href="#menu" className="hover:text-[#fce09c] transition-colors font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                Heritage Menu
              </a>
              <a href="#philosophy" className="hover:text-[#fce09c] transition-colors font-medium">
                The Sacred Hearth
              </a>
              <a href="#reviews" className="hover:text-[#fce09c] transition-colors font-medium">
                Accolades
              </a>
              <a href="#location" className="hover:text-[#fce09c] transition-colors font-medium">
                Hours & Valet
              </a>
            </div>

            {/* Actions: Table Booking & Online Ordering Cart */}
            <div className="flex items-center gap-3">
              {/* Concierge Call */}
              <a
                href="tel:+914428270198"
                className="hidden xl:flex items-center gap-2 text-xs text-[#b8ad9c] hover:text-[#d4af37] transition-colors pr-2"
                title="Direct VIP Concierge Line"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="tracking-wider">+91 (44) 2827 0198</span>
              </a>

              {/* Reserve Table Button */}
              <button
                onClick={onOpenReservation}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-semibold text-[#fce09c] border border-[#d4af37]/70 rounded-full hover:bg-[#d4af37]/15 hover:border-[#d4af37] transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)] active:scale-95 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                Reserve Table
              </button>

              {/* Order Online / Cart Drawer Button */}
              <button
                onClick={onOpenCart}
                className="relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gold-gradient text-[#090704] font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 transition-all active:scale-95 cursor-pointer"
                aria-label="View Order Bag"
              >
                <ShoppingBag className="w-4 h-4 text-[#090704]" />
                <span className="hidden sm:inline">Order Feast</span>
                {cartCount > 0 && (
                  <span className="bg-[#090704] text-[#fce09c] text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border border-[#d4af37] animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#d4af37] hover:bg-[#1f1710] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-gold border-b border-[#d4af37]/25 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top duration-300 bg-[#0d0a07]">
            <div className="flex flex-col space-y-3 text-sm tracking-widest uppercase">
              <a
                href="#specials"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#ece4d0] hover:text-[#d4af37] py-2 border-b border-white/5"
              >
                Royal Curations
              </a>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#ece4d0] hover:text-[#d4af37] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>Heritage Menu</span>
                <span className="text-[10px] bg-[#d4af37]/20 text-[#fce09c] px-2 py-0.5 rounded-full">Explore</span>
              </a>
              <a
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#ece4d0] hover:text-[#d4af37] py-2 border-b border-white/5"
              >
                The Sacred Hearth & Spices
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#ece4d0] hover:text-[#d4af37] py-2 border-b border-white/5"
              >
                Guest Accolades
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#ece4d0] hover:text-[#d4af37] py-2"
              >
                Hours & Valet
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-2.5 rounded-lg border border-[#d4af37] text-[#fce09c] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#d4af37]" />
                Book Table / Banana Leaf Feast
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-2.5 rounded-lg bg-gold-gradient text-[#090704] text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                View Order Feast ({cartCount})
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
