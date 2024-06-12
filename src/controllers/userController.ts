import { Request, Response } from 'express';
import userService from '../services/userService';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json(user);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await userService.login(username, password);
    if (!token) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ token });
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getCurrentUser((req as any).user.id);
    res.json(user);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
