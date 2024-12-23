import { createArticle, getArticlesByUser } from "../controller/articlecreationcontroller.js";
import { upload } from "../middleware/imageuploader.js";
import express from "express";
const router = express.Router();

router.post('/create', upload.single('image'), createArticle);
router.get('/getByUser', getArticlesByUser);

export default router;