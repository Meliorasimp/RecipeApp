import CommentModel from "../model/commentmodel.js";

export const addComment = async (req, res) => {
    const { Content } = req.body;
    const { id } = req.params;

    try {
        const newComment = new CommentModel({ CommenterId: id, Content, DateCommented: Date.now() });
        await newComment.save();
        res.status(201).json({ message: 'Comment added successfully' });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(400).json({ message: 'Error adding comment' });
    }
};
