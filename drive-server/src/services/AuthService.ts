import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';


export class AuthService {
  private oauth2Client;

  constructor() {
    const clientID = process.env.GOOGLE_CLIENT_ID as string;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string;
    const redirectUri = process.env.CALLBACK_URL as string;

    
    this.oauth2Client = new OAuth2Client(
      clientID,
      clientSecret,
      redirectUri
    );
  }

  public generateToken(user: any): string {
    const token = jwt.sign(user, process.env.JWT_SECRET!, {
      expiresIn: '24h', // token will expire in 24 hours
    });

    return token;
  }

  public createAuthUrl(): string {
    const scopes = [
      'https://www.googleapis.com/auth/drive'
    ];
    return this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: scopes,
    })
  }

  public async getTokensFromCode(code: string): Promise<any> {
    const {tokens} = await this.oauth2Client.getToken(code);
    this.oauth2Client.setCredentials(tokens);
    return tokens;
  }
}