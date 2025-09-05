import { Request, Response } from 'express';
import Cuisine from '../models/Cuisine';

export const getAllCuisines = async (req: Request, res: Response) => {
  try {
    const cuisines = await Cuisine.find().sort({ name: 1 });
    
    res.status(200).json({
      success: true,
      count: cuisines.length,
      data: cuisines
    });
  } catch (error) {
    console.error('Error fetching cuisines:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};