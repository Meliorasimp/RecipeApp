import multer from "multer";
import path from "path";
import express from "express";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },

    filename: (req, file, cb) => {
        cb(null, ` ${Date.now()} - ${file.originalname}`);
    },
});

export const upload = multer({storage});