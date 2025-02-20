const User = require("../models/userModel");
require("dotenv").config();

const addUser = async (req, res) => {
    const { username, email } = req.body;

    try {
        if (!username || !email) {
            return res.status(400).json({
                status: false,
                message: "Missing username or email",
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: false,
                message: "User already exists",
            });
        }

        // Create a new user
        const newUser = new User({
            username,
            email,
        });

        await newUser.save();

        return res.status(201).json({
            status: true,
            message: "User details saved successfully",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: "Internal server error",
        });
    }
};

module.exports = { addUser };
