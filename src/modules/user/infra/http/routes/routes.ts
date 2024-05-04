// Modules Imports
import { Router } from 'express';

// Controllers
import UserController from '../controllers/controllers';


const router = Router();

router.post('/', UserController.create);

export default router;
