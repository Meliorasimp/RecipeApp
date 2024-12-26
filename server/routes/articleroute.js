import { createArticle, getArticlesByUser, deleteOneArticle } from "../controller/articlecreationcontroller.js";
import { upload } from "../middleware/imageuploader.js";
import express from "express";
const router = express.Router();

router.post('/create', upload.single('image'), createArticle);
router.get('/getByUser', getArticlesByUser);
router.delete('/delete/:id', deleteOneArticle);

export default router;