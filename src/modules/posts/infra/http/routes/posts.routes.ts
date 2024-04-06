// Modules Imports
import { Router } from 'express';

// Controllers
import CreatePost from '../controllers/createPost';


const router = Router();

router.post('/create/newpost', CreatePost.NewPost);

export default router;
