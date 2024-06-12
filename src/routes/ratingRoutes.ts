import express from 'express';
import * as ratingController from '../controllers/ratingController';
import auth from '../middleware/authMiddleware';

const router = express.Router();

router.get('/books/:bookId/ratings', ratingController.getRatings);
router.post('/books/:bookId/ratings', auth, ratingController.addRating);

export default router;
