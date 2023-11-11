import { Storage, GetSignedUrlConfig } from '@google-cloud/storage';
import fs from 'fs';
import fetch from 'node-fetch';

export class FileService {
  private bucketName: string;
  private storage: Storage;

  constructor(bucketName: string) {
    this.bucketName = bucketName;
    this.storage = new Storage();
  }

  async generateUploadSignedUrl(filename: string): Promise<string> {
    const bucket = this.storage.bucket(this.bucketName);
    const file = bucket.file(filename);

    // Explicit types for the options
    const options: GetSignedUrlConfig = {
      version: 'v4',
      action: 'write',
      expires: Date.now() + 15 * 60 * 1000, // 15 minutes
      contentType: 'application/octet-stream',
    };

    try {
      const [url] = await file.getSignedUrl(options);
      return url;
    } catch (error) {
      console.error('Error generating signed URL', error);
      throw error;
    }
  }

  async uploadFileToGCS(signedUrl: string, filePath: string): Promise<void> {
    const fileBuffer = fs.readFileSync(filePath);
    const response = await fetch(signedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/octet-stream'
      },
      body: fileBuffer
    });
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.statusText}`);
    }
  }
}