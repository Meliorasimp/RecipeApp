import LikeModel from '../model/likemodel.js';

import mongoose from 'mongoose';

export const likeArticle = async (req, res) => {
    const { user, articleId, type } = req.body;

    try {
        let message;
        // Convert articleId to ObjectId
        const articleObjectId = new mongoose.Types.ObjectId(articleId);

        const like = await LikeModel.findOne({ articleId: articleObjectId, user });
        if (like) {
            if (like.type === type) {
                await LikeModel.findOneAndDelete({ articleId: articleObjectId, user, type });
                message = 'Like Removed';
            } else {
                await LikeModel.findOneAndUpdate({ articleId: articleObjectId, user, type });
                message = 'Like Updated';
            }
        } else {
            const newLike = new LikeModel({ user, articleId: articleObjectId, type });
            await newLike.save();
            message = 'Like Added';
        }

        const totalLikes = await LikeModel.aggregate([
            { $match: { articleId: articleObjectId, type: 'like' } }, 
            { $group: { _id: '$articleId', totalLikes: { $sum: 1 } } }
        ]);

        const likesCount = totalLikes.length > 0 ? totalLikes[0].totalLikes : 0;

        console.log('Total Likes:', likesCount);

        return res.status(200).json({ message, totalLikes: likesCount });
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const dislikeArticle = async (req, res) => {
    const { user, articleId, type } = req.body;

    try {
        let message;

        const dislike = await LikeModel.findOne({ articleId, user });
        const articleObjectId = new mongoose.Types.ObjectId(articleId);

        if (dislike) {
            if (dislike.type === type) {
                await LikeModel.deleteOne({ articleId: articleObjectId, user, type });
                message = 'Dislike Removed';
            } else {
                await LikeModel.updateOne({ articleId: articleObjectId, user }, { $set: { type } });
                message = 'Dislike Updated';
            }
        } else {
            const newDislike = new LikeModel({ user, articleId: articleObjectId, type });
            await newDislike.save();
            message = 'Dislike Added';
        }

        const totalDislikes = await LikeModel.aggregate([
            { $match: { articleId: articleObjectId, type: 'dislike' } },
            { $group: { _id: '$articleId', totalDislikes: { $sum: 1 } } }
        ]);

        const dislikesCount = totalDislikes.length > 0 ? totalDislikes[0].totalDislikes : 0;

        return res.status(200).json({ message, totalDislikes: dislikesCount });
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
