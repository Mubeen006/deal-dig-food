import dotenv from 'dotenv';
import connectTestDB from '../config/testDatabase';
import Restaurant from '../models/Restaurant';
import Cuisine from '../models/Cuisine';
import DailyDeal from '../models/DailyDeal';

// Load environment variables
dotenv.config();

// Complete restaurant data matching the frontend exactly
const restaurantsData = [
  {
    id: "1",
    name: "Home Taste",
    image: "/images/home-taste.jpg",
    rating: 5.0,
    reviewCount: 100,
    cuisine: "Pakistani",
    deliveryTime: "10-25 min",
    priceRange: "$",
    discount: "15% off",
    freeDelivery: true,
    fastDelivery: true,
    deals: true,
    isNew: false,
    category: 'all',
  },
  {
    id: "2", 
    name: "Biryani Ka Baap",
    image: "/images/biryani-ka-baap.jpg",
    rating: 4.4,
    reviewCount: 100,
    cuisine: "Pakistani",
    deliveryTime: "10-25 min",
    priceRange: "$",
    discount: "Up to 30% off",
    freeDelivery: true,
    fastDelivery: true,
    deals: true,
    isNew: false,
    category: 'all',
  },
  {
    id: "3",
    name: "Desi Dhaba",
    image: "/images/desi-dhaba.jpg",
    rating: 4.9,
    reviewCount: 100,
    cuisine: "Pakistani", 
    deliveryTime: "20-35 min",
    priceRange: "$",
    discount: "10% off",
    freeDelivery: true,
    fastDelivery: false,
    deals: true,
    isNew: false,
    category: 'all',
  },
  {
    id: "4",
    name: "The Royal Thai",
    image: "/images/royal-thai.jpg",
    rating: 4.9,
    reviewCount: 59,
    cuisine: "Thai",
    deliveryTime: "15-30 min", 
    priceRange: "$",
    discount: "Up to 20% off",
    freeDelivery: false,
    fastDelivery: true,
    deals: true,
    isNew: false,
    category: 'all',
  },
  {
    id: "5",
    name: "Support for Gaza - WFP",
    image: "/images/desi-dhaba.jpg",
    rating: 5.0,
    reviewCount: 1000,
    cuisine: "American",
    deliveryTime: "5-20 min",
    priceRange: "$$",
    freeDelivery: true,
    fastDelivery: true,
    deals: false,
    isNew: false,
    category: 'all',
  },
  {
    id: "6",
    name: "Rewayat", 
    image: "/images/home-taste.jpg",
    rating: 4.7,
    reviewCount: 1000,
    cuisine: "Pakistani",
    deliveryTime: "20-35 min",
    priceRange: "$$",
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
    image: "/images/biryani-ka-baap.jpg",
    rating: 4.9,
    reviewCount: 18,
    cuisine: "Pakistani",
    deliveryTime: "15-30 min",
    priceRange: "$",
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
    image: "/images/royal-thai.jpg",
    rating: 4.8,
    reviewCount: 34,
    cuisine: "Cakes & Bakery",
    deliveryTime: "5-20 min",
    priceRange: "$",
    freeDelivery: false,
    fastDelivery: false,
    deals: false,
    isNew: true,
    category: 'new',
  },
  {
    id: "9",
    name: "Lazeez Zalqa Kitchen-F7",
    image: "/images/desi-dhaba.jpg",
    rating: 4.7,
    reviewCount: 1000,
    cuisine: "Pakistani",
    deliveryTime: "15-30 min",
    priceRange: "$",
    freeDelivery: false,
    fastDelivery: false,
    deals: false,
    isNew: true,
    category: 'new',
  },
  {
    id: "10",
    name: "2 Broke Engineers",
    image: "/images/home-taste.jpg",
    rating: 4.7,
    reviewCount: 500,
    cuisine: "Chinese",
    deliveryTime: "15-30 min",
    priceRange: "$",
    discount: "10% off",
    freeDelivery: false,
    fastDelivery: false,
    deals: false,
    isNew: false,
    category: 'discount',
  },
  {
    id: "11",
    name: "Lahori Nashta Corner",
    image: "/images/biryani-ka-baap.jpg",
    rating: 4.9,
    reviewCount: 1000,
    cuisine: "Pakistani",
    deliveryTime: "10-25 min",
    priceRange: "$",
    discount: "10% off",
    freeDelivery: false,
    fastDelivery: false,
    deals: false,
    isNew: false,
    category: 'discount',
  },
  {
    id: "12",
    name: "Kabahjees Fried Chicken",
    image: "/images/royal-thai.jpg",
    rating: 4.4,
    reviewCount: 500,
    cuisine: "Fast Food",
    deliveryTime: "15-30 min",
    priceRange: "$",
    freeDelivery: false,
    fastDelivery: false,
    deals: false,
    isNew: false,
    category: 'discount',
  },
];

const cuisinesData = [
  { name: "Pizza", image: "/images/home-taste.jpg" },
  { name: "Biryani", image: "/images/biryani-ka-baap.jpg" },
  { name: "Burgers", image: "/images/desi-dhaba.jpg" },
  { name: "Halwa Puri", image: "/images/royal-thai.jpg" },
  { name: "Paratha", image: "/images/home-taste.jpg" },
  { name: "Ice Cream", image: "/images/biryani-ka-baap.jpg" },
  { name: "Pasta", image: "/images/desi-dhaba.jpg" },
  { name: "Nihari", image: "/images/royal-thai.jpg" },
];

const dailyDealsData = [
  {
    id: "deal1",
    title: "Up to 30% off",
    subtitle: "Handpicked restaurants for you",
    image: "/images/home-taste.jpg",
    color: "bg-gradient-to-r from-pink-500 to-pink-600"
  },
  {
    id: "deal2", 
    title: "Homely meals with free delivery",
    subtitle: "homechef",
    image: "/images/biryani-ka-baap.jpg",
    color: "bg-gradient-to-r from-pink-400 to-orange-400"
  }
];

const seedAndStartServer = async () => {
  try {
    // Connect to test database
    await connectTestDB();
    
    console.log('🌱 Starting database seeding...');
    
    // Clear existing data
    await Restaurant.deleteMany({});
    await Cuisine.deleteMany({});
    await DailyDeal.deleteMany({});
    
    console.log('🗑️  Cleared existing data');
    
    // Seed restaurants
    await Restaurant.insertMany(restaurantsData);
    console.log(`✅ Seeded ${restaurantsData.length} restaurants`);
    
    // Seed cuisines
    await Cuisine.insertMany(cuisinesData);
    console.log(`✅ Seeded ${cuisinesData.length} cuisines`);
    
    // Seed daily deals
    await DailyDeal.insertMany(dailyDealsData);
    console.log(`✅ Seeded ${dailyDealsData.length} daily deals`);
    
    console.log('🎉 Database seeding completed successfully!');
    
    // Now start the server
    console.log('🚀 Starting server...');
    
    // Import server components
    const express = require('express');
    const cors = require('cors');
    const helmet = require('helmet');
    const morgan = require('morgan');
    const routes = require('../routes').default;
    const { errorHandler, notFound } = require('../middleware/errorHandler');
    
    const app = express();
    const PORT = process.env.PORT || 5000;
    
    // Middleware
    app.use(helmet());
    app.use(cors({
      origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:8080'],
      credentials: true
    }));
    app.use(morgan('combined'));
    app.use(express.json({ limit: '10mb' }));
    app.use(express.urlencoded({ extended: true }));

    // Routes
    app.use('/api', routes);

    // Root endpoint
    app.get('/', (req: any, res: any) => {
      res.json({
        message: 'Deal Dig Food API (Seeded)',
        version: '1.0.0',
        endpoints: {
          restaurants: '/api/restaurants',
          cuisines: '/api/cuisines',
          dailyDeals: '/api/daily-deals',
          health: '/api/health'
        }
      });
    });

    // Error handling middleware
    app.use(notFound);
    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log(`✅ Server running with seeded data on port ${PORT}`);
      console.log(`🌐 API available at: http://localhost:${PORT}`);
      console.log(`📊 Test endpoints:`);
      console.log(`   - GET http://localhost:${PORT}/api/restaurants`);
      console.log(`   - GET http://localhost:${PORT}/api/cuisines`);
      console.log(`   - GET http://localhost:${PORT}/api/daily-deals`);
    });
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed and server function
seedAndStartServer();