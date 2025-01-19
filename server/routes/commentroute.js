import express from 'express';
import { addComment, getCommentsOnArticle } from '../controller/commentcontroller.js';
const router = express.Router();

router.post('/addComment', addComment);

router.get('/getCommentsOnArticle/:id', getCommentsOnArticle);

export default router;