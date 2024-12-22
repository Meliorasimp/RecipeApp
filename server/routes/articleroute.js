import { createArticle } from "../controller/articlecreationcontroller.js";
import express from "express";
const router = express.Router();

router.post('/create', createArticle);

export default router;