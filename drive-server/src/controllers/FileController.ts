import { Request, Response } from "express";
import { FileService } from "../services/FileService";
import multer from 'multer';
import fs from 'fs';


const upload = multer({dest: 'uploads/'})

export class FileController {

  private fileService: FileService;

  constructor(bucketName: string) {
    this.fileService = new FileService(bucketName);
  }

  public async uploadFile(req: Request, res: Response) {
    
    const singleUpload = upload.single('file');
    console.log(req);
    singleUpload(req, res, async (err) => {
      if(err) {
        return res.status(422).send({ error: 'File upload error' });
      }
      if(!req.file) {
        return res.status(400).send({ error: 'No file provided' });
      }
      try {
        const fileName = req.file.originalname;
        const signedUrl = await this.fileService.generateUploadSignedUrl(fileName);
        await this.fileService.uploadFileToGCS(signedUrl, req.file.path);
        fs.unlinkSync(req.file.path);
        res.status(200).send('File uploaded successfully');

      } catch (error) {
        if(req.file && fs.existsSync(req.file.path)) {
          fs.unlinkSync(req.file.path);
        }
        res.status(500).json({error: 'Error in uploading file'})
      }
    })
  }


}