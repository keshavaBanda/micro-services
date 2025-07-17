const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const existing = await User.findOne({ email });
        if (existing) {
            res.status(400).json({ status: false, message: "User Already Existed" })
        }

        // Hashing Password
        const hashed = await bcrypt.hash(password, 10)
        const user = new User({ name, email, password: hashed });
        const saved = await user.save();
        res.status(201).json({
            status: true,
            message: "User Registred Successfully",
            userId: saved._id
        })
    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            res.status(404).json({ status: false, message: "User not found" })
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            res.status(401).json({ status: false, message: "Invalid Password" })
        }

        //Generate JWT Token
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });

        res.status(200).json({
            status: true,
            message: "Login Successful",
            token
        })
    } catch (error) {
        res.status(500).json({ status: false, error: error.message })
    }
}


module.exports = { registerUser, loginUser }