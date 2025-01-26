import CommentModel from "../model/commentmodel.js";

export const addComment = async (req, res) => {
    const { Content } = req.body;
    const CommenterId = req.body.CommenterId;
    const ArticleId = req.body.ArticleId;

    console.log('CommenterId:', CommenterId);
    console.log('Content:', Content);
    console.log('ArticleId:', ArticleId);
    
    //Add a Comment to the Article using the CommenterId, Content and ArticleId
    try {
        const newComment = new CommentModel({ CommenterId: CommenterId,  Content, ArticleId:ArticleId, DateCommented: Date.now() });
        await newComment.save();
        res.status(201).json({ message: 'Comment added successfully' });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(400).json({ message: 'Error adding comment' });
    }
};

export const getCommentsOnArticle = async (req, res) => {
    const ArticleId = req.params.id;
    // Find all Comments on the Specific Article by Passing the Article Id from the Frontend
    try {
        const comments = await CommentModel.find({ ArticleId: ArticleId }).populate('CommenterId', 'username');
        if(comments) {
            res.status(200).json(comments);
        }
        if(!comments) {
            res.status(404).json({ message: 'No comments found' });
        }
    }
    catch (error) {
        console.error('Error:', error.message);
        res.status(400).json({ message: 'Error fetching comments' });
    }
}
