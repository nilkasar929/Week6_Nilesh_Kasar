import express from 'express';
import * as reviewController from '../controllers/reviewController';
import auth from '../middleware/authMiddleware';

const router = express.Router();

router.get('/books/:bookId/reviews', reviewController.getReviews);
router.post('/books/:bookId/reviews', auth, reviewController.addReview);
router.delete('/reviews/:id', auth, reviewController.deleteReview);

export default router;
