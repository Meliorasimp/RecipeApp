import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const sanitizedFilename = `${Date.now()}-${file.originalname.trim()}`;
        cb(null, sanitizedFilename);
    },
});

export const upload = multer({ storage });
