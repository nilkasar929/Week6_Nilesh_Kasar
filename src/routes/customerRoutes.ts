import express from 'express';
import { createCustomer } from '../controllers/customerControllers';

const router = express.Router();

router.post('/customers', createCustomer);

export default router;
