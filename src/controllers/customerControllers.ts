import { Request, Response } from 'express';
import gocardless from '../common/gocardless';
import axios from 'axios';

const goCardlessClient = axios.create({
  baseURL: 'https://api-sandbox.gocardless.com/',
  headers: {
    Authorization: `Bearer ${process.env.GOCARDLESS_ACCESS_TOKEN}`,
    'GoCardless-Version': '2015-07-06',
  },
});

export const createCustomer = async (req: Request, res: Response) => {
  try {
    

    const customer = await gocardless.customers.create(req.body);

    res.status(201).json(customer);
  } catch (error : any) {
    console.error('Error creating customer:', error);

    // Check if the error is from GoCardless
    if (error.response && error.response.body) {
      const { code, message, errors } = error.response.body;
      return res.status(500).json({ code, message, errors });
    }

    res.status(500).json({ error: 'Internal Server Error' });
  }
};  
