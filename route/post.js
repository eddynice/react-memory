import express from 'express';

import { getPost, getPosts, getPostsSearch, createPost, updatePost, likePost, deletePost, commentPost } from '../controller/post.js';
import auth from "../middleware/auth.js";

const router = express.Router();



//router.get('/:id', getPost);
router.get('/search', getPostsSearch);
router.get('/', getPosts);
router.get('/:id', getPost);


router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);

router.get('/:id', getPost);





export default router;