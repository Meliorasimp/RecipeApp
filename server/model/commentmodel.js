import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    CommenterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdata',
        required: true,
    },
    ArticleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'articlecreationmodel',
        required: true,
    },
    Content: {
        type: String,
        required: true,
    },
    DateCommented: {
        type: Date,
        default: Date.now,
    },
});

const CommentModel = new mongoose.model('commentdata', CommentSchema);

export default CommentModel;