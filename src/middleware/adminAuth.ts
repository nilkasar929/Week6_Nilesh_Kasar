import { Request, Response, NextFunction } from 'express';
import auth from './authMiddleware';

const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
  await auth(req, res, async () => {
    if (!(req as any).user.isAdmin) {
      return res.status(403).json({ error: 'Admin privileges required' });
    }
    next();
  });
};

export default adminAuth;
