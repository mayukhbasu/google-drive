import { Request, Response, Router } from 'express';
import { HomeController } from '../controllers/HomeController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const homeController = new HomeController();


router.get('/', authMiddleware,(req: Request, res: Response) => homeController.getIndex(req, res));

export default router;