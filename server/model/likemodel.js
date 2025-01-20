import mongoose from "mongoose";

const likeDislikeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'userdata',
    },

    articleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'articlecreationmodel',
    },
    type:  {
        type: String,
        required: true,
        enum: ['like', 'dislike'],
    },
});

const LikeModel = new mongoose.model('Like', likeDislikeSchema);
export default LikeModel;