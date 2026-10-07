import React from 'react';
import { Sparkles, Check, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in slide-in-from-bottom duration-300">
      <div className="glass-gold bg-[#12121a]/95 border border-[#d4af37]/60 rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-between gap-3 text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gold-gradient text-[#09090b] flex items-center justify-center shrink-0 font-bold shadow">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-serif font-bold text-white">{toast.title}</p>
            <p className="text-[11px] text-[#cfc7b5]">{toast.message}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-[#888] hover:text-white p-1 cursor-pointer shrink-0"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
