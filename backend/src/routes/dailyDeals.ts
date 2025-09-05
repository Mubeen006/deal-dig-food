import express from 'express';
import { getAllDailyDeals } from '../controllers/dailyDealController';

const router = express.Router();

// GET /api/daily-deals - Get all daily deals
router.get('/', getAllDailyDeals);

export default router;