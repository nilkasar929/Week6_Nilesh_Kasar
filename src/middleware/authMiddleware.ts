import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import  User  from '../models/user';
import dotenv from 'dotenv'
dotenv.config();



const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Authentication required' });

  try {
    
    const decoded = jwt.verify(token, process.env.SECRET_KEY as any) as any;
    (req as any).user = await User.findByPk(decoded.userId);
    if (!(req as any).user) throw new Error();
    next();
  } catch (err) {
    res.status(401).json({ error: 'Authentication required' });
  }
};

export default auth;
