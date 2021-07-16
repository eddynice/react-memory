import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controller/post.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
//router.get('/:id', auth, getPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;