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

app.get('/calculate', (req, res) => {
    const cppFilePath = path.join(__dirname, 'test.cpp');
    const outputFile = path.join(__dirname, 'program.out');

    // Compile the C++ file
    exec(`g++ "${cppFilePath}" -o "${outputFile}"`, (compileError, compileStdout, compileStderr) => {
        if (compileError) {
            console.error(compileError.message);
            return res.status(400).send('Error in compiling C++ code');
        }

        // Run the compiled program
        exec(`"${outputFile}"`, (runError, stdout, stderr) => {
            if (runError) {
                console.error(runError.message);
                return res.status(400).send('Error in running C++ program');
            }

            if (stderr) {
                console.error(stderr);
                return res.status(400).send(stderr);
            }

            console.log('Output:', stdout);
            res.send(stdout);
        });
    });
});

mongoose.connect(process.env.MONGODB_URI)
    .then(console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });
