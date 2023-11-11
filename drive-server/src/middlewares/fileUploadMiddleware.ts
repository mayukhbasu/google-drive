import { NextFunction, Request, Response } from 'express';
import multer from 'multer';

const upload = multer({dest: 'uploads/'});

export const fileUploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const singleUpload = upload.single('file');
  singleUpload(req, res, (err) => {
    if (err) {
      return res.status(422).send({ error: 'File upload error' });
    }
    next();
  })
}