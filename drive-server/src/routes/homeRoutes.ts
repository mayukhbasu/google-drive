import { Request, Response, Router } from 'express';
import { HomeController } from '../controllers/HomeController';

const router = Router();
const homeController = new HomeController();


router.get('/', (req: Request, res: Response) => homeController.getIndex(req, res));

export default router;