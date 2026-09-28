/**
 * AALAYA LUXURY FASHION - Master Product Catalog
 * Authentic Indian Couturière, Sarees, Lehengas, Kurtis, Ethnic & Western Wear
 */

const AALAYA_PRODUCTS = [
  // ================= SAREES =================
  {
    id: "aalaya-saree-01",
    name: "The Ayodhya Vermillion Katan Silk Saree",
    tagline: "Handwoven in Varanasi with antique gold kadhwa zari bootas",
    category: "sarees",
    subCategory: "Banarasi Sarees",
    collection: "Imperial Heritage",
    price: 34500,
    originalPrice: 42000,
    discount: "18% OFF",
    rating: 4.95,
    reviewsCount: 142,
    badge: "Heritage Masterpiece",
    colors: [
      { name: "Royal Vermillion", hex: "#9B111E" },
      { name: "Emerald Green", hex: "#046307" },
      { name: "Rani Pink", hex: "#C71585" }
    ],
    sizes: ["Unstitched Blouse Piece Included", "Custom Stitched Blouse"],
    fabric: "100% Pure Mulberry Katan Silk",
    weave: "Handloom Kadhwa Technique",
    origin: "Varanasi, Uttar Pradesh",
    washCare: "Strictly Dry Clean Only. Preserve wrapped in pure cotton muslin.",
    sku: "AAL-SAR-BAN-001",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "An heirloom Banarasi masterpiece spun from pure mulberry katan silk. Featuring masterfully hand-woven floral jaal motifs inspired by 17th-century Mughal architectural murals, framed by an opulent antique gold zari pallu with delicate meenakari accents.",
    details: [
      "Length: 5.5 metres saree + 0.8 metre matching running blouse fabric",
      "Weave: Authentic Varanasi handloom with GI certified silk tag",
      "Embellishment: Pure zari threads with antique champagne patina",
      "Includes complimentary heirloom preservation box and velvet dust bag"
    ]
  },
  {
    id: "aalaya-saree-02",
    name: "Gulmohar Rose Organza Saree",
    tagline: "Airy translucent organza hand-painted with botanical blossoms",
    category: "sarees",
    subCategory: "Organza Sarees",
    collection: "Flora Noor",
    price: 18900,
    originalPrice: 23500,
    discount: "20% OFF",
    rating: 4.88,
    reviewsCount: 89,
    badge: "Celebrity Favorite",
    colors: [
      { name: "Blush Rose", hex: "#D8A49B" },
      { name: "Ivory Pearl", hex: "#FDFBF7" },
      { name: "Sage Mist", hex: "#9EAA9B" }
    ],
    sizes: ["Unstitched Blouse Piece", "Made to Measure"],
    fabric: "Pure Kora Organza Silk",
    weave: "French Knot Embroidered Edges",
    origin: "Chanderi / New Delhi Atelier",
    washCare: "Dry Clean Only",
    sku: "AAL-SAR-ORG-002",
    inStock: true,
    isNew: true,
    isBestseller: false,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Whisper-light pure silk organza bathed in a romantic dusty rose shade. Hand-painted by generational Jaipur artists with subtle gold dust foil and finished with hand-scalloped zardozi borders.",
    details: [
      "Length: 5.5 metres saree with 1 metre raw silk blouse piece",
      "Lightweight, breathable drape that holds structured pleats effortlessly",
      "Ideal for daytime summer weddings, cocktail brunches, and festive soirees"
    ]
  },
  {
    id: "aalaya-saree-03",
    name: "Madurai Temple Gold Kanjivaram Silk",
    tagline: "Heavy double-warp woven pure silk with korvai contrast borders",
    category: "sarees",
    subCategory: "Kanjivaram Sarees",
    collection: "Imperial Heritage",
    price: 48000,
    originalPrice: 56000,
    discount: "14% OFF",
    rating: 4.98,
    reviewsCount: 210,
    badge: "Bridal Heirloom",
    colors: [
      { name: "Deep Crimson & Gold", hex: "#7E121D" },
      { name: "Peacock Royal Blue", hex: "#0B3C5D" }
    ],
    sizes: ["Unstitched", "Stitched Blouse"],
    fabric: "Pure Mulberry Mulberry Silk (Silk Mark Certified)",
    weave: "Traditional Korvai Interlocking Weft",
    origin: "Kanchipuram, Tamil Nadu",
    washCare: "Dry Clean Only",
    sku: "AAL-SAR-KAN-003",
    inStock: true,
    isNew: false,
    isBestseller: true,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "The crown jewel of traditional South Indian silk drapes. Featuring mythical Mayil (peacock) and Yazhi temple motifs woven with genuine gold-plated silver zari that will be cherished across generations.",
    details: [
      "Includes Silk Mark India purity certification card",
      "Weight: approx. 850 grams of dense, lustrous bridal silk",
      "Includes gold brocade contrast blouse piece"
    ]
  },
  {
    id: "aalaya-saree-04",
    name: "Chanderi Tissue Zari Drape in Champagne",
    tagline: "Subtle luminous tissue silk that shimmers under evening chandeliers",
    category: "sarees",
    subCategory: "Chanderi Sarees",
    collection: "Noor Soirée",
    price: 21500,
    originalPrice: 26000,
    discount: "17% OFF",
    rating: 4.86,
    reviewsCount: 64,
    badge: "New Season",
    colors: [
      { name: "Champagne Gold", hex: "#E6D2B5" },
      { name: "Silver Moonlight", hex: "#D6D6D6" }
    ],
    sizes: ["Standard Drape"],
    fabric: "Pure Silk Cotton Tissue",
    weave: "Chanderi Handloom",
    origin: "Madhya Pradesh",
    washCare: "Dry Clean Only",
    sku: "AAL-SAR-CHN-004",
    inStock: true,
    isNew: true,
    isBestseller: false,
    isTrending: false,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Graceful champagne tissue silk woven with ultra-fine metallic yarn. Subtle yet deeply commanding, it cascades like molten moonlight, ideal for sangeet nights, receptions, and red carpetgalas.",
    details: [
      "Ultra-fine lightweight tissue drape",
      "Hand-rolled edges with micro-pearl detailing",
      "Comes with custom metallic brocade unstitched blouse"
    ]
  },

  // ================= LEHENGAS =================
  {
    id: "aalaya-leh-01",
    name: "The Noor-e-Khaas Imperial Velvet Bridal Lehenga",
    tagline: "Opulent ruby crimson silk velvet with antique zardozi and dabka embroidery",
    category: "lehengas",
    subCategory: "Bridal Lehengas",
    collection: "Royal Palace Couture",
    price: 185000,
    originalPrice: 220000,
    discount: "16% OFF",
    rating: 5.0,
    reviewsCount: 78,
    badge: "Haute Couture",
    colors: [
      { name: "Imperial Crimson", hex: "#800A18" },
      { name: "Maharani Plum", hex: "#4B0026" }
    ],
    sizes: ["Custom Bridal Couture", "XS", "S", "M", "L", "XL"],
    fabric: "Pure Mulberry Micro Velvet & Chiffon Dupatta",
    weave: "Handcrafted Zardozi, Cutdana, and Pita Work",
    origin: "Lucknow & Delhi Haute Couture Atelier",
    washCare: "Specialist Luxury Bridal Dry Clean Only",
    sku: "AAL-LEH-BRI-001",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Designed for the modern maharani. Over 480 hours of meticulous hand-needle embroidery featuring architectural jali work, vintage floral vines, and semi-precious stone embellishments on rich silk velvet. Accompanied by two dupattas: a heavy velvet shoulder drape and a feather-light sheer tulle veil.",
    details: [
      "Complete 3-piece bridal couture ensemble: Lehenga, Embroidered Blouse, 2 Dupattas",
      "Voluminous 6-meter flair with multi-tier cancan and silk satin lining",
      "Includes personalized bride & groom embroidery inside waistband (complimentary)"
    ]
  },
  {
    id: "aalaya-leh-02",
    name: "Rhea Rose Gold Organza Sangeet Lehenga",
    tagline: "Shimmering metallic sequins and 3D floral threadwork for cocktail twirls",
    category: "lehengas",
    subCategory: "Designer Lehengas",
    collection: "Noor Soirée",
    price: 94000,
    originalPrice: 115000,
    discount: "18% OFF",
    rating: 4.93,
    reviewsCount: 52,
    badge: "Sangeet Favorite",
    colors: [
      { name: "Rose Gold", hex: "#B76E79" },
      { name: "Champagne Silver", hex: "#ECE2D0" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "Custom Fit"],
    fabric: "Laminated Organza & French Silk Tulle",
    weave: "Micro Sequin Resham Hand Embroidery",
    origin: "Mumbai Atelier",
    washCare: "Dry Clean Only",
    sku: "AAL-LEH-SNG-002",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isTrending: true,
      images: [
       "/aalaya-luxury-fashion/assets/images/2_c67bd68a-943e-4c56-890b-3fd509130adf.webp",
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
      ],
    description: "An ethereal contemporary dream designed for dancing under star-lit skies. Laminated rose gold organza catches every glint of stage light, complemented by a plunging sweetheart neck blouse with beaded tassels.",
    details: [
      "Features feather-light structured construction for effortless movement",
      "Includes custom matching pouch (potli) and back-tie tassel cord",
      "Can-can included with comfortable pure cotton lining against the skin"
    ]
  },
  {
    id: "aalaya-leh-03",
    name: "Emerald Firdaus Hand-Painted Silk Lehenga",
    tagline: "Forest emerald raw silk illuminated with gota patti and heritage marodi work",
    category: "lehengas",
    subCategory: "Festive Lehengas",
    collection: "Heritage Flora",
    price: 76500,
    originalPrice: 92000,
    discount: "17% OFF",
    rating: 4.89,
    reviewsCount: 44,
    badge: "Artisanal",
    colors: [
      { name: "Royal Emerald", hex: "#084C38" },
      { name: "Antique Mustard", hex: "#C8963E" }
    ],
    sizes: ["S", "M", "L", "XL", "Custom"],
    fabric: "Pure Raw Silk & Chanderi Tissue",
    weave: "Jaipur Gota Patti & Zari Tilla",
    origin: "Jaipur, Rajasthan",
    washCare: "Dry Clean Only",
    sku: "AAL-LEH-FES-003",
    inStock: true,
    isNew: false,
    isBestseller: false,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Inspired by the royal courtyards of Rajputana, this deep emerald masterpiece marries pure raw silk with lustrous beaten gold gota ribbons and delicate French wire marodi stitches.",
    details: [
      "Full circular flare (5.2m circle cut)",
      "Pure Banarasi tissue dupatta with hand-finished fringe",
      "Concealed zip closure with hand-braided dori tie"
    ]
  },

  // ================= KURTIS & KURTA SETS =================
  {
    id: "aalaya-kur-01",
    name: "Awadh Pearl Chikankari Anarkali Kurta Set",
    tagline: "Pure mulmul cotton featuring 32 delicate Lakhnavi shadow stitches",
    category: "kurtis",
    subCategory: "Anarkali Kurtis",
    collection: "Awadh Reverie",
    price: 14800,
    originalPrice: 18500,
    discount: "20% OFF",
    rating: 4.96,
    reviewsCount: 167,
    badge: "Bestselling Classic",
    colors: [
      { name: "Ivory Pearl", hex: "#FDFBF7" },
      { name: "Powder Blue", hex: "#B0C4DE" },
      { name: "Blush Mauve", hex: "#D6A2AD" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fabric: "High-Count Hand-Spun Mulmul Cotton",
    weave: "Authentic Lucknow Chikankari with Mukaish Metal Dots",
    origin: "Lucknow, Uttar Pradesh",
    washCare: "Gentle Hand Wash or Dry Clean",
    sku: "AAL-KUR-CHK-001",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "A poem in pure white threadwork. Handcrafted by master craftswomen in Lucknow over 3 weeks, this flowing 28-kali Anarkali is illuminated with genuine silver mukaish specks that catch the light like dew drops.",
    details: [
      "Set includes: Anarkali Kurta, Cotton Inner Slip, Straight Palazzo, Hand-dyed Kota Doria Dupatta",
      "Hand-finished potli buttons and crochet lace inserts",
      "Breathable, feather-soft fabric perfect for warm festive gatherings"
    ]
  },
  {
    id: "aalaya-kur-02",
    name: "Zeenat Silk Velvet Kurta & Sharara Set",
    tagline: "Midnight navy plush velvet with antique dabka work and organza dupatta",
    category: "kurtis",
    subCategory: "Kurta Sets",
    collection: "Winter Nocturne",
    price: 24500,
    originalPrice: 29500,
    discount: "17% OFF",
    rating: 4.91,
    reviewsCount: 95,
    badge: "Festive Must-Have",
    colors: [
      { name: "Midnight Navy", hex: "#121A2E" },
      { name: "Wine Burgundy", hex: "#5C1D24" },
      { name: "Imperial Olive", hex: "#3B4734" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fabric: "Pure Silk Velvet & Scalloped Organza",
    weave: "Dabka, Kasab, and Hand Sequins",
    origin: "Old Delhi Atelier",
    washCare: "Dry Clean Only",
    sku: "AAL-KUR-VEL-002",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Indulgent silk velvet cut into an elongated straight silhouette, accompanied by a flowing tiered sharara and sheer gold tissue dupatta with intricate lace borders.",
    details: [
      "Ultra-soft lining throughout for utmost comfort",
      "Deep keyhole neckline with custom pearl tassels",
      "Pockets on both sides of the kurta"
    ]
  },
  {
    id: "aalaya-kur-03",
    name: "Surya Gold Chanderi Straight Kurti",
    tagline: "Effortless daytime elegance with woven boota motifs and mandarin collar",
    category: "kurtis",
    subCategory: "Straight Kurtis",
    collection: "Everyday Luxury",
    price: 6800,
    originalPrice: 8500,
    discount: "20% OFF",
    rating: 4.82,
    reviewsCount: 114,
    badge: "Office to Evening",
    colors: [
      { name: "Mustard Gold", hex: "#D4A338" },
      { name: "Pistachio Green", hex: "#95A984" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fabric: "Chanderi Silk Cotton",
    weave: "Handloom Zari Booti",
    origin: "Madhya Pradesh",
    washCare: "Gentle Dry Clean",
    sku: "AAL-KUR-STR-003",
    inStock: true,
    isNew: false,
    isBestseller: true,
    isTrending: false,
    images: [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Versatile, razor-sharp tailoring meets traditional Chanderi handlooms. Pair with crisp linen trousers for meetings or accessorize with chandbalis for festive dinners.",
    details: [
      "Comfort regular fit with side slits",
      "Features functional front placket with mother-of-pearl buttons",
      "Pre-shrunk fabric"
    ]
  },

  // ================= DRESSES & GOWNS =================
  {
    id: "aalaya-drs-01",
    name: "The Maya Draped Silk Crepe Evening Gown",
    tagline: "Sensual goddess drape with asymmetrical shoulder and capelet",
    category: "dresses",
    subCategory: "Evening Dresses",
    collection: "Modern Siren",
    price: 26500,
    originalPrice: 32000,
    discount: "17% OFF",
    rating: 4.92,
    reviewsCount: 88,
    badge: "Red Carpet Edit",
    colors: [
      { name: "Terracotta Clay", hex: "#B35D43" },
      { name: "Onyx Black", hex: "#171717" },
      { name: "Champagne Nude", hex: "#EAD7C5" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Heavy Italian Silk Crepe",
    weave: "Precision Bias Cut & Hand-Draped Pleats",
    origin: "New Delhi Atelier",
    washCare: "Dry Clean Only",
    sku: "AAL-DRS-EVE-001",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Sculptural minimalism at its peak. Cut on the bias to mold to the contours of the body with fluid ease, finished with an asymmetric flowing train that creates breathtaking drama in motion.",
    details: [
      "Concealed side zipper with hook-and-eye closure",
      "Internal boning for seamless bust support",
      "Floor-length with 15cm puddle train"
    ]
  },
  {
    id: "aalaya-drs-02",
    name: "Bahaar Floral Chiffon Tiered Maxi Dress",
    tagline: "Romantic tiered silhouettes with hand-drawn botanical watercolor prints",
    category: "dresses",
    subCategory: "Maxi Dresses",
    collection: "Flora Noor",
    price: 13500,
    originalPrice: 16500,
    discount: "18% OFF",
    rating: 4.87,
    reviewsCount: 63,
    badge: "Resort Collection",
    colors: [
      { name: "Blush Peony", hex: "#E8C2B9" },
      { name: "Aegean Teal", hex: "#327A88" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Pure Bemberg Chiffon with Mulberry Silk Lining",
    weave: "Digital Artisan Print",
    origin: "Jaipur Studio",
    washCare: "Gentle Machine Wash Cold",
    sku: "AAL-DRS-MAX-002",
    inStock: true,
    isNew: true,
    isBestseller: false,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Sun-drenched holiday glamour. Swathes of airy chiffon cascade in voluminous tiers, featuring an adjustable self-tie waist and blouson sleeves with delicate elasticated cuffs.",
    details: [
      "Smocked elastic back bodice for flexible fit",
      "Comes with detachable sash belt",
      "Opaque lining to mid-thigh"
    ]
  },
  {
    id: "aalaya-drs-03",
    name: "Kashmir Tilla Embroidered Midi Shirt Dress",
    tagline: "Contemporary utility tailoring elevated with metallic cord Kashmiri embroidery",
    category: "dresses",
    subCategory: "Midi Dresses",
    collection: "Modern Heritage",
    price: 16800,
    originalPrice: 19800,
    discount: "15% OFF",
    rating: 4.89,
    reviewsCount: 47,
    badge: "Editorial Pick",
    colors: [
      { name: "Crisp Ivory", hex: "#F7F5F0" },
      { name: "Midnight Charcoal", hex: "#222222" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "High-Density Organic Irish Linen",
    weave: "Machine Tilla Embroidery Collar & Cuffs",
    origin: "Srinagar & Delhi Atelier",
    washCare: "Dry Clean Recommended",
    sku: "AAL-DRS-MID-003",
    inStock: true,
    isNew: false,
    isBestseller: true,
    isTrending: false,
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "The meeting of European shirting precision and royal Kashmiri craft. Cut from stiff yet breathable Irish linen, accented with shimmering antique gold tilla thread on the grand collar and cuffs.",
    details: [
      "Curved hemline with high-side slits",
      "Concealed button placket with horn buttons",
      "Removable matching linen waist tie"
    ]
  },

  // ================= WESTERN & CO-ORD SETS =================
  {
    id: "aalaya-wst-01",
    name: "The Raw Silk Kimono Wrap Co-ord Set",
    tagline: "Relaxed tailored blazer wrap top and pleated wide-leg trousers",
    category: "western",
    subCategory: "Co-ord Sets",
    collection: "Pret Luxe",
    price: 19500,
    originalPrice: 24000,
    discount: "18% OFF",
    rating: 4.94,
    reviewsCount: 110,
    badge: "Trending Runway",
    colors: [
      { name: "Dusty Sand", hex: "#C2B29D" },
      { name: "Deep Terracotta", hex: "#A85338" },
      { name: "Slate Charcoal", hex: "#353839" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Handwoven Matka Raw Silk",
    weave: "Slub Textured Handloom",
    origin: "Bengaluru Studio",
    washCare: "Dry Clean Only",
    sku: "AAL-WST-COO-001",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "An effortless sartorial statement. Cut from rich slubbed matka raw silk, this two-piece co-ord balances structural tailoring with relaxed draping, perfect for modern power dressing and gallery openings.",
    details: [
      "Includes self-tie obi sash with brass eyelets",
      "High-rise trousers with sharp front pleats and deep slash pockets",
      "Fully lined in breathable silk habotai"
    ]
  },
  {
    id: "aalaya-wst-02",
    name: "Ivory Organza Poet Sleeve Silk Shirt",
    tagline: "Billowing bishop sleeves with French cuff and hand-embroidered monogram",
    category: "western",
    subCategory: "Tops & Shirts",
    collection: "Pret Luxe",
    price: 9800,
    originalPrice: 12000,
    discount: "18% OFF",
    rating: 4.88,
    reviewsCount: 71,
    badge: "Timeless Capsule",
    colors: [
      { name: "Soft Ivory", hex: "#FAF8F5" },
      { name: "Midnight Black", hex: "#1A1A1A" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "100% Silk Twill & Sheer Silk Organza",
    weave: "Tailored French Seam Construction",
    origin: "Mumbai Atelier",
    washCare: "Dry Clean Only",
    sku: "AAL-WST-TOP-002",
    inStock: true,
    isNew: true,
    isBestseller: false,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Poetry in silhouette. Voluminous organza sleeves create a high-fashion portrait aesthetic, contrasted with an opaque silk twill body and elongated French cuffs with gold cufflinks.",
    details: [
      "Gold-tone monogrammed button closure",
      "Structured pointed collar with edge topstitching",
      "Drapes elegantly tucked into high-waisted bottoms"
    ]
  },
  {
    id: "aalaya-wst-03",
    name: "Handloom Khadi Silk High-Waist Trousers",
    tagline: "Impeccably tailored wide-leg trousers in heavyweight structured khadi",
    category: "western",
    subCategory: "Jeans & Trousers",
    collection: "Pret Luxe",
    price: 11200,
    originalPrice: 13900,
    discount: "19% OFF",
    rating: 4.91,
    reviewsCount: 58,
    badge: "Modern Staple",
    colors: [
      { name: "Warm Ecru", hex: "#EDE6DB" },
      { name: "Espresso Brown", hex: "#3A2B27" }
    ],
    sizes: ["26", "28", "30", "32", "34"],
    fabric: "Heavyweight Handloom Khadi Cotton Silk",
    weave: "Sartorial Tailored Creases",
    origin: "Pondicherry Weavers",
    washCare: "Dry Clean or Cold Hand Wash",
    sku: "AAL-WST-TRS-003",
    inStock: true,
    isNew: false,
    isBestseller: true,
    isTrending: false,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "The definitive wide-leg trouser. Blending sustainable Indian artisanal textiles with Savile Row-inspired drape, featuring sharp pressed front creases and internal hook tab closure.",
    details: [
      "High-rise with a flattering elongated silhouette",
      "Discreet coin pocket and back welt pockets",
      "Generous 5cm hem allowance for custom length adjustments"
    ]
  },

  // ================= ETHNIC WEAR / SALWAR SUITS =================
  {
    id: "aalaya-eth-01",
    name: "Begum Sahiba Chanderi Silk Salwar Suit",
    tagline: "Regal mint green suit paired with hand-block printed organza dupatta",
    category: "ethnic",
    subCategory: "Salwar Suits",
    collection: "Royal Court",
    price: 17200,
    originalPrice: 21500,
    discount: "20% OFF",
    rating: 4.93,
    reviewsCount: 82,
    badge: "Royal Craft",
    colors: [
      { name: "Pistachio Mint", hex: "#B8D8C8" },
      { name: "Dusty Peach", hex: "#E8B49B" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fabric: "Chanderi Silk with Mulmul Cotton Lining",
    weave: "Hand Block Print & Marodi Threadwork",
    origin: "Jaipur & Chanderi",
    washCare: "Dry Clean Only",
    sku: "AAL-ETH-SAL-001",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "A tribute to classic Lucknow court dress. Crafted from lightweight Chanderi silk in a calming pistachio hue, decorated with hand-block printed botanical motifs and delicate zardozi highlights on the split V-neckline.",
    details: [
      "3-Piece Set: Straight Kurta, Pleated Afgani Salwar, and 2.5m Organza Dupatta",
      "Finished with pure gold zari piping along seams",
      "Breathable pure mulmul inner lining"
    ]
  },
  {
    id: "aalaya-eth-02",
    name: "Mumtaz Hand-Embroidered Gharara Ensemble",
    tagline: "Opulent rust terracotta silk gharara set with real zari tilla embroidery",
    category: "ethnic",
    subCategory: "Gharara Sets",
    collection: "Imperial Heritage",
    price: 36000,
    originalPrice: 42000,
    discount: "14% OFF",
    rating: 4.97,
    reviewsCount: 61,
    badge: "Heritage Treasure",
    colors: [
      { name: "Rust Terracotta", hex: "#9E4733" },
      { name: "Royal Purple", hex: "#4B2840" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Pure Banarasi Brocade & Georgette",
    weave: "Zari Tilla and Moti Work",
    origin: "Lucknow Atelier",
    washCare: "Dry Clean Only",
    sku: "AAL-ETH-GHA-002",
    inStock: true,
    isNew: false,
    isBestseller: true,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Evoking the majesty of Mughal royalty. The voluminous knees of the gharara are gathered with intricate hand-embroidered gota ribbons, paired with a short tuned kurta and a heavy brocade dupatta.",
    details: [
      "Traditional flared silhouette with double-tiered ghera",
      "Includes pure silk banarasi woven dupatta with kiran fringes",
      "Custom fit consultation available upon request"
    ]
  },

  // ================= WEDDING & FESTIVE EDITS =================
  {
    id: "aalaya-wed-01",
    name: "Rani Padmavati 24K Gold Tissue Bridal Saree",
    tagline: "Authentic woven real gold zari warp saree with hand-stitched ruby border",
    category: "wedding",
    subCategory: "Bridal Sarees",
    collection: "Royal Palace Couture",
    price: 88000,
    originalPrice: 105000,
    discount: "16% OFF",
    rating: 5.0,
    reviewsCount: 39,
    badge: "Collector Edition",
    colors: [
      { name: "Antique Gold & Ruby", hex: "#C5A059" }
    ],
    sizes: ["Bridal Bespoke Set"],
    fabric: "24K Gold Plated Metallic Yarn & Mulberry Silk",
    weave: "Varanasi Kadwa Master Craft",
    origin: "Varanasi, UP",
    washCare: "Strict Specialist Dry Clean",
    sku: "AAL-WED-SAR-001",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "An authentic museum-grade collector piece. Over 6 months in the weaving loom, combining pure silk with gold-wrapped silver wires to recreate the legendary grandeur of Indian royal courts.",
    details: [
      "Handcrafted certificate of authenticity signed by the Master Weaver",
      "Comes in a handcrafted teakwood keepsake chest with silk lining",
      "Complimentary private styling session with Aalaya head couturier"
    ]
  },
  {
    id: "aalaya-fes-01",
    name: "Diwali Chandrika Brocade Palazzo Set",
    tagline: "Vibrant saffron brocade peplum jacket with crushed tissue palazzos",
    category: "festive",
    subCategory: "Palazzo Sets",
    collection: "Deepavali Glow",
    price: 21000,
    originalPrice: 25500,
    discount: "18% OFF",
    rating: 4.88,
    reviewsCount: 75,
    badge: "Diwali Exclusive",
    colors: [
      { name: "Saffron Marigold", hex: "#E88B24" },
      { name: "Ruby Vermillion", hex: "#9E121E" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Silk Brocade & Lurex Crushed Tissue",
    weave: "Banarasi Weft Brocade",
    origin: "Varanasi & New Delhi",
    washCare: "Dry Clean Only",
    sku: "AAL-FES-PAL-001",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Infused with festive joy and radiance. The structured peplum jacket is woven with marigold floral motifs, nipped at the waist with an ornate jewel buckle, over luminous crushed tissue palazzos.",
    details: [
      "Flattering cinched silhouette suitable for all body types",
      "Concealed front zip with decorative jeweled buttons",
      "Ultra-comfortable elasticated back waistband on palazzos"
    ]
  },

  // ================= PARTY WEAR =================
  {
    id: "aalaya-pty-01",
    name: "Starfall Sequin Corset & Mermaid Skirt Set",
    tagline: "High-voltage molten champagne sequins tailored into a sculptural two-piece",
    category: "party-wear",
    subCategory: "Party Dresses",
    collection: "Noor Soirée",
    price: 28000,
    originalPrice: 34000,
    discount: "18% OFF",
    rating: 4.95,
    reviewsCount: 66,
    badge: "High Glamour",
    colors: [
      { name: "Champagne Sparkle", hex: "#D4AF37" },
      { name: "Midnight Onyx", hex: "#111111" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Micro Stretch Mesh with Dense Hand-stitched Micro Sequins",
    weave: "Corset Boned Architecture",
    origin: "Mumbai Atelier",
    washCare: "Dry Clean Only",
    sku: "AAL-PTY-COR-001",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isTrending: true,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Designed for the spotlight. The structured corset features 12 flexible steel bones for a snatched waistline, paired with a floor-skimming mermaid skirt with a dramatic thigh-high slit.",
    details: [
      "Fully lined in soft microfiber to prevent friction",
      "Lace-up back corset allows 2-inch size flexibility",
      "Invisible zip on skirt"
    ]
  }
];

// Master categories mapping for UI navigation & filters
const AALAYA_CATEGORIES = [
  { id: "all", name: "All Collections", count: 18, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" },
  { id: "sarees", name: "Sarees", count: 4, label: "Timeless Drapes", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" },
  { id: "kurtis", name: "Kurtis & Sets", count: 3, label: "Effortless Grace", image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80" },
  { id: "lehengas", name: "Lehengas", count: 3, label: "Couture Silhouettes", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80" },
  { id: "dresses", name: "Dresses & Gowns", count: 3, label: "Contemporary Glamour", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" },
  { id: "ethnic", name: "Ethnic Wear", count: 2, label: "Awadh & Rajputana", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80" },
  { id: "western", name: "Western & Co-ords", count: 3, label: "Modern Sartorial", image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80" },
  { id: "wedding", name: "Wedding Couture", count: 3, label: "Moments That Matter", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80" },
  { id: "festive", name: "Festive Season", count: 2, label: "Celebrate in Style", image: "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=800&q=80" },
  { id: "party-wear", name: "Party Wear", count: 1, label: "Own the Night", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" }
];

// Editorial Magazine Stories
const AALAYA_JOURNAL_ARTICLES = [
  {
    id: "art-01",
    title: "The Alchemy of Varanasi Katan: 500 Years of Warp & Weft",
    subtitle: "A journey through the labyrinthine lanes of Bunkar Tola where Master Weavers breathe life into molten zari.",
    author: "Gayatri Devi",
    category: "Heritage & Craft",
    readTime: "6 min read",
    date: "September 24, 2026",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
    excerpt: "Before the first gold thread pierces the mulberry warp, there is an unspoken dialogue between weaver and loom that has survived half a millennium of Indian dynastic shifts.",
    tags: ["Banarasi", "Handloom", "Sustainable Fashion", "Craftsmanship"]
  },
  {
    id: "art-02",
    title: "The Modern Bride's Guide to Draping: Beyond the Traditional Nivi",
    subtitle: "How international runway stylists are reimagining the six yards for contemporary sangeets and cocktail receptions.",
    author: "Rhea Kapoor-Sen",
    category: "Styling Masterclass",
    readTime: "5 min read",
    date: "September 18, 2026",
    heroImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85",
    excerpt: "From waterfall pleated falls over cigarette trousers to the Grecian shoulder cinch, explore modern draping techniques that honor tradition while liberating movement.",
    tags: ["Saree Styling", "Bridal Edit", "Runway Trends"]
  },
  {
    id: "art-03",
    title: "Poetry in Shadow: Decoding the 32 Stitches of Awadh Chikankari",
    subtitle: "Exploring how tepchi, bakhiya, and phanda hand stitches transform humble muslin into regal couture.",
    author: "Kavita Rao",
    category: "Artisanal Stories",
    readTime: "7 min read",
    date: "September 12, 2026",
    heroImage: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=85",
    excerpt: "Born in the royal courts of Awadh under the patronage of Empress Noor Jahan, Chikankari is perhaps the world's most delicate whisper of white-on-white textile art.",
    tags: ["Chikankari", "Lucknow", "Textile Heritage"]
  }
];

// Customer Editorial Reviews
const AALAYA_TESTIMONIALS = [
  {
    name: "Dr. Ananya Singhal",
    role: "Neurologist & Classical Odissi Dancer",
    location: "South Delhi",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    product: "The Ayodhya Vermillion Katan Silk Saree",
    rating: 5,
    quote: "Wearing AALAYA feels less like putting on clothing and more like stepping into living history. The pure gold kadhwa zari doesn't prick or scratch; it has a buttery drape that moved effortlessly during my sister's wedding phera ceremony."
  },
  {
    name: "Meera Oberoi",
    role: "Creative Director",
    location: "London / Mumbai",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    product: "The Noor-e-Khaas Velvet Bridal Lehenga",
    rating: 5,
    quote: "My bespoke bridal consultation with the Aalaya atelier was exceptional. Every zardozi petal was tailored to perfection, and having our wedding vows hand-embroidered into the inner waistband made it an emotional heirloom."
  },
  {
    name: "Ayesha Bilgrami",
    role: "Architect & Collector",
    location: "Hyderabad",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    product: "Awadh Pearl Chikankari Anarkali Set",
    rating: 5,
    quote: "The sheer craftsmanship of the shadow stitches is breathtaking. In a world of fast polyester fashion, Aalaya is a sacred sanctuary of authentic Indian textile luxury."
  }
];
