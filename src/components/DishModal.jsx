import React, { useState } from 'react';
import { X, Star, Clock, Flame, Plus, Minus, Check, Sparkles, Coffee } from 'lucide-react';

export default function DishModal({ item, onClose, onAddToCart }) {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedSpice, setSelectedSpice] = useState('Authentic Dakshin Tradition (Chef Recommended)');
  const [gheePreference, setGheePreference] = useState('Classic A2 Gir Cow Ghee');
  const [includePairing, setIncludePairing] = useState(false);
  const [specialNotes, setSpecialNotes] = useState('');

  const spiceOptions = [
    'Gentle & Mild (Subtle aromatics)',
    'Authentic Dakshin Tradition (Chef Recommended)',
    'Fiery Karaikudi / Guntur Heat 🌶️🌶️🌶️'
  ];

  const handleAdd = () => {
    onAddToCart({
      item,
      quantity,
      doneness: selectedSpice,
      specialNotes: `${gheePreference}${specialNotes ? ` | ${specialNotes}` : ''}`,
      includePairing: includePairing && item.pairWith ? item.pairWith : null
    });
    onClose();
  };

  const totalPrice = (item.price * quantity) + (includePairing && item.pairWith ? item.pairWith.price : 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Backdrop Click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#130e09] border border-[#d4af37]/45 rounded-3xl overflow-hidden shadow-2xl z-10 text-left my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#0b0907]/80 border border-white/20 text-white hover:text-[#d4af37] hover:scale-105 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Big Mouth-Watering Visual */}
          <div className="relative h-64 md:h-full min-h-[300px] bg-[#1a130c] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#130e09] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#130e09]" />

            {/* Badges on image */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="px-3 py-1 rounded-full bg-[#0b0907]/90 border border-[#d4af37] text-[#fce09c] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                {item.badge}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#b4421b]/90 text-white text-[11px] font-bold tracking-wider backdrop-blur-md">
                {item.spiceLevel}
              </span>
            </div>

            {/* Prep Time pill */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#0b0907]/90 px-3 py-1.5 rounded-full border border-white/10 text-xs text-[#d8d0bf]">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Hearth-fired fresh in {item.prepTime}</span>
            </div>
          </div>

          {/* Right Column: Detailed Sensory Profile & Customization */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs text-[#d4af37] uppercase tracking-widest font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SOUTH INDIAN ROYAL SELECTION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                {item.name}
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-2xl font-serif font-bold text-[#d4af37]">
                  ₹{item.price}
                </span>
                <div className="flex items-center gap-1 text-xs text-[#fce09c] bg-[#1f160e] px-2.5 py-0.5 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                  <span>{item.rating} ({item.reviewsCount} verified reviews)</span>
                </div>
              </div>
            </div>

            {/* Craving Narrative & Tagline */}
            <div className="space-y-2 border-y border-white/10 py-4">
              <p className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">The Taste Profile</p>
              <p className="text-sm text-[#e8dfd1] font-medium leading-relaxed italic">
                "{item.tagline}"
              </p>
              <p className="text-xs text-[#a89d8f] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Spice Preference Selector */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-[#d8d0bf] font-semibold block flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#d4af37]" /> Select Spice Intensity:
              </label>
              <div className="grid grid-cols-1 gap-2">
                {spiceOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedSpice(option)}
                    className={`w-full py-2 px-3 rounded-xl text-xs text-left transition-all flex items-center justify-between cursor-pointer ${
                      selectedSpice === option
                        ? 'bg-[#d4af37]/20 border border-[#d4af37] text-[#fce09c] font-semibold'
                        : 'bg-[#1a140d] border border-white/5 text-[#a89d8f] hover:border-white/20'
                    }`}
                  >
                    <span>{option}</span>
                    {selectedSpice === option && <Check className="w-4 h-4 text-[#d4af37]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Ghee Tempering Selector */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block font-medium">
                Ghee & Tadka Tempering:
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['Classic A2 Gir Cow Ghee', 'Extra Ghee Shower (Complimentary)'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setGheePreference(opt)}
                    className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                      gheePreference === opt
                        ? 'border-[#d4af37] bg-[#d4af37]/20 text-[#fce09c] font-semibold'
                        : 'border-white/10 bg-[#16100a] text-[#8e8272]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Pairing Upsell Add-on */}
            {item.pairWith && (
              <div className="bg-gradient-to-r from-[#1c150e] to-[#150f09] p-4 rounded-2xl border border-[#d4af37]/35">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.pairWith.image}
                      alt={item.pairWith.name}
                      className="w-12 h-12 rounded-lg object-cover border border-[#d4af37]/40 shrink-0"
                    />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold flex items-center gap-1">
                        <Coffee className="w-3.5 h-3.5" /> Traditional Soulmate Pair
                      </p>
                      <p className="text-xs font-semibold text-white">{item.pairWith.name}</p>
                      <p className="text-[11px] text-[#9a9182]">+₹{item.pairWith.price}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIncludePairing(!includePairing)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      includePairing
                        ? 'bg-[#d4af37] text-[#090704] shadow-md'
                        : 'border border-[#d4af37]/60 text-[#fce09c] hover:bg-[#d4af37]/20'
                    }`}
                  >
                    {includePairing ? '✓ Added' : '+ Add Pair'}
                  </button>
                </div>
                {item.pairingSuggestion && (
                  <p className="text-[11px] text-[#baa998] mt-2 italic border-t border-white/5 pt-2">
                    "{item.pairingSuggestion}"
                  </p>
                )}
              </div>
            )}

            {/* Special Instructions */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block font-medium">
                Chef Notes / Dietary Customization:
              </label>
              <input
                type="text"
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                placeholder="e.g. Extra coconut chutney, no onions, mild for kids..."
                className="w-full px-3 py-2 rounded-xl bg-[#16100a] border border-white/10 text-xs text-white placeholder-[#786c5f] focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Quantity & Add to Cart Button */}
            <div className="pt-2 flex items-center gap-4">
              {/* Quantity Counter */}
              <div className="flex items-center border border-white/20 rounded-xl bg-[#1a130c] p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 rounded-lg text-[#ccc] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-bold text-white">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 rounded-lg text-[#ccc] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Dining Bag Button */}
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 py-3 px-6 rounded-xl bg-gold-gradient text-[#090704] font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-between cursor-pointer"
              >
                <span>Add to Royal Feast</span>
                <span className="text-sm font-extrabold font-serif">₹{totalPrice}</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
