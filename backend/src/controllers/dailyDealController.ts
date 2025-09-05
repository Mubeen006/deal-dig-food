import { Request, Response } from 'express';
import DailyDeal from '../models/DailyDeal';

export const getAllDailyDeals = async (req: Request, res: Response) => {
  try {
    const dailyDeals = await DailyDeal.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: dailyDeals.length,
      data: dailyDeals
    });
  } catch (error) {
    console.error('Error fetching daily deals:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};