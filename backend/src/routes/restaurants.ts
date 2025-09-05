import express from 'express';
import {
  getAllRestaurants,
  getRestaurantById,
  getRestaurantsByCategory,
  searchRestaurants
} from '../controllers/restaurantController';

const router = express.Router();

// GET /api/restaurants - Get all restaurants
router.get('/', getAllRestaurants);

// GET /api/restaurants/search?q=query - Search restaurants
router.get('/search', searchRestaurants);

// GET /api/restaurants/category/:category - Get restaurants by category
router.get('/category/:category', getRestaurantsByCategory);

// GET /api/restaurants/:id - Get restaurant by ID
router.get('/:id', getRestaurantById);

export default router;