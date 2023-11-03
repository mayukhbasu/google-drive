import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';

const router: Router = Router();
const authController = new AuthController();

router.get('/google', (req, res) => authController.redirectToGoogle(req, res));
router.get('/google/callback', (req, res) => authController.getGoogleAccountFromCode(req, res));

export default router;


//authController.getGoogleAccountFromCode