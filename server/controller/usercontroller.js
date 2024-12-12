import registerUser from "../model/usermodel.js";
import bcrypt from "bcrypt";

export const registerUsers = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if(!username || !email || !password) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        if(password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        const duplicateUserName = await registerUser.findOne({ username });
        const duplicateEmail = await registerUser.findOne({ email });

        if(duplicateUserName) {
            return res.status(400).json({ message: "Username already exists" });
        }

        if(duplicateEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUserData = new registerUser({ username, email, password: hashedPassword });
        await newUserData.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

export const loginUsers = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    const userEmail = await registerUser.findOne({ email });
    if(!userEmail) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const userPassword = await bcrypt.compare(password, userEmail.password);
    if(!userPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    if(userEmail && userPassword) {
        res.status(200).json({ message: "User logged in successfully" });
    }
}