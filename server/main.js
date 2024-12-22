import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import registerRoute from './routes/userroute.js';
import userprofileRoute from './routes/userprofileroute.js';
import articleRoute from './routes/articleroute.js';
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/user', registerRoute);
app.use('/userprofile', userprofileRoute);
app.use('/article', articleRoute);

mongoose.connect(process.env.MONGODB_URI)
    .then(console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });
