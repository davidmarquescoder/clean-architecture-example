// Modules Imports
import { Router } from 'express';

// Controllers
import CreatePost from '../controllers/user-controller';


const router = Router();

router.post('/', CreatePost.NewPost);

export default router;
