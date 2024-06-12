import { Request, Response } from 'express';
import paymentService from '../services/paymentService';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, bookId, amount } = req.body;
    const order = await paymentService.createOrder(userId, bookId, amount);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await paymentService.getOrderById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
