import mongoose from "mongoose";
import ArticleCreationModel from "../model/articlecreationmodel.js";
import path from 'path';

export const createArticle = async (req, res) => { 
    try { 
        const { title, body, category, createdAt, author, ingredients } = req.body; 
        const image = req.file ? `/uploads/${req.file.filename}` : null
        
        if (!title || !body || !category || !createdAt || !author || !image || !ingredients) { 
            console.log('Missing Fields:', { title, body, category, createdAt, author, image, ingredients }); 
            return res.status(400).json({ message: "Fill in All Fields!" }); 
        }

        const newArticle = new ArticleCreationModel({ title, body, image, category, createdAt, author, ingredients}); 

        await newArticle.save(); res.status(201).json({ message: "Article Created Successfully" }); 
    }

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

export const publishArticle = async (req, res) => {
    const id = req.params.id;
    const { introduction } = req.body;

    try {
        const article = await ArticleCreationModel.findById(id);
        if(article) {
            if(!article.isPublished) {
                article.isPublished = true;
                article.introduction = introduction;
                await article.save();
                res.status(200).json({message: "Article Published Successfully"});
            }
            else if (article.isPublished) {
                article.isPublished = false;
                await article.save();
                res.status(200).json({message: "Article Unpublished Successfully"});
            }
            else {
                res.status(404).json({message: "Article Not Found"});
            }
        }
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const GetIntroduction = async(req, res) => {
    const id = req.params.id;
    try {
        const article = await ArticleCreationModel.findById(id).select('_id introduction isPublished');

        if(article.introduction && article.isPublished) {
            res.status(200).json(article);
        }
        else {
            res.status(404).json({message: "Article Not Found"});
        }
    }

    catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const totalRecipesMade = async (req, res) => { 
    const id = req.params.id; 
    try { 
        const result = await ArticleCreationModel.aggregate([ 
            { $match: { isPublished: true, author: new mongoose.Types.ObjectId(id) } }, 
            { $group: { _id: null, total: { $sum: 1 } } } 
        ]); 
        
        res.status(200).json(result[0] ? { total: result[0].total } : { total: 0 }); } 
    catch (error) { 
        console.error('Error in totalRecipesMade:', error); 
        res.status(500).json({ message: error.message }); 
    } 
};

export const getArticleById = async (req, res) => {
    const id = req.params.id;
    try {
        const article = await ArticleCreationModel.findById(id).populate('author', 'username');
        if(article) {
            res.status(200).json(article);
        }
        else {
            res.status(404).json({message: "Article Not Found"});
        }
    }

    catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const getAllArticlesExceptUser = async (req, res) => {
    const { id } = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message: "Invalid User ID"});
        }
        const objectId = new mongoose.Types.ObjectId(id);
        const articles = await ArticleCreationModel.find({author: {$ne: objectId}}).populate('author','username');
        res.status(200).json(articles);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

export const getAllArticles = async (req, res) => {
    try{
        const articles = await ArticleCreationModel.find().populate('author', 'username');
        res.status(200).json(articles);
        if(!articles) {
            res.status(404).json({message: "No Articles Found"});
        }
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}