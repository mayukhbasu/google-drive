import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { FileController } from '../controllers/FileController';

const router = express.Router();
const bucketName = 'kahn';
const fileController = new FileController(bucketName);

router.post('/upload',  (req, res) => fileController.uploadFile(req, res));

export default router;