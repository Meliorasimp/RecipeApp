import mongoose from "mongoose";
import ArticleCreationModel from "../model/articlecreationmodel.js";
import path from 'path';

export const createArticle = async (req, res) => { 
    try { 
        const { title, body, category, createdAt, author } = req.body; 
        const image = req.file.path; 
        
        if (!title || !body || !category || !createdAt || !author || !image) { 
            console.log('Missing Fields:', { title, body, category, createdAt, author, image }); 
            return res.status(400).json({ message: "Fill in All Fields!" }); 
        } 
        const newArticle = new ArticleCreationModel({ title, body, image, category, createdAt, author}); 
        await newArticle.save(); res.status(201).json({ message: "Article Created Successfully" }); }
     catch (error) { 
        console.error('Error:', error); 
        res.status(500).json({ message: error.message }); 
    } 
};

export const getArticlesByUser = async (req, res) => {
    try {
        const article = await ArticleCreationModel.find().populate('author', 'username');
        res.status(200).json(article);

    }
    catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const deleteOneArticle = async (req, res) => {
    const id = req.params.id;

    try {
        await ArticleCreationModel.findByIdAndDelete(id);
        res.status(200).json({message: "Article Deleted Successfully"});
    }
    catch(error) {
        res.status(404).json({message: error.message});
    }
}