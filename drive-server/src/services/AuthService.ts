import { OAuth2Client,  } from 'google-auth-library';
import { google, oauth2_v2 } from 'googleapis';
import jwt from 'jsonwebtoken';


export class AuthService {
  private oauth2Client: OAuth2Client;

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


  public createAuthUrl(): string {
    const scopes = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ];
    return this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
    })
  }

  public async getTokensFromCode(code: string): Promise<any> {
    
    const {tokens} = await this.oauth2Client.getToken({
      code,
      redirect_uri: process.env.CALLBACK_URL
    });
    this.oauth2Client.setCredentials(tokens);
    return tokens;
  }
  public async getUserInfo(accessToken: string): Promise<oauth2_v2.Schema$Userinfo> {
    // Create a new OAuth2Client with the provided access token
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({
      access_token: accessToken,
    });

    // Get the OAuth2 API client
    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: 'v2',
    });

    // Fetch the user information
    try {
      const userInfoResponse = await oauth2.userinfo.get();
      return userInfoResponse.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw new Error('Unable to fetch user information');
    }
  }
}