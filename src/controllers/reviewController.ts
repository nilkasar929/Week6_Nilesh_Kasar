import { Request, Response } from 'express';
import reviewService from '../services/reviewService';

export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await reviewService.getReviews(req.params.bookId);
    res.json(reviews);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const addReview = async (req: Request, res: Response) => {
  try {
    const review = await reviewService.addReview((req as any).user.userId, req.params.bookId, req.body);
    res.status(200).json(review);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const result = await reviewService.deleteReview((req as any).user, req.params.id);
    if (!result) return res.status(404).json({ error: 'Review not found or unauthorized' });
    res.json({ message: 'Review deleted' });
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
