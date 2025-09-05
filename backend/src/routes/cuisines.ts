import express from 'express';
import { getAllCuisines } from '../controllers/cuisineController';

const router = express.Router();

// GET /api/cuisines - Get all cuisines
router.get('/', getAllCuisines);

export default router;