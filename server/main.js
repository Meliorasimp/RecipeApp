import express from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import registerRoute from './routes/userroute.js';
import userprofileRoute from './routes/userprofileroute.js';
import articleRoute from './routes/articleroute.js';
import { exec } from 'child_process';
import path from 'path';
const app = express();

dotenv.config();

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/user', registerRoute);
app.use('/userprofile', userprofileRoute);
app.use('/article', articleRoute);
//test Route for the CPP file

mongoose.connect(process.env.MONGODB_URI)
    .then(console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });
