// Modules Imports
import { Router } from 'express';

// Controllers
import UserController from '../controllers/user-controller';


const router = Router();

router.post('/', UserController.create);

export default router;
