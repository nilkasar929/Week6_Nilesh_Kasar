import { Request, Response } from 'express';
import gocardless from '../common/gocardless';

export const createMandate = async (req: Request, res: Response) => {
  try {
    const { customer_id, account_number, branch_code } = req.body;

    const mandate = await gocardless.mandates.create({
      params: {
        scheme: 'bacs',
        links: {
          customer: customer_id,
        },
        bank_account: {
          account_number,
          branch_code,
        },
      },
    });

    res.status(201).json(mandate);
  } catch (error) {
    res.status(500).json({ "message":error});
  }
};
