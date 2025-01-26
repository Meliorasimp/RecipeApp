import express from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import registerRoute from './routes/userroute.js';
import articleRoute from './routes/articleroute.js';
import commentRoute from './routes/commentroute.js';
import likeRoute from './routes/likeroute.js';
import path from 'path';
const app = express();

dotenv.config();

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.use('/user', registerRoute);
app.use('/article', articleRoute);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/comment', commentRoute);
app.use('/likedislike', likeRoute);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

mongoose.connect(process.env.MONGODB_URI)
    .then(console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });
