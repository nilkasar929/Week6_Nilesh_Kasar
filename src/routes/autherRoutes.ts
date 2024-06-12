import express from 'express';
import * as authorController from '../controllers/authorController';
import adminAuth from '../middleware/adminAuth';

const router = express.Router();

router.get('/authors', authorController.getAuthors);
router.get('/authors/:id', authorController.getAuthorById);
router.post('/authors', adminAuth, authorController.createAuthor);
router.put('/authors/:id', adminAuth, authorController.updateAuthor);
router.delete('/authors/:id', adminAuth, authorController.deleteAuthor);

export default router;
