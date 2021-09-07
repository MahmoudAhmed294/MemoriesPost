import express from "express";
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../Controllers/post.js';
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);



export default router;