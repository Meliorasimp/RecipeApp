import mongoose from "mongoose";

const articlecreationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    body: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdata',
    },
})

const ArticleCreationModel = new mongoose.model('ArticleCreation', articlecreationSchema);
export default ArticleCreationModel;