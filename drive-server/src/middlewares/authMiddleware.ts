import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthService } from '../services/AuthService';


export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const accessToken = req.cookies['access_token'];
      if (!accessToken) {
        return res.status(401).json({ message: 'No access token provided' });
      }
      const authService = new AuthService();
      const userInfo = await authService.getUserInfo(accessToken);
      req.user = userInfo;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Failed to authenticate token.' });
  }
};
