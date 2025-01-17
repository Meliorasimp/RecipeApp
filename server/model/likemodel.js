import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdata',
    },

    articleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'articlecreationmodel',
    },
});

const LikeModel = new mongoose.model('Like', likeSchema);
export default LikeModel;