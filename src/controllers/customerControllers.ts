import { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const goCardlessClient = axios.create({
  baseURL: 'https://api-sandbox.gocardless.com/',
  headers: {
    Authorization: `Bearer ${process.env.GOCARDLESS_ACCESS_TOKEN}`,
    'GoCardless-Version': '2015-07-06',
    'Content-Type': 'application/json',
  },
});

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const customerData = req.body;

    const response = await goCardlessClient.post('/customers', { customers: customerData });

    res.status(201).json(response.data.customers);
  } catch (error: any) {
    console.error('Error creating customer:', error);

    if (error.response && error.response.data) {
      const { code, message, errors } = error.response.data;
      return res.status(500).json({ code, message, errors });
    }

    res.status(500).json({ error: 'Internal Server Error' });
  }
};
