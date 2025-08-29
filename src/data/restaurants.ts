import homeTasteImage from "@/assets/home-taste.jpg";
import biryaniKaBaapImage from "@/assets/biryani-ka-baap.jpg";
import desiDhabaImage from "@/assets/desi-dhaba.jpg";
import royalThaiImage from "@/assets/royal-thai.jpg";

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  cuisine: string;
  deliveryTime: string;
  priceRange: string;
  discount?: string;
  freeDelivery: boolean;
  fastDelivery: boolean;
  deals: boolean;
  isNew?: boolean;
  category?: 'daily-deals' | 'new' | 'discount' | 'all';
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Home Taste",
    image: homeTasteImage,
    rating: 5.0,
    reviewCount: 100,
    cuisine: "Pakistani",
    deliveryTime: "10-25 min",
    priceRange: "$",
    discount: "15% off",
    freeDelivery: true,
    fastDelivery: true,
    deals: true,
    category: 'all',
  },
  {
    id: "2", 
    name: "Biryani Ka Baap",
    image: biryaniKaBaapImage,
    rating: 4.4,
    reviewCount: 100,
    cuisine: "Pakistani",
    deliveryTime: "10-25 min",
    priceRange: "$",
    discount: "Up to 30% off",
    freeDelivery: true,
    fastDelivery: true,
    deals: true,
    category: 'all',
  },
  {
    id: "3",
    name: "Desi Dhaba",
    image: desiDhabaImage,
    rating: 4.9,
    reviewCount: 100,
    cuisine: "Pakistani", 
    deliveryTime: "20-35 min",
    priceRange: "$",
    discount: "10% off",
    freeDelivery: true,
    fastDelivery: false,
    deals: true,
    category: 'all',
  },
  {
    id: "4",
    name: "The Royal Thai",
    image: royalThaiImage,
    rating: 4.9,
    reviewCount: 59,
    cuisine: "Thai",
    deliveryTime: "15-30 min", 
    priceRange: "$$",
    discount: "Up to 20% off",
    freeDelivery: false,
    fastDelivery: true,
    deals: true,
    category: 'all',
  },
  {
    id: "5",
    name: "Support for Gaza - WFP",
    image: desiDhabaImage,
    rating: 5.0,
    reviewCount: 1000,
    cuisine: "American",
    deliveryTime: "5-20 min",
    priceRange: "$$$",
    freeDelivery: true,
    fastDelivery: true,
    deals: false,
    category: 'all',
  },
  {
    id: "6",
    name: "Rewayat", 
    image: homeTasteImage,
    rating: 4.7,
    reviewCount: 1000,
    cuisine: "Pakistani",
    deliveryTime: "20-35 min",
    priceRange: "$$$",
    discount: "10% off",
    freeDelivery: false,
    fastDelivery: false,
    deals: false,
    isNew: true,
    category: 'new',
  },
  {
    id: "7",
    name: "Pakistan Naan centre",
    image: biryaniKaBaapImage,
    rating: 4.9,
    reviewCount: 18,
    cuisine: "Pakistani",
    deliveryTime: "15-30 min",
    priceRange: "$$",
    discount: "30% off",
    freeDelivery: false,
    fastDelivery: false,
    deals: false,
    isNew: true,
    category: 'new',
  },
  {
    id: "8",
    name: "Doughjo Bakery & Cafe",
    image: royalThaiImage,
    rating: 4.8,
    reviewCount: 34,
    cuisine: "Cakes & Bakery",
    deliveryTime: "5-20 min",
    priceRange: "$$",
    freeDelivery: false,
    fastDelivery: false,
    deals: false,
    isNew: true,
    category: 'new',
  },
  {
    id: "9",
    name: "Lazeez Zalqa Kitchen-F7",
    image: desiDhabaImage,
    rating: 4.7,
    reviewCount: 1000,
    cuisine: "Pakistani",
    deliveryTime: "15-30 min",
    priceRange: "$$",
    freeDelivery: false,
    fastDelivery: false,
    deals: false,
    isNew: true,
    category: 'new',
  },
  {
    id: "10",
    name: "2 Broke Engineers",
    image: homeTasteImage,
    rating: 4.7,
    reviewCount: 500,
    cuisine: "Chinese",
    deliveryTime: "15-30 min",
    priceRange: "$$",
    discount: "10% off",
    freeDelivery: false,
    fastDelivery: false,
    deals: false,
    category: 'discount',
  },
  {
    id: "11",
    name: "Lahori Nashta Corner",
    image: biryaniKaBaapImage,
    rating: 4.9,
    reviewCount: 1000,
    cuisine: "Pakistani",
    deliveryTime: "10-25 min",
    priceRange: "$",
    discount: "10% off",
    freeDelivery: false,
    fastDelivery: false,
    deals: false,
    category: 'discount',
  },
  {
    id: "12",
    name: "Kabahjees Fried Chicken",
    image: royalThaiImage,
    rating: 4.4,
    reviewCount: 500,
    cuisine: "Fast Food",
    deliveryTime: "15-30 min",
    priceRange: "$$",
    freeDelivery: false,
    fastDelivery: false,
    deals: false,
    category: 'discount',
  },
];

export const cuisines = [
  { name: "Pizza", image: homeTasteImage },
  { name: "Biryani", image: biryaniKaBaapImage },
  { name: "Burgers", image: desiDhabaImage },
  { name: "Halwa Puri", image: royalThaiImage },
  { name: "Paratha", image: homeTasteImage },
  { name: "Ice Cream", image: biryaniKaBaapImage },
  { name: "Pasta", image: desiDhabaImage },
  { name: "Nihari", image: royalThaiImage },
];

export const dailyDeals = [
  {
    id: "deal1",
    title: "Up to 30% off",
    subtitle: "Handpicked restaurants for you",
    image: homeTasteImage,
    color: "bg-gradient-to-r from-pink-500 to-pink-600"
  },
  {
    id: "deal2", 
    title: "Homely meals with free delivery",
    subtitle: "homechef",
    image: biryaniKaBaapImage,
    color: "bg-gradient-to-r from-pink-400 to-orange-400"
  }
];