import { Request, Response } from 'express';
import gocardless from '../common/gocardless';

export const createPayment = async (req: Request, res: Response) => {
  try {
    const { amount, currency, mandate_id } = req.body;

    const payment = await gocardless.payments.create({
      params: {
        amount,
        currency,
        links: {
          mandate: mandate_id,
        },
      },
    });

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ "message": error});
  }
};

export const getPaymentById = async (req: Request, res: Response) => {
  try {
    const payment = await gocardless.payments.find(req.params.id);
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ "message": error});
  }
};
