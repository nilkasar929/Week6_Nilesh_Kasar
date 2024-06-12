import { Request, Response } from 'express';
import ratingService from '../services/ratingService';

export const getRatings = async (req: Request, res: Response) => {
  try {
    const ratings = await ratingService.getRatings(req.params.bookId);
    res.json(ratings);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const addRating = async (req: Request, res: Response) => {
  try {
    const rating = await ratingService.addRating((req as any).user.userId, req.params.bookId, req.body);
    res.json(rating);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
