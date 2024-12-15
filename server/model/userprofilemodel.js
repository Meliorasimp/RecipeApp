import mongoose from "mongoose";

const userprofileSchema = new mongoose.Schema({
    image: {
        type: String,
    },

    websiteurl: {
        type: String,
    },

    githuburl: {
        type: String,
    },

    linkedinurl: {
        type: String,
    },

    twitterurl: {
        type: String,
    },

    instagramurl: {
        type: String,
    },

    facebookurl: {
        type: String,
    },
})

const userprofilemodel = new mongoose.model('userprofile', userprofileSchema);

export default userprofilemodel;