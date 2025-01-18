import express from 'express';
import { addComment } from '../controller/commentcontroller.js';
const router = express.Router();

router.post('/addComment/:id', addComment);

export default router;