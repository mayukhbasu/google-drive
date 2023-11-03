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
      const {code} = req.query;
      const data = await this.authService.getTokensFromCode(code as string);
      const user = {email: data.email};
      const token = this.authService.generateToken(user);
      res.cookie('jwt', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
      res.redirect('/home'); 
    } catch(error) {
      return res.status(500).json({ message: 'Error retrieving the Google account'});
    }
  }
}