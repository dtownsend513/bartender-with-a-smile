import { Product } from "@/components/CartContext";

export const categoryLabels: Record<string, string> = {
  all: "All Products",
  "cleansing-bars": "Cleansing Bars",
  "body-oil-serums": "Body Oil & Serums",
  "body-creams-butter": "Body Creams & Butter",
};

export function formatCategoryName(category: string) {
  return categoryLabels[category] || category;
}

export const products: Product[] = [
  {
    id: "lavender-oat-soap",
    name: "Lavender Oatmeal Handmade Soap",
    price: 12.99,
    image: "https://m.media-amazon.com/images/I/71aKESRyr7L._UF1000,1000_QL80_.jpg",
    description: "Soothing lavender and gentle oatmeal combine for a relaxing, nourishing cleanse.",
    category: "cleansing-bars",
    ingredients: ["Olive Oil", "Coconut Oil", "Shea Butter", "Lavender Essential Oil", "Oatmeal", "Sodium Hydroxide"],
  },
  {
    id: "handmade-cream-bar",
    name: "Cream Bar",
    price: 10.99,
    image: "/images/creambar.jpg",
    description: "A rich handmade cleansing bar designed for a smooth, creamy lather.",
    category: "cleansing-bars",
    ingredients: ["Natural Oils", "Essential Oils", "Natural Colorants", "Botanicals", "Shea Butter"],
  },
  {
    id: "natural-bar-soaps",
    name: "Natural Cleansing Bar Trio",
    price: 24.99,
    image: "/images/3bars.png",
    description: "Three handcrafted cleansing bars made for everyday self-care.",
    category: "cleansing-bars",
    ingredients: ["Coconut Oil", "Palm Oil", "Olive Oil", "Natural Fragrances", "Plant-Based Colorants"],
  },
  {
    id: "premium-soap-gift-set",
    name: "Premium Soap Gift Set",
    price: 34.99,
    image: "https://i.etsystatic.com/17407682/r/il/7f8feb/5814549555/il_570xN.5814549555_qi4q.jpg",
    description: "A beautifully packaged soap collection perfect for gifting or personal self-care.",
    category: "cleansing-bars",
    ingredients: ["Premium Natural Oils", "Botanicals", "Essential Oil Blends", "Natural Clays"],
  },
  {
    id: "body-butter-cream",
    name: "Whipped Body Butter",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&w=800",
    description: "Rich whipped body butter that melts into skin for lasting moisture.",
    category: "body-creams-butter",
    ingredients: ["Shea Butter", "Cocoa Butter", "Coconut Oil", "Vitamin E", "Natural Fragrance"],
  },
  {
    id: "himalayan-salt-scrub",
    name: "Himalayan Pink Salt Scrub",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&w=800",
    description: "A mineral-rich exfoliating scrub made to leave skin soft and refreshed.",
    category: "body-creams-butter",
    ingredients: ["Himalayan Pink Salt", "Sweet Almond Oil", "Vitamin E Oil", "Essential Oils"],
  },
  {
    id: "nourishing-body-oil",
    name: "Nourishing Body Oil Blend",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&w=800",
    description: "A lightweight body oil blend made for soft, glowing skin.",
    category: "body-oil-serums",
    ingredients: ["Jojoba Oil", "Argan Oil", "Rosehip Oil", "Lavender Essential Oil", "Frankincense Essential Oil"],
  },
  {
    id: "golden-yellow-soap",
    name: "Golden Honey & Oat Soap",
    price: 14.99,
    image: "http://bigislandbees.com/cdn/shop/products/raw-organic-honey-bath-and-body-products-big-island-bees-lehua-honey-bar-soaps-grouped_638e608b-ed53-42f7-8117-46577da0b290.jpg?v=1506725343",
    description: "Golden soap enriched with honey and oatmeal for gentle daily cleansing.",
    category: "cleansing-bars",
    ingredients: ["Raw Honey", "Oatmeal", "Olive Oil", "Coconut Oil", "Turmeric", "Natural Glycerin"],
  },
];

export const categories = [
  { id: "all", name: categoryLabels.all },
  { id: "cleansing-bars", name: categoryLabels["cleansing-bars"] },
  { id: "body-oil-serums", name: categoryLabels["body-oil-serums"] },
  { id: "body-creams-butter", name: categoryLabels["body-creams-butter"] },
];

export function getProductsByCategory(category: string) {
  if (category === "all") return products;
  return products.filter((product) => product.category === category);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}