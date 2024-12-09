import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
    });

mongoose.connect(process.env.MONGODB_URI)
    .then(console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });
