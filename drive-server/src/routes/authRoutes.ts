import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router: Router = Router();
const authController = new AuthController();

router.get('/google', (req, res) => authController.redirectToGoogle(req, res));
router.get('/google/callback', (req, res) => authController.getGoogleAccountFromCode(req, res));
router.get('/userinfo',authMiddleware, (req, res) => authController.getUserInfo(req, res));

export default router;


//authController.getGoogleAccountFromCode