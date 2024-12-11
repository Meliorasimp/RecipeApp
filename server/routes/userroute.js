import { registerUsers, loginUsers } from "../controller/usercontroller.js";
import express from "express";
const router = express.Router();

router.post('/register', registerUsers);
router.post('/login', loginUsers);

export default router;