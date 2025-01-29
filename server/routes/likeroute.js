import { likeArticle, dislikeArticle } from "../controller/likecontroller.js";
import express from "express";
const router = express.Router();

router.post('/likearticle', likeArticle);

router.post('/dislikearticle', dislikeArticle);

export default router;