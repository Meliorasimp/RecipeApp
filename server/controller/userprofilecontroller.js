import userprofilemodel from "../model/userprofilemodel.js";

export const createImage = async (req, res) => {
    try {
        if(req.file === undefined) {
            return res.status(400).json({ message: "Please upload an image" });
        }

        const newImage = new userprofilemodel({ image: req.file.path });
        await newImage.save();

        res.status(201).json({ message: "Image uploaded successfully", imageUrl: req.file.path, newImage });
    }
    catch(error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}