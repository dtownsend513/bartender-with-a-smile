import { Product } from "@/components/CartContext";

export const products: Product[] = [
  {
    id: "lavender-oat-soap",
    name: "Lavender Oatmeal Handmade Soap",
    price: 12.99,
    image: "https://m.media-amazon.com/images/I/71aKESRyr7L._UF1000,1000_QL80_.jpg",
    description: "Soothing lavender and gentle oatmeal combine for a relaxing, nourishing cleanse. Perfect for sensitive skin.",
    category: "cleansing-bars",
    ingredients: ["Olive Oil", "Coconut Oil", "Shea Butter", "Lavender Essential Oil", "Oatmeal", "Sodium Hydroxide"]
  },
  {
    id: "handmade-soap-collection",
    name: "Artisan Soap Collection Set",
    price: 29.99,
    image: "https://lospoblanos.com/uploads/images/blog/_large/bar_soap_set.jpg",
    description: "A curated collection of our most popular handmade soaps, featuring various natural scents and beneficial ingredients.",
    category: "cleansing-bars",
    ingredients: ["Various Natural Oils", "Essential Oils", "Natural Colorants", "Botanicals", "Shea Butter"]
  },
  {
    id: "natural-bar-soaps",
    name: "Natural Cleansing Bar Trio",
    price: 24.99,
    image: "https://m.media-amazon.com/images/I/81iEPV8bCyL._UF1000,1000_QL80_.jpg",
    description: "Three individually crafted cleansing bars with unique blends of natural ingredients for different skin needs.",
    category: "cleansing-bars",
    ingredients: ["Coconut Oil", "Palm Oil", "Olive Oil", "Natural Fragrances", "Plant-Based Colorants"]
  },
  {
    id: "premium-soap-gift-set",
    name: "Premium Soap Gift Set",
    price: 34.99,
    image: "https://i.etsystatic.com/17407682/r/il/7f8feb/5814549555/il_570xN.5814549555_qi4q.jpg",
    description: "Beautifully packaged soap collection perfect for gifting or treating yourself to luxury handmade skincare.",
    category: "cleansing-bars",
    ingredients: ["Premium Natural Oils", "Organic Botanicals", "Essential Oil Blends", "Natural Clays"]
  },
  {
    id: "body-butter-cream",
    name: "Whipped Body Butter",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&w=800",
    description: "Rich, creamy body butter that melts into skin for deep moisturization and nourishment.",
    category: "body-creams-butter",
    ingredients: ["Shea Butter", "Cocoa Butter", "Coconut Oil", "Vitamin E", "Natural Fragrance"]
  },
  {
    id: "himalayan-salt-scrub",
    name: "Himalayan Pink Salt Scrub",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&w=800",
    description: "Exfoliating salt scrub with mineral-rich Himalayan pink salt for smooth, glowing skin.",
    category: "body-creams-butter",
    ingredients: ["Himalayan Pink Salt", "Sweet Almond Oil", "Vitamin E Oil", "Essential Oils", "Natural Preservatives"]
  },
  {
    id: "nourishing-body-oil",
    name: "Nourishing Body Oil Blend",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&w=800",
    description: "Luxurious blend of carrier and essential oils for deep skin nourishment and aromatherapy benefits.",
    category: "body-oil-serums",
    ingredients: ["Jojoba Oil", "Argan Oil", "Rosehip Oil", "Lavender Essential Oil", "Frankincense Essential Oil"]
  },
  {
    id: "golden-yellow-soap",
    name: "Golden Honey & Oat Soap",
    price: 14.99,
    image: "http://bigislandbees.com/cdn/shop/products/raw-organic-honey-bath-and-body-products-big-island-bees-lehua-honey-bar-soaps-grouped_638e608b-ed53-42f7-8117-46577da0b290.jpg?v=1506725343",
    description: "Golden-hued soap bar enriched with raw honey and oatmeal for gentle cleansing and natural exfoliation.",
    category: "cleansing-bars",
    ingredients: ["Raw Honey", "Oatmeal", "Olive Oil", "Coconut Oil", "Turmeric", "Natural Glycerin"]
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "cleansing-bars", name: "Cleansing Bars" },
  { id: "body-oil-serums", name: "Body Oil & Serums" },
  { id: "body-creams-butter", name: "Body Creams & Butter" },
];

export function getProductsByCategory(category: string) {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
}

export function getProductById(id: string) {
  return products.find(product => product.id === id);
}
