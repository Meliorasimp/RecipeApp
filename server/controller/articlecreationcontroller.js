import ArticleCreationModel from "../model/articlecreationmodel.js";

export const createArticle = async (req, res) => {
    const  { title, body, category, createdAt, author, image  } = req.body;

    if(!title) {
        return res.status(400).json({message: "Title is required When Making an Article"});
    }
    if(!body) {
        return res.status(400).json({message: "Body is required When Making an Article"});
    }

    const newArticle = new ArticleCreationModel({ title, body, image, category, createdAt, author });
    await newArticle.save();
    res.status(201).json({message: "Article Created Successfully"});
}