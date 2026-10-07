import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, Heart, Award, Shield } from 'lucide-react';

export default function ReservationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [step, setStep] = useState('booking'); // 'booking' | 'confirmed'
  const [partySize, setPartySize] = useState(2);
  const [selectedDate, setSelectedDate] = useState('Tonight, Oct 8');
  const [selectedTime, setSelectedTime] = useState('7:30 PM');
  const [seatingArea, setSeatingArea] = useState('banana_leaf');
  const [occasion, setOccasion] = useState('Royal Heritage Feast / Anniversary');
  const [reservationCode, setReservationCode] = useState('');

  const [guestInfo, setGuestInfo] = useState({
    name: 'Ananya Raghavan',
    phone: '+1 (212) 889-4021',
    email: 'ananya.raghavan@dakshina.com',
    specialNotes: 'Table near the brass courtyard fountain, pure veg guests included.'
  });

  const timeSlots = ['5:30 PM', '6:15 PM', '7:00 PM', '7:30 PM', '8:15 PM', '9:00 PM', '9:45 PM'];

  const seatingOptions = [
    {
      id: 'banana_leaf',
      title: 'Royal Banana Leaf Feast Seating',
      desc: 'Authentic ceremonial feast served on fresh organic plantain leaves'
    },
    {
      id: 'chettinad_hearth',
      title: 'Chettinad Teakwood Courtyard',
      desc: 'Ambient view of live cast-iron tiffin hearth and bronze oil lamps'
    },
    {
      id: 'tiffin_counter',
      title: "Chef Meenakshi's Tiffin Counter",
      desc: 'Front-row 8-seat counter witnessing live paper dosa parchment spreads'
    },
    {
      id: 'maharaja_salon',
      title: 'Private Maharaja Salon',
      desc: 'Enclosed family dining suite for celebratory multi-course feasts'
    }
  ];

  const handleBook = (e) => {
    e.preventDefault();
    const code = `DAK-${Math.floor(2000 + Math.random() * 8000)}`;
    setReservationCode(code);
    setStep('confirmed');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={step === 'confirmed' ? onClose : undefined} />

      <div className="relative w-full max-w-2xl bg-[#130e09] border border-[#d4af37]/45 rounded-3xl overflow-hidden shadow-2xl z-10 text-left my-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1b140e] text-[#a89d8f] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'booking' ? (
          <div className="p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#d4af37] uppercase tracking-widest font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dakshin Hospitality</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Reserve Your Banana Leaf Table</h2>
              <p className="text-xs text-[#baa998]">
                Join us for an unforgettable royal South Indian feast, fragrant filter coffee, and warm hospitality.
              </p>
            </div>

            <form onSubmit={handleBook} className="space-y-5">
              
              {/* Party Size & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#d4af37]" /> Number of Guests
                  </label>
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                    {[1, 2, 3, 4, 6, 8].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setPartySize(num)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          partySize === num
                            ? 'bg-[#d4af37] text-[#090704] shadow'
                            : 'bg-[#1b140e] text-[#938676] border border-white/5 hover:border-white/20'
                        }`}
                      >
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" /> Date of Dining
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b140e] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option>Tonight, Oct 8 (Few Tables Available)</option>
                    <option>Tomorrow, Oct 9 (Dinner Available)</option>
                    <option>Friday, Oct 10 (Royal Feast Weekend)</option>
                    <option>Saturday, Oct 11 (Chettinad Special)</option>
                    <option>Sunday, Oct 12 (Malabar Dum Lunch & Dinner)</option>
                  </select>
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" /> Seating Times
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        selectedTime === time
                          ? 'bg-[#d4af37] text-[#090704] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                          : 'bg-[#1b140e] text-[#938676] border border-white/5 hover:border-white/20'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Ambiance */}
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1.5">
                  Desired Dining Atmosphere
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {seatingOptions.map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setSeatingArea(opt.id)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                        seatingArea === opt.id
                          ? 'border-[#d4af37] bg-[#d4af37]/15 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                          : 'border-white/5 bg-[#17110b] hover:border-white/20'
                      }`}
                    >
                      <p className={`text-xs font-bold ${seatingArea === opt.id ? 'text-[#fce09c]' : 'text-white'}`}>
                        {opt.title}
                      </p>
                      <p className="text-[11px] text-[#8e8272] mt-0.5 leading-snug">{opt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1.5">
                  Celebration / Dining Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b140e] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                >
                  <option>Royal Heritage Feast / Anniversary</option>
                  <option>Family Gathering & Feast Celebration</option>
                  <option>Birthday with Complimentary Payasam</option>
                  <option>Executive Business Dinner</option>
                  <option>Casual South Indian Indulgence</option>
                </select>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1">Primary Guest Name</label>
                  <input
                    type="text"
                    required
                    value={guestInfo.name}
                    onChange={(e) => setGuestInfo({ ...guestInfo, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b140e] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1">Mobile Phone (SMS Confirmation)</label>
                  <input
                    type="tel"
                    required
                    value={guestInfo.phone}
                    onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b140e] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#a89d8f] block mb-1">Special Dietary Requests / Preferences</label>
                <input
                  type="text"
                  value={guestInfo.specialNotes}
                  onChange={(e) => setGuestInfo({ ...guestInfo, specialNotes: e.target.value })}
                  placeholder="e.g. Pure Jain / vegetarian, mild spice for kids, extra filter coffee..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b140e] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gold-gradient text-[#090704] font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  Confirm Table Reservation
                </button>
                <p className="text-[10px] text-center text-[#7a6f62] mt-2">
                  Complimentary valet parking included at main entrance.
                </p>
              </div>

            </form>

          </div>
        ) : (
          /* Confirmation State */
          <div className="p-8 sm:p-10 text-center space-y-6 animate-in zoom-in-95 duration-400">
            <div className="w-20 h-20 rounded-full bg-[#1b140e] border-2 border-[#d4af37] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              <CheckCircle2 className="w-10 h-10 text-[#d4af37]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Table Confirmed
              </span>
              <h2 className="text-3xl font-serif font-bold text-white">Vanakkam & Welcome</h2>
              <p className="text-xs text-[#cdc5b3] max-w-sm mx-auto">
                Your reservation at Dakshina is confirmed. Our Maître d' and Chef Meenakshi look forward to presenting you with our royal heritage feast.
              </p>
            </div>

            {/* Reservation Summary Card */}
            <div className="bg-[#1b140e] p-5 rounded-2xl border border-white/10 text-left space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8e8272]">VIP Reference:</span>
                <span className="text-[#fce09c] font-bold font-mono text-sm">{reservationCode}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8e8272]">Guest Name:</span>
                <span className="text-white font-medium">{guestInfo.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8e8272]">Party Size:</span>
                <span className="text-white font-medium">{partySize} Guests</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8e8272]">Date & Seating:</span>
                <span className="text-[#d4af37] font-bold">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#8e8272]">Dress Code:</span>
                <span className="text-white font-medium">Smart Elegant</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-2xl bg-gold-gradient text-[#090704] font-bold text-xs uppercase tracking-widest shadow-lg hover:brightness-110 transition-all cursor-pointer"
            >
              Done & Save to Calendar
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
