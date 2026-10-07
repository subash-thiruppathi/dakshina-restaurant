export const CATEGORIES = [
  { id: 'all', name: 'All Dakshin Curations', icon: 'Sparkles' },
  { id: 'tiffins', name: 'Crispy Tiffins & Podi', icon: 'Utensils' },
  { id: 'roasts', name: 'Chettinad & Iron Skillet Roasts', icon: 'Flame' },
  { id: 'curries', name: 'Coastal Gravies & Curries', icon: 'Fish' },
  { id: 'biryanis', name: 'Dum Biryani & Malabar Porotta', icon: 'Wheat' },
  { id: 'sweets', name: 'Royal Payasam & Desserts', icon: 'Cake' },
  { id: 'beverages', name: 'Filter Coffee & Spiced Libations', icon: 'Wine' },
];

export const MENU_ITEMS = [
  {
    id: 'ghee-roast-dosa',
    name: 'A2 Gir Cow Ghee Paper Roast Dosa',
    category: 'tiffins',
    price: 420,
    rating: 4.99,
    reviewsCount: 312,
    badge: "Dakshin Signature",
    isSignature: true,
    tagline: 'Ultra-crispy golden parchment cone roasted in pure grass-fed A2 ghee',
    description: 'Fermented stone-ground heirloom rice & urad dal batter, spread paper-thin on cast iron and showered in fragrant hand-churned A2 ghee. Served crackling crisp with our trio of freshly grated coconut chutneys, fiery shallot thuvaiyal, and 12-spice slow-simmered drumstick sambar.',
    sensoryNotes: ['Aromatic Melted Ghee', 'Golden Crisp Crunch', 'Tangy Sambar Warmth'],
    flavorProfile: { umami: 94, richness: 92, crispness: 100 },
    spiceLevel: 'Mild & Aromatic',
    prepTime: '12-15 mins',
    dietary: ['Vegetarian', 'Gluten-Free Friendly'],
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80',
    pairWith: {
      name: 'Degree Kumbakonam Filter Coffee',
      price: 160,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80'
    },
    pairingSuggestion: 'The frothy chicory-laced brass davarah coffee is the quintessential soulmate to crisp ghee roast.'
  },
  {
    id: 'chettinad-mutton-chukka',
    name: 'Chettinad Nalli Pepper Mutton Chukka',
    category: 'roasts',
    price: 820,
    rating: 4.98,
    reviewsCount: 228,
    badge: 'Fiery Heritage Legend',
    isSignature: true,
    tagline: 'Tender baby goat shank slow-roasted in stone-pounded Tellicherry pepper',
    description: 'Grass-fed tender bone-in goat shank braised for 4 hours until meltingly tender, then pan-seared in seasoned cast-iron kadai with hand-crushed black peppercorns, caramelized shallots (chinna vengayam), fresh curry leaves, and toasted fennel seed paste.',
    sensoryNotes: ['Smoky Iron Sizzle', 'Peppery Heat Punch', 'Melt-in-Mouth Marrow'],
    flavorProfile: { umami: 99, richness: 96, spice: 92 },
    spiceLevel: 'Fiery Chettinad Heat 🌶️🌶️🌶️',
    prepTime: '20-25 mins',
    dietary: ['Halal', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=1200&q=80',
    pairWith: {
      name: 'Flaky Layered Malabar Porotta (Pair of 2)',
      price: 160,
      category: 'biryanis',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
    },
    pairingSuggestion: 'Tear warm buttery flaky porotta and scoop up every drop of caramelized pepper chukka.'
  },
  {
    id: 'alleppey-prawn-curry',
    name: 'Alleppey Coconut & Raw Mango King Prawns',
    category: 'curries',
    price: 920,
    rating: 4.95,
    reviewsCount: 164,
    badge: 'Coastal Kerala Catch',
    isSignature: true,
    tagline: 'Jumbo ocean tiger prawns gently simmered in fresh first-press coconut milk',
    description: 'Wild-caught colossal ocean tiger prawns steeped in a fragrant golden gravy of fresh coconut milk, green chilies, shallots, and tart raw mango slices, tempered with spluttering brown mustard seeds and crackling curry leaves in hot coconut oil.',
    sensoryNotes: ['Silky Coconut Cream', 'Zesty Raw Mango Tang', 'Sweet Succulent Prawn'],
    flavorProfile: { umami: 92, richness: 89, spice: 75 },
    spiceLevel: 'Medium Spiced & Tangy 🌶️🌶️',
    prepTime: '18-20 mins',
    dietary: ['Pescatarian', 'Gluten-Free', 'Dairy-Free'],
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80',
    pairWith: {
      name: 'Steamed Rice Appam with Coconut Milk (Pair)',
      price: 180,
      category: 'biryanis',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
    },
    pairingSuggestion: 'Soft lacy appams with pillowy centers absorb the rich raw mango coconut gravy effortlessly.'
  },
  {
    id: 'thalassery-dum-biryani',
    name: 'Royal Thalassery Kaima Dum Biryani',
    category: 'biryanis',
    price: 680,
    rating: 4.97,
    reviewsCount: 295,
    badge: 'Clay Pot Dum Ritual',
    isSignature: true,
    tagline: 'Aromatic short-grain Jeerakasala rice sealed under dough with tender spiced chicken',
    description: 'The crowning glory of Malabar feasts. Prepared using delicate fragrant Jeerakasala kaima rice, layered with country chicken braised in shallot-coriander paste, pure Malabar ghee, golden fried onions (birista), cashew nuts, and plump Sultana raisins, slow-dummed in sealed clay handi over embers.',
    sensoryNotes: ['Sweet Fried Onion Fragrance', 'Ghee-Soaked Grain', 'Subtle Cinnamon & Mace'],
    flavorProfile: { umami: 96, richness: 94, tenderness: 98 },
    spiceLevel: 'Fragrant & Balanced 🌶️',
    prepTime: '20-25 mins',
    dietary: ['Halal Friendly'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    pairWith: {
      name: 'Spiced Tomato & Pepper Rasam Shot',
      price: 120,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
    },
    pairingSuggestion: 'A piping-hot digestive rasam with crushed garlic cleanses the palate between rich biryani mouthfuls.'
  },
  {
    id: 'guntur-podi-idli',
    name: 'Steaming Guntur Karam Thatte Podi Idli',
    category: 'tiffins',
    price: 340,
    rating: 4.93,
    reviewsCount: 184,
    badge: 'Street Food Elevated',
    isSignature: false,
    tagline: 'Plump disc idlis drenched in melting golden ghee and roasted lentil gunpowder',
    description: 'Plate-sized pillow-soft steamed fermented rice cakes, submerged in warm artisanal A2 cow ghee, then generously crusted with toasted chana-urad lentil gun-powder, red Guntur sun-dried chillies, and fried curry leaves.',
    sensoryNotes: ['Cloud-Soft Steamed Pillow', 'Warm Nutty Lentil Podi', 'Molten Ghee Flood'],
    flavorProfile: { umami: 90, richness: 93, spice: 85 },
    spiceLevel: 'Zesty Podi Heat 🌶️🌶️',
    prepTime: '10-12 mins',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
    pairWith: {
      name: 'Artisan Filter Coffee Cold Brew',
      price: 220,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80'
    },
    pairingSuggestion: 'Cold milk-washed filter coffee creates a heavenly thermal contrast against hot podi idlis.'
  },
  {
    id: 'meen-pollichathu',
    name: 'Banana Leaf Wrapped Meen Pollichathu',
    category: 'curries',
    price: 980,
    rating: 4.96,
    reviewsCount: 147,
    badge: 'Kerala Backwater Icon',
    isSignature: true,
    tagline: 'Whole Pearl Spot (Karimeen) or Pomfret marinated in shallot-tamarind masala',
    description: 'Fresh catch pan-seared with crushed ginger, garlic, Kokum tamarind, and black pepper, enveloped in a wilted banana leaf packet layered with caramelized onion-tomato masala, and slowly charred over coconut-shell embers to infuse deep herbaceous smoke.',
    sensoryNotes: ['Charred Banana Leaf Herb', 'Tangy Kokum Glaze', 'Flaky Smoked Fish'],
    flavorProfile: { umami: 98, richness: 88, spice: 86 },
    spiceLevel: 'Rich & Spiced 🌶️🌶️',
    prepTime: '22-25 mins',
    dietary: ['Pescatarian', 'Dairy-Free', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80',
    pairWith: {
      name: 'Flaky Layered Malabar Porotta (Pair of 2)',
      price: 160,
      category: 'biryanis',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
    },
    pairingSuggestion: 'Peel open the smoky green parcel tableside and mop the masala with crisp porotta folds.'
  },
  {
    id: 'paneer-ghee-roast',
    name: 'Mangalorean Kundapur Paneer Ghee Roast',
    category: 'roasts',
    price: 540,
    rating: 4.91,
    reviewsCount: 139,
    badge: 'Coast of Karnataka Pride',
    isSignature: false,
    tagline: 'Succulent malai paneer cubes tossed in fiery Byadagi chilli & ghee paste',
    description: 'Fresh farmhouse buffalo milk paneer cubes seared to golden edges, tossed in a deep ruby-red masala of sun-ripened Karnataka Byadagi chillies (famous for rich color and smoky sweetness), toasted coriander, cumin, cloves, and country ghee.',
    sensoryNotes: ['Smoky Byadagi Chili Aromas', 'Velvety Soft Paneer', 'Lush Butter Glaze'],
    flavorProfile: { umami: 91, richness: 95, spice: 82 },
    spiceLevel: 'Smoky Warm Heat 🌶️🌶️',
    prepTime: '15-18 mins',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80',
    pairWith: {
      name: 'Neer Dosa Cloud Crepes (Set of 3)',
      price: 180,
      category: 'tiffins',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
    },
    pairingSuggestion: 'Lacy, feather-light rice neer dosas temper the rich ghee roast masala perfectly.'
  },
  {
    id: 'elaneer-payasam',
    name: 'Royal Elaneer (Tender Coconut) Payasam',
    category: 'sweets',
    price: 340,
    rating: 4.98,
    reviewsCount: 220,
    badge: 'Chilled Coconut Nectar',
    isSignature: true,
    tagline: 'Creamy reduction of tender coconut pulp, condensed cardamom milk & toasted cashews',
    description: 'Harvested from fresh tender green coconuts, the delicate translucent malai (flesh) is blended with chilled reduced coconut milk, sweet condensed cream, fresh green cardamom powder, and crowned with ghee-roasted golden cashews and pistachio slivers.',
    sensoryNotes: ['Silky Coconut Velvet', 'Gentle Cardamom Floral', 'Warm Nutty Crunch'],
    flavorProfile: { umami: 70, richness: 92, sweetness: 85 },
    spiceLevel: 'Delicate & Sweet',
    prepTime: '8-10 mins',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    pairWith: {
      name: 'Degree Kumbakonam Filter Coffee',
      price: 160,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80'
    },
    pairingSuggestion: 'Follow the chilled silky coconut payasam with steaming hot artisanal filter coffee.'
  },
  {
    id: 'madurai-jigarthanda',
    name: 'Royal Madurai Jigarthanda Royale',
    category: 'sweets',
    price: 360,
    rating: 4.95,
    reviewsCount: 162,
    badge: 'Nawab Heritage Cool',
    isSignature: false,
    tagline: 'Heart-cooling elixir of almond gum (badam pisin), nannari sarsaparilla & basundi',
    description: 'Literally translating to "cooling the heart", this iconic Madurai royal drink layers soaked cooling badam pisin jelly, fragrant wild nannari root syrup, slow-reduced caramelized milk (basundi), and a generous scoop of hand-churned Palkova ice cream.',
    sensoryNotes: ['Caramelized Thick Milk', 'Herbal Root Floral', 'Chewy Almond Jelly'],
    flavorProfile: { umami: 65, richness: 96, sweetness: 90 },
    spiceLevel: 'Ultra-Cooling & Indulgent',
    prepTime: '5-8 mins',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1200&q=80',
    pairWith: {
      name: 'Chettinad Nalli Pepper Mutton Chukka',
      price: 820,
      category: 'roasts',
      image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80'
    },
    pairingSuggestion: 'The ultimate sweet cool respite after our fiery Chettinad pepper roast.'
  },
  {
    id: 'filter-coffee-ritual',
    name: 'Artisan Kumbakonam Degree Filter Coffee',
    category: 'beverages',
    price: 160,
    rating: 5.0,
    reviewsCount: 410,
    badge: 'Tableside Pour Ritual',
    isSignature: true,
    tagline: '85:15 Peaberry Arabica & Chicory decoction frothed high in traditional brass Davarah',
    description: 'Slowly dripped overnight through our brass filter using shaded estate Chikmagalur Peaberry coffee beans. Aerated tableside from a golden height between traditional South Indian Davarah and Tumbler to create an intoxicating, thick caramel foam head.',
    sensoryNotes: ['Roasty Cocoa Notes', 'Frothy Creamy Velvet', 'Rich Chicory Depth'],
    flavorProfile: { umami: 80, richness: 90, aroma: 100 },
    spiceLevel: 'Aromatic & Energizing',
    prepTime: '5 mins',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    pairWith: {
      name: 'A2 Gir Cow Ghee Paper Roast Dosa',
      price: 420,
      category: 'tiffins',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
    },
    pairingSuggestion: 'No South Indian dining feast is complete without the grand finale of degree filter coffee.'
  },
  {
    id: 'curry-leaf-kokum-cocktail',
    name: 'Smoked Kokum & Curry Leaf Coastal Spritz',
    category: 'beverages',
    price: 480,
    rating: 4.92,
    reviewsCount: 114,
    badge: 'Artisan Craft Bar',
    isSignature: false,
    tagline: 'Botanical coastal gin, wild Kokum reduction, torched curry leaves & club soda',
    description: 'Handcrafted cocktail infused with sun-dried Malabar Kokum tamarind, cold-pressed sugarcane juice, botanical gin, and fresh curry leaves lightly charred tableside to release essential citrus-peppery aromatics.',
    sensoryNotes: ['Zesty Berry Tartness', 'Torched Herbal Smoke', 'Effervescent Refreshment'],
    flavorProfile: { umami: 75, richness: 60, tartness: 90 },
    spiceLevel: 'Tangy, Herbal & Crisp',
    prepTime: '6 mins',
    dietary: ['Vegan', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    pairWith: {
      name: 'Mangalorean Kundapur Paneer Ghee Roast',
      price: 540,
      category: 'roasts',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80'
    },
    pairingSuggestion: 'Effervescent tart kokum cuts through rich ghee spices with invigorating elegance.'
  }
];

export const CHEF_PHILOSOPHY = {
  name: 'Chef Meenakshi Sundaram',
  title: 'Master of Dakshin Culinary Arts',
  quote: "South Indian cooking is the sacred science of mustard pop, stone-ground masalas, and the golden soul of pure cow ghee. True royalty lies in how the simplest curry leaf awakens when kissed by hot iron.",
  accolades: [
    'Culinary Legend of Chettinad & Malabar Traditions',
    'Best Heritage Restaurant India 2025',
    'Times Food Award - Fine Dining South Indian 2026'
  ],
  story: "Born in the spice trading heritage of Karaikudi (Chettinad) and trained in the royal palace kitchens of Travancore, Chef Sundaram brings generations of authentic South Indian heritage to the modern world. Our spices are sourced directly from single-estate plantations in the Western Ghats—Tellicherry peppercorns, Wayanad cardamom, and Guntur chillies. Every batter is stone-ground daily, and our ghee is churned from pure A2 Gir cow milk.",
  image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80'
};

export const REVIEWS = [
  {
    id: 1,
    author: 'Times Food Guide Inspector',
    source: 'Times Food Awards 2026',
    rating: 5,
    highlight: '“Dakshina elevates South Indian cuisine into pure high art. The Ghee Paper Roast Dosa crackles like parchment gold, and the Chettinad Nalli Chukka delivers an unforgettable symphony of Tellicherry black pepper.”',
    date: 'March 2026'
  },
  {
    id: 2,
    author: 'Kavitha Ramachandran',
    source: 'Verified Epicurean Diner',
    rating: 5,
    highlight: '“The moment you enter, the heavenly fragrance of tempered curry leaves and roasting ghee takes you straight to a royal feast. Ordered the Thalassery Biryani and Elaneer Payasam—absolute perfection!”',
    date: 'Last Weekend'
  },
  {
    id: 3,
    author: 'Conde Nast Traveller Food Critic',
    source: 'Conde Nast Luxury Dining',
    rating: 5,
    highlight: '“Unrivaled depth. From the tableside Degree Filter Coffee aerated in brass tumblers to the banana-leaf Meen Pollichathu, Dakshina proves that South Indian flavors are the most craveable on earth.”',
    date: 'February 2026'
  }
];

export const CRAVING_ADDONS = [
  {
    id: 'addon-porotta',
    name: 'Flaky Layered Malabar Porotta (Set of 2)',
    price: 160,
    description: 'Golden, crispy-layered flaky flatbread hand-stretched and pan-fried with cultured ghee.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'addon-chutney-trio',
    name: 'Royal Chutney Trio & Gunpowder Podi with Ghee',
    price: 180,
    description: 'Coconut-coriander, spicy tomato-shallot, tangy mint thuvaiyal, and roasted lentil podi in molten ghee.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'addon-coffee',
    name: 'Hot Degree Kumbakonam Filter Coffee in Brass Davarah',
    price: 160,
    description: 'Freshly brewed rich Peaberry decoction frothed with whole cow milk and caramel foam.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80'
  }
];
