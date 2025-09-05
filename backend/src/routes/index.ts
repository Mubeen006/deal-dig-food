import express from 'express';
import restaurantRoutes from './restaurants';
import cuisineRoutes from './cuisines';
import dailyDealRoutes from './dailyDeals';

const router = express.Router();

// API Routes
router.use('/restaurants', restaurantRoutes);
router.use('/cuisines', cuisineRoutes);
router.use('/daily-deals', dailyDealRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

export default router;