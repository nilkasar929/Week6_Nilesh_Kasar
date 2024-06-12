import express from 'express';
import * as userController from '../controllers/userController';
import auth from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/users/me', auth, userController.getCurrentUser);

export default router;
