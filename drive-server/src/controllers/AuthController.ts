import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public async redirectToGoogle(req: Request, res: Response): Promise<void> {
    const url = this.authService.createAuthUrl();
    res.redirect(url);
  }

  public async getGoogleAccountFromCode(req: Request, res: Response) {
    try {
      const { code } = req.query;
      const tokens = await this.authService.getTokensFromCode(code as string);
      
      const userInfo = await this.authService.getUserInfo(tokens.access_token);
      
      // Assuming getUserInfo returns an object with an email property
      if (userInfo && userInfo.email) {
        const user = { email: userInfo.email };
        const token = this.authService.generateToken(user);
        res.cookie('access_token', tokens.access_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', // use secure cookies in production
          maxAge: tokens.expiry_date - Date.now(), // set the cookie expiry
        });
        const frontEndHost = process.env.FRONTEND_HOST || 'http://localhost:3000';
        res.redirect(`${frontEndHost}/home`);
      } else {
        throw new Error('User information could not be retrieved');
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error retrieving the Google account' });
    }
  }

  public async getUserInfo(req: Request, res: Response): Promise<any> {
    res.json({ user: req.user });
    // try {
    //   const accessToken = req.cookies['access_token'];
    //   if (!accessToken) {
    //     return res.status(401).json({ message: 'No access token provided' });
    //   }
    //   const userInfo = await this.authService.getUserInfo(accessToken);
    //   res.json(userInfo);
    // }catch(err) {
    //   console.error('Error getting user info:', err);
    //   res.status(500).json({ message: 'Error retrieving user info' });
    // }
  }
}