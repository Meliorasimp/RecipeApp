import { createImage } from "../controller/userprofilecontroller.js";
import express from "express";
const router = express.Router();
import { upload } from "../middleware/imageuploader.js";

router.post("/createimage", upload.single('image'), createImage);

export default router;