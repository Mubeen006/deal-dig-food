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
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Home Taste",
    image: homeTasteImage,
    rating: 5.0,
    reviewCount: 100,
    cuisine: "Pakistani",
    deliveryTime: "5-20 min",
    priceRange: "$",
    discount: "15% off",
    freeDelivery: true,
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
  },
  {
    id: "3",
    name: "Desi Dhaba",
    image: desiDhabaImage,
    rating: 4.9,
    reviewCount: 100,
    cuisine: "Pakistani", 
    deliveryTime: "15-30 min",
    priceRange: "$",
    discount: "10% off",
    freeDelivery: true,
  },
  {
    id: "4",
    name: "The Royal Thai",
    image: royalThaiImage,
    rating: 4.9,
    reviewCount: 59,
    cuisine: "Thai",
    deliveryTime: "20-35 min", 
    priceRange: "$$",
    discount: "Up to 20% off",
    freeDelivery: true,
  },
  {
    id: "5",
    name: "99",
    image: desiDhabaImage,
    rating: 2.2,
    reviewCount: 19,
    cuisine: "Pakistani",
    deliveryTime: "25-40 min",
    priceRange: "$$",
    discount: "10% off",
    freeDelivery: true,
  },
  {
    id: "6",
    name: "Gigi's Kitchen", 
    image: homeTasteImage,
    rating: 4.7,
    reviewCount: 1000,
    cuisine: "Pakistani",
    deliveryTime: "25-40 min",
    priceRange: "$$",
    discount: "10% off selected items",
    freeDelivery: true,
  },
  {
    id: "7",
    name: "Fast Food Corner",
    image: biryaniKaBaapImage,
    rating: 4.2,
    reviewCount: 85,
    cuisine: "Fast Food",
    deliveryTime: "15-25 min",
    priceRange: "$",
    freeDelivery: true,
  },
  {
    id: "8",
    name: "Spice Garden",
    image: royalThaiImage,
    rating: 4.6,
    reviewCount: 200,
    cuisine: "Chinese",
    deliveryTime: "20-30 min",
    priceRange: "$$",
    discount: "20% off",
    freeDelivery: true,
  },
];