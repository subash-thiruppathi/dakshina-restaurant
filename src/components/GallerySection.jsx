import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function GallerySection() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
      caption: 'Golden A2 Ghee Roast Dosa',
      tag: '#DakshinDosa'
    },
    {
      url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
      caption: 'Chettinad Pepper Nalli Chukka',
      tag: '#ChettinadRoast'
    },
    {
      url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
      caption: 'Alleppey Raw Mango Prawn Curry',
      tag: '#CoastalKerala'
    },
    {
      url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      caption: 'Thalassery Clay-Pot Dum Biryani',
      tag: '#MalabarBiryani'
    },
    {
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      caption: 'Kumbakonam Brass Filter Coffee',
      tag: '#DegreeFilterCoffee'
    },
    {
      url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      caption: 'Silky Elaneer Tender Coconut Payasam',
      tag: '#RoyalPayasam'
    }
  ];

  return (
    <section className="py-20 relative bg-[#0e0b08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 text-left">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              Moments of Flavor
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mt-1">
              Captured at <span className="text-gold-gradient italic">The Hearth of Dakshina</span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-[#d4af37] text-xs text-[#ded8cb] hover:text-[#fce09c] transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-[#d4af37]" />
            <span>Follow @DakshinaDining</span>
          </a>
        </div>

        {/* 6-Grid Masonry/Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden group border border-white/10 hover:border-[#d4af37]/60 transition-all cursor-pointer bg-[#18120c]"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0b0907]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 text-center">
                <Sparkles className="w-4 h-4 text-[#d4af37] mb-1" />
                <p className="text-[11px] font-bold text-white leading-tight">{img.caption}</p>
                <p className="text-[10px] text-[#d4af37] mt-0.5">{img.tag}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
