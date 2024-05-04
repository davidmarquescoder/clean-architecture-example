// Modules Imports
import { Router } from 'express';

// Controllers
import Controllers from '../controllers/controllers';


const router = Router();

router.post('/', Controllers.create);

export default router;
