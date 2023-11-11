import { Request, Response } from "express";
import { FileService } from "../services/FileService";
import multer from 'multer';
import fs from 'fs';
import File,{ IFile } from "../models/file-model";


const upload = multer({dest: 'uploads/'})

export class FileController {

  private fileService: FileService;

  constructor(bucketName: string) {
    this.fileService = new FileService(bucketName);
  }

  public async uploadFile(req: Request, res: Response) {
    if(!req.file) {
      return res.status(400).send({ error: 'No file provided' });
    }

    try {
      const fileName = req.file.originalname;
      const signedUrl = await this.fileService.generateUploadSignedUrl(fileName);
      await this.fileService.uploadFileToGCS(signedUrl, req.file.path);
      await this.saveFileMetadata(req);
      fs.unlinkSync(req.file.path);
      res.status(200).send('File uploaded successfully');
    } catch(error) {
      if (req.file && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }
      res.status(500).json({ error: 'Error in uploading file' });
    }
  }

  private async saveFileMetadata(req: Request) : Promise<void> {
    try {
      const fileData = new File({
        originalname: req.file?.originalname,
        filename: req.file?.filename,
        size: req.file?.size,
        uploaderName: req.user.name
      });
      await fileData.save();
    } catch(error) {
        console.error('Error saving file metadata:', error);
        throw error; // Rethrow the error to be caught by the caller
    } 
  }
}