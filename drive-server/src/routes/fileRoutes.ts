import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { FileController } from '../controllers/FileController';
import multer from 'multer';
import { fileUploadMiddleware } from '../middlewares/fileUploadMiddleware';


const router = express.Router();
const bucketName = 'kahn';
const fileController = new FileController(bucketName);

const upload = multer({dest: 'uploads/'})

router.post('/upload', fileUploadMiddleware, (req, res) => fileController.uploadFile(req, res));

export default router;