import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Utensils, 
  Flame, 
  Wheat, 
  Fish, 
  Cake, 
  Wine, 
  Search, 
  Star, 
  Plus, 
  Filter, 
  Clock, 
  Coffee,
  Check
} from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';

const ICONS = {
  Sparkles,
  Utensils,
  Flame,
  Wheat,
  Fish,
  Cake,
  Wine
};

export default function MenuSection({ onSelectItem, onQuickAdd, onAddPairing }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDietary, setActiveDietary] = useState('All');

  const dietaryFilters = ['All', 'Pure Vegetarian', 'Non-Vegetarian', 'Coastal Seafood', 'Chef Signature'];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Search query check
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      // Dietary check
      let matchesDietary = true;
      if (activeDietary === 'Pure Vegetarian') {
        matchesDietary = item.dietary.some((d) => d.toLowerCase().includes('vegetarian'));
      } else if (activeDietary === 'Non-Vegetarian') {
        matchesDietary = !item.dietary.some((d) => d.toLowerCase().includes('vegetarian')) || item.category === 'roasts' || item.category === 'biryanis';
      } else if (activeDietary === 'Coastal Seafood') {
        matchesDietary = item.dietary.some((d) => d.toLowerCase().includes('pescatarian')) || item.category === 'curries';
      } else if (activeDietary === 'Chef Signature') {
        matchesDietary = item.isSignature;
      }

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [selectedCategory, searchQuery, activeDietary]);

  return (
    <section id="menu" className="py-24 relative bg-[#0b0907] text-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            The Grand South Indian Carte
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            The Royal <span className="text-gold-gradient italic">Dakshin</span> Feast
          </h2>
          <p className="text-sm sm:text-base text-[#baa998] font-light">
            Every creation is prepared fresh to order using single-origin Western Ghats spices, cold-pressed oils, hand-churned A2 ghee, and heirloom stone-ground grains.
          </p>
        </div>

        {/* Search & Dietary Filters Bar */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ghee roast, chukka, biryani, payasam..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#16100a] border border-white/10 text-xs text-white placeholder-[#7d7062] focus:outline-none focus:border-[#d4af37] transition-all shadow-inner"
            />
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {dietaryFilters.map((diet) => (
              <button
                key={diet}
                onClick={() => setActiveDietary(diet)}
                className={`px-3.5 py-1.5 rounded-full text-xs whitespace-nowrap transition-all cursor-pointer ${
                  activeDietary === diet
                    ? 'bg-[#d4af37] text-[#090704] font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-[#16100a] text-[#a89d8f] border border-white/10 hover:border-[#d4af37]/40 hover:text-white'
                }`}
              >
                {diet}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 border-b border-white/10 scrollbar-none justify-start md:justify-center">
          {CATEGORIES.map((cat) => {
            const Icon = ICONS[cat.icon] || Sparkles;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#21170e] to-[#181109] border border-[#d4af37] text-[#fce09c] shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                    : 'bg-[#140e08]/90 text-[#9e9080] border border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#d4af37]' : 'text-[#706456]'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#16100a]/50 rounded-3xl border border-white/5">
            <p className="text-lg font-serif text-[#d8cfbe]">No dishes matched your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveDietary('All');
                setSelectedCategory('all');
              }}
              className="mt-4 px-5 py-2 text-xs uppercase tracking-widest text-[#d4af37] border border-[#d4af37] rounded-full hover:bg-[#d4af37]/15"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#d4af37]/50 transition-all duration-400 flex flex-col justify-between bg-[#140f09]"
              >
                {/* Visual Thumbnail */}
                <div
                  className="relative h-60 overflow-hidden bg-[#1a130c] cursor-pointer"
                  onClick={() => onSelectItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a07] via-transparent to-transparent opacity-85" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#0b0907]/90 border border-[#d4af37]/60 text-[#fce09c] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                      {item.badge}
                    </span>
                  </div>

                  {/* Rating & Reviews */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#0b0907]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-xs text-[#fce09c]">
                    <Star className="w-3 h-3 fill-[#d4af37] text-[#d4af37]" />
                    <span className="font-bold">{item.rating}</span>
                    <span className="text-[#888] text-[10px]">({item.reviewsCount})</span>
                  </div>

                  {/* Spice Level Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-[#fce09c] bg-[#b4421b]/85 backdrop-blur-sm px-2.5 py-0.5 rounded font-semibold border border-[#d4af37]/25">
                    <span>{item.spiceLevel}</span>
                  </div>

                  {/* Prep Time */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[11px] text-[#ccc2ae] bg-[#0b0907]/75 backdrop-blur-sm px-2 py-0.5 rounded">
                    <Clock className="w-3 h-3 text-[#d4af37]" />
                    <span>{item.prepTime}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-3">
                      <h3
                        onClick={() => onSelectItem(item)}
                        className="font-serif text-xl font-bold text-white group-hover:text-[#fce09c] transition-colors cursor-pointer leading-snug"
                      >
                        {item.name}
                      </h3>
                      <span className="font-serif text-xl font-bold text-[#d4af37] whitespace-nowrap">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#dfd6c7] font-medium leading-relaxed">
                      {item.tagline}
                    </p>

                    <p className="text-xs text-[#9c9182] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Sensory Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.sensoryNotes.map((note) => (
                      <span
                        key={note}
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#1c140d] text-[#d4af37] border border-[#d4af37]/20"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  {/* Pair With Cross-sell Banner */}
                  {item.pairWith && (
                    <div className="bg-[#18120b] p-3 rounded-xl border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#b8ad9c]">
                        <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold flex items-center gap-1">
                          <Coffee className="w-3 h-3" /> Recommended Pair
                        </span>
                        <span className="text-[#d4af37] font-semibold">+₹{item.pairWith.price}</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-[#ded8cc] truncate font-medium">
                          {item.pairWith.name}
                        </span>
                        <button
                          onClick={() => onAddPairing(item.pairWith)}
                          className="text-[10px] uppercase font-bold text-[#fce09c] hover:text-white px-2 py-1 rounded bg-[#d4af37]/20 hover:bg-[#d4af37]/40 transition-colors whitespace-nowrap cursor-pointer"
                        >
                          + Add Pair
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Bottom Action Buttons */}
                  <div className="pt-2 flex items-center gap-3 border-t border-white/10">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="flex-1 py-2.5 rounded-xl border border-white/20 hover:border-[#d4af37] text-xs font-semibold text-[#eae4d5] hover:text-[#fce09c] hover:bg-[#1f170f] transition-all cursor-pointer text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onQuickAdd(item)}
                      className="px-5 py-2.5 rounded-xl bg-gold-gradient text-[#090704] text-xs font-extrabold uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Order</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
