import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CuratedSpecials from './components/CuratedSpecials';
import MenuSection from './components/MenuSection';
import DishModal from './components/DishModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import ReservationModal from './components/ReservationModal';
import StorySection from './components/StorySection';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { MENU_ITEMS } from './data/menuData';

export default function App() {
  const [cartItems, setCartItems] = useState([
    // Pre-populate with 1 South Indian signature item so the user sees immediate value in the cart
    {
      item: MENU_ITEMS[0], // A2 Ghee Paper Roast Dosa
      quantity: 1,
      doneness: 'Authentic Dakshin Tradition',
      specialNotes: 'Extra hot coconut chutney & gun-powder podi',
      includePairing: MENU_ITEMS[0].pairWith
    }
  ]);

  const [selectedDish, setSelectedDish] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (title, message) => {
    setToast({ title, message });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  // Quick Add from Card / Hero
  const handleQuickAdd = (item) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((entry) => entry.item.id === item.id && !entry.doneness);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { item, quantity: 1, doneness: null, specialNotes: '', includePairing: null }];
      }
    });
    showToast('Curation Added to Feast', `${item.name} (₹${item.price}) added to your royal order.`);
  };

  // Add pairing wine or side
  const handleAddPairing = (pairItem) => {
    const pseudoItem = {
      id: `pair-${pairItem.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: pairItem.name,
      price: pairItem.price,
      image: pairItem.image,
      category: pairItem.category || 'beverages',
      badge: 'Heritage Pair',
      prepTime: 'Instant'
    };
    handleQuickAdd(pseudoItem);
  };

  // Add customized item from DishModal
  const handleAddToCart = ({ item, quantity, doneness, specialNotes, includePairing }) => {
    setCartItems((prev) => [
      ...prev,
      { item, quantity, doneness, specialNotes, includePairing }
    ]);
    showToast('Course Tailored & Added', `${item.name} (${quantity}x) added with your custom preferences.`);
  };

  // Impulse Craving Add-on inside cart
  const handleAddAddon = (addon) => {
    const itemFormat = {
      id: addon.id,
      name: addon.name,
      price: addon.price,
      image: addon.image,
      category: 'tiffins',
      badge: 'Dakshin Craving',
      prepTime: '5 mins'
    };
    setCartItems((prev) => [...prev, { item: itemFormat, quantity: 1, doneness: null, specialNotes: '', includePairing: null }]);
    showToast('Craving Add-on Added', `${addon.name} (₹${addon.price}) added to elevate your feast.`);
  };

  const handleUpdateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
    } else {
      setCartItems((prev) => {
        const updated = [...prev];
        updated[index].quantity = newQty;
        return updated;
      });
    }
  };

  const handleRemoveItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleProceedToCheckout = (details) => {
    setCheckoutDetails(details);
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setCartItems([]);
    showToast('Feast Placed Successfully', 'Your kitchen ticket has fired at Aurelia.');
  };

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalItemsCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#ede8df] selection:bg-[#d4af37] selection:text-[#09090b]">
      
      {/* Floating Navigation */}
      <Navbar
        cartCount={totalItemsCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenReservation={() => setReservationOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* Cinematic Hero with immediate appetite hooks */}
        <Hero
          onOpenReservation={() => setReservationOpen(true)}
          onOpenMenu={scrollToMenu}
          onQuickAddHeroItem={(itemId) => {
            const item = MENU_ITEMS.find((m) => m.id === itemId);
            if (item) handleQuickAdd(item);
          }}
        />

        {/* Masterpiece Specials with Sensory Flavor Meters */}
        <CuratedSpecials
          onSelectItem={(item) => setSelectedDish(item)}
          onQuickAdd={handleQuickAdd}
        />

        {/* Full Interactive Menu with Search, Dietary filters, & Pairing upsells */}
        <MenuSection
          onSelectItem={(item) => setSelectedDish(item)}
          onQuickAdd={handleQuickAdd}
          onAddPairing={handleAddPairing}
        />

        {/* Culinary Philosophy & Chef Marco Valenti */}
        <StorySection
          onOpenReservation={() => setReservationOpen(true)}
        />

        {/* Michelin Guide & Guest Reviews */}
        <ReviewsSection />

        {/* Sensory Visual Instagram Gallery */}
        <GallerySection />

        {/* Hours, Valet & Location */}
        <LocationSection
          onOpenReservation={() => setReservationOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => setReservationOpen(true)}
        onOpenMenu={scrollToMenu}
      />

      {/* Modals & Drawers */}
      <DishModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onAddAddon={handleAddAddon}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        orderDetails={checkoutDetails}
        onOrderComplete={handleOrderComplete}
      />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Floating Notification */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />

    </div>
  );
}
