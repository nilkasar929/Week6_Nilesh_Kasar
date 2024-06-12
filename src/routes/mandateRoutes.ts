import express from 'express';
import { createMandate } from '../controllers/mandateController';

const router = express.Router();

router.post('/mandates', createMandate);

export default router;
