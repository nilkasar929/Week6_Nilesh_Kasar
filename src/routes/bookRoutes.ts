import express from 'express';
import * as bookController from '../controllers/bookController';
import adminAuth from '../middleware/adminAuth';

const router = express.Router();

router.get('/books', bookController.getBooks);
router.get('/books/:id', bookController.getBookById);
router.post('/books', adminAuth, bookController.createBook);
router.put('/books/:id', adminAuth, bookController.updateBook);
router.delete('/books/:id', adminAuth, bookController.deleteBook);

export default router;
