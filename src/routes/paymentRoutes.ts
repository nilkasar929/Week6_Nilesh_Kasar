import express from 'express';
import * as paymentController from '../controllers/paymentController';
import auth from '../middleware/authMiddleware';

const router = express.Router();

router.post('/orders', auth, paymentController.createOrder);
router.get('/orders/:id', auth, paymentController.getOrderById);

export default router;
