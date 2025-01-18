import { createArticle, getArticlesByUser, deleteOneArticle, publishArticle, GetIntroduction, totalRecipesMade, getArticleById, getAllArticlesExceptUser } from "../controller/articlecreationcontroller.js";
import { upload } from "../middleware/imageuploader.js";
import multer from "multer";
import express from "express";
const router = express.Router();

router.post('/create', upload.single('image'), createArticle);

router.put('/publish/:id', publishArticle);

router.get('/getintro/:id', GetIntroduction);

router.get('/getByUser', getArticlesByUser);

router.get('/getArticleById/:id', getArticleById);

router.get('/getRecipesMade/:id', totalRecipesMade)

router.get('/getAllArticleExceptUser/:id', getAllArticlesExceptUser);

router.delete('/delete/:id', deleteOneArticle);

export default router;