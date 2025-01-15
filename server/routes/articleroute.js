import { createArticle, getArticlesByUser, deleteOneArticle, publishArticle, GetIntroduction } from "../controller/articlecreationcontroller.js";
import { upload } from "../middleware/imageuploader.js";
import multer from "multer";
import express from "express";
const router = express.Router();

router.post('/create', upload.single('image'), createArticle);

router.put('/publish/:id', publishArticle);

router.get('/getintro/:id', GetIntroduction);

router.get('/getByUser', getArticlesByUser);

router.delete('/delete/:id', deleteOneArticle);



export default router;