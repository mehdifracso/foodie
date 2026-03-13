import { Category, Product } from "./types";

export const categories: Category[] = [
  {
    slug: "fruits-vegetables",
    name: "Fruits & Vegetables",
    nameAr: "فواكه و خضروات",
    image: "🥬",
    productCount: 6,
  },
  {
    slug: "dairy-eggs",
    name: "Dairy & Eggs",
    nameAr: "ألبان و بيض",
    image: "🥛",
    productCount: 5,
  },
  {
    slug: "spices-herbs",
    name: "Spices & Herbs",
    nameAr: "توابل و أعشاب",
    image: "🌿",
    productCount: 6,
  },
  {
    slug: "grains-flour",
    name: "Grains & Flour",
    nameAr: "حبوب و دقيق",
    image: "🌾",
    productCount: 5,
  },
  {
    slug: "oils-condiments",
    name: "Oils & Condiments",
    nameAr: "زيوت و بهارات",
    image: "🫒",
    productCount: 5,
  },
  {
    slug: "beverages",
    name: "Beverages",
    nameAr: "مشروبات",
    image: "🍵",
    productCount: 5,
  },
];

export const products: Product[] = [
  // Fruits & Vegetables
  {
    id: "fv-001",
    name: "Fresh Tomatoes",
    nameAr: "طماطم طازجة",
    category: "fruits-vegetables",
    price: 8,
    unit: "kg",
    minOrder: 5,
    image: "🍅",
    description:
      "Locally sourced fresh tomatoes from Agadir region. Perfect for salads, tagines, and sauces.",
  },
  {
    id: "fv-002",
    name: "Oranges",
    nameAr: "برتقال",
    category: "fruits-vegetables",
    price: 6,
    unit: "kg",
    minOrder: 10,
    image: "🍊",
    description:
      "Sweet Moroccan oranges from the Berkane region. Ideal for fresh juice and retail.",
  },
  {
    id: "fv-003",
    name: "Potatoes",
    nameAr: "بطاطس",
    category: "fruits-vegetables",
    price: 5,
    unit: "kg",
    minOrder: 10,
    image: "🥔",
    description:
      "Premium quality potatoes. Versatile for all cooking needs, sourced from local farms.",
  },
  {
    id: "fv-004",
    name: "Onions",
    nameAr: "بصل",
    category: "fruits-vegetables",
    price: 4,
    unit: "kg",
    minOrder: 10,
    image: "🧅",
    description:
      "Fresh yellow onions, a staple in every Moroccan kitchen. Bulk pricing available.",
  },
  {
    id: "fv-005",
    name: "Fresh Mint",
    nameAr: "نعناع طازج",
    category: "fruits-vegetables",
    price: 3,
    unit: "bunch",
    minOrder: 20,
    image: "🌿",
    description:
      "Aromatic fresh mint, essential for Moroccan tea. Delivered fresh daily.",
  },
  {
    id: "fv-006",
    name: "Lemons",
    nameAr: "ليمون",
    category: "fruits-vegetables",
    price: 10,
    unit: "kg",
    minOrder: 5,
    image: "🍋",
    description:
      "Juicy lemons perfect for preserved lemons (l'hamd marakad) and cooking.",
  },

  // Dairy & Eggs
  {
    id: "de-001",
    name: "Fresh Milk",
    nameAr: "حليب طازج",
    category: "dairy-eggs",
    price: 7,
    unit: "liter",
    minOrder: 20,
    image: "🥛",
    description:
      "Fresh pasteurized whole milk. Delivered chilled from local dairy farms.",
  },
  {
    id: "de-002",
    name: "Farm Eggs",
    nameAr: "بيض بلدي",
    category: "dairy-eggs",
    price: 18,
    unit: "tray (30)",
    minOrder: 5,
    image: "🥚",
    description:
      "Free-range farm eggs (beldi). 30 eggs per tray, sourced from local poultry farms.",
  },
  {
    id: "de-003",
    name: "Lben (Buttermilk)",
    nameAr: "لبن",
    category: "dairy-eggs",
    price: 5,
    unit: "liter",
    minOrder: 10,
    image: "🥛",
    description:
      "Traditional Moroccan buttermilk (lben). A refreshing dairy drink loved across Morocco.",
  },
  {
    id: "de-004",
    name: "Jben (Fresh Cheese)",
    nameAr: "جبن طازج",
    category: "dairy-eggs",
    price: 25,
    unit: "kg",
    minOrder: 3,
    image: "🧀",
    description:
      "Traditional fresh Moroccan cheese (jben). Handmade, soft, and creamy.",
  },
  {
    id: "de-005",
    name: "Butter (Smen)",
    nameAr: "سمن بلدي",
    category: "dairy-eggs",
    price: 80,
    unit: "kg",
    minOrder: 2,
    image: "🧈",
    description:
      "Traditional aged Moroccan butter (smen). Used in couscous, rfissa, and many dishes.",
  },

  // Spices & Herbs
  {
    id: "sh-001",
    name: "Cumin",
    nameAr: "كمون",
    category: "spices-herbs",
    price: 60,
    unit: "kg",
    minOrder: 2,
    image: "🫙",
    description:
      "Ground Moroccan cumin. Essential spice for tagines, kefta, and harira soup.",
  },
  {
    id: "sh-002",
    name: "Paprika",
    nameAr: "فلفل أحمر حلو",
    category: "spices-herbs",
    price: 45,
    unit: "kg",
    minOrder: 2,
    image: "🌶️",
    description:
      "Sweet Moroccan paprika. Gives dishes their signature red color and smoky flavor.",
  },
  {
    id: "sh-003",
    name: "Saffron",
    nameAr: "زعفران",
    category: "spices-herbs",
    price: 35,
    unit: "gram",
    minOrder: 10,
    image: "🧡",
    description:
      "Premium Taliouine saffron, world-renowned Moroccan saffron. The finest quality available.",
  },
  {
    id: "sh-004",
    name: "Ras El Hanout",
    nameAr: "راس الحانوت",
    category: "spices-herbs",
    price: 70,
    unit: "kg",
    minOrder: 1,
    image: "🫙",
    description:
      "Traditional Moroccan spice blend with 20+ spices. The king of all spice mixes.",
  },
  {
    id: "sh-005",
    name: "Turmeric",
    nameAr: "خرقوم",
    category: "spices-herbs",
    price: 40,
    unit: "kg",
    minOrder: 2,
    image: "🟡",
    description:
      "Pure ground turmeric. Used in Moroccan cooking for color and health benefits.",
  },
  {
    id: "sh-006",
    name: "Cinnamon Sticks",
    nameAr: "قرفة",
    category: "spices-herbs",
    price: 55,
    unit: "kg",
    minOrder: 1,
    image: "🪵",
    description:
      "Whole cinnamon sticks. Used in pastilla, desserts, and Moroccan tea.",
  },

  // Grains & Flour
  {
    id: "gf-001",
    name: "Couscous",
    nameAr: "كسكس",
    category: "grains-flour",
    price: 12,
    unit: "kg",
    minOrder: 10,
    image: "🫘",
    description:
      "Traditional hand-rolled Moroccan couscous. Medium grain, perfect for Friday couscous.",
  },
  {
    id: "gf-002",
    name: "All-Purpose Flour",
    nameAr: "دقيق أبيض",
    category: "grains-flour",
    price: 8,
    unit: "kg",
    minOrder: 25,
    image: "🌾",
    description:
      "Fine white flour for bread (khobz), msemen, and baghrir. Bulk sack pricing.",
  },
  {
    id: "gf-003",
    name: "Semolina",
    nameAr: "سميد",
    category: "grains-flour",
    price: 10,
    unit: "kg",
    minOrder: 10,
    image: "🌾",
    description:
      "Fine semolina flour. Used for harcha, couscous making, and traditional pastries.",
  },
  {
    id: "gf-004",
    name: "Lentils",
    nameAr: "عدس",
    category: "grains-flour",
    price: 15,
    unit: "kg",
    minOrder: 5,
    image: "🫘",
    description:
      "Dried brown lentils. A protein-rich staple for harira and everyday soups.",
  },
  {
    id: "gf-005",
    name: "Chickpeas",
    nameAr: "حمص",
    category: "grains-flour",
    price: 14,
    unit: "kg",
    minOrder: 5,
    image: "🫘",
    description:
      "Dried chickpeas for harira, hummus, and tagines. Premium quality, uniform size.",
  },

  // Oils & Condiments
  {
    id: "oc-001",
    name: "Olive Oil",
    nameAr: "زيت زيتون",
    category: "oils-condiments",
    price: 50,
    unit: "liter",
    minOrder: 5,
    image: "🫒",
    description:
      "Extra virgin olive oil from Meknes region. Cold-pressed, first quality.",
  },
  {
    id: "oc-002",
    name: "Argan Oil (Culinary)",
    nameAr: "زيت أركان",
    category: "oils-condiments",
    price: 150,
    unit: "liter",
    minOrder: 2,
    image: "🫙",
    description:
      "Roasted culinary argan oil. Unique nutty flavor for amlou, salads, and couscous.",
  },
  {
    id: "oc-003",
    name: "Honey",
    nameAr: "عسل حر",
    category: "oils-condiments",
    price: 90,
    unit: "kg",
    minOrder: 2,
    image: "🍯",
    description:
      "Pure wildflower honey from the Atlas mountains. Natural and unprocessed.",
  },
  {
    id: "oc-004",
    name: "Harissa Paste",
    nameAr: "هريسة",
    category: "oils-condiments",
    price: 30,
    unit: "kg",
    minOrder: 3,
    image: "🌶️",
    description:
      "Traditional hot chili paste. Adds heat and depth to any Moroccan dish.",
  },
  {
    id: "oc-005",
    name: "Preserved Lemons",
    nameAr: "حامض مرقد",
    category: "oils-condiments",
    price: 35,
    unit: "kg",
    minOrder: 3,
    image: "🍋",
    description:
      "Salt-preserved lemons aged for months. Essential for chicken tagine and salads.",
  },

  // Beverages
  {
    id: "bv-001",
    name: "Green Tea (Gunpowder)",
    nameAr: "أتاي",
    category: "beverages",
    price: 80,
    unit: "kg",
    minOrder: 5,
    image: "🍵",
    description:
      "Chinese gunpowder green tea, the base of Moroccan mint tea. Premium grade.",
  },
  {
    id: "bv-002",
    name: "Orange Blossom Water",
    nameAr: "ماء زهر",
    category: "beverages",
    price: 25,
    unit: "liter",
    minOrder: 5,
    image: "🌸",
    description:
      "Pure orange blossom water (mazhar). Used in pastries, drinks, and cooking.",
  },
  {
    id: "bv-003",
    name: "Rose Water",
    nameAr: "ماء الورد",
    category: "beverages",
    price: 30,
    unit: "liter",
    minOrder: 5,
    image: "🌹",
    description:
      "Distilled rose water from Kelaat M'gouna. For beverages and Moroccan pastries.",
  },
  {
    id: "bv-004",
    name: "Sugar Loaf",
    nameAr: "قالب سكر",
    category: "beverages",
    price: 15,
    unit: "piece (2kg)",
    minOrder: 10,
    image: "🍬",
    description:
      "Traditional Moroccan cone-shaped sugar loaf. Essential for authentic mint tea.",
  },
  {
    id: "bv-005",
    name: "Dried Verbena",
    nameAr: "لويزة",
    category: "beverages",
    price: 50,
    unit: "kg",
    minOrder: 2,
    image: "🍃",
    description:
      "Dried lemon verbena leaves. Popular herbal tea, calming and aromatic.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
