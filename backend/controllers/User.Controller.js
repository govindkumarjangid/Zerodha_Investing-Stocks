import User from '../models/User.Schema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password)
            return res.status(400).json({ message: 'All fields are required' });

        let existingUser = await User.findOne({ email });


        if (existingUser)
            return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        const payload = { id: newUser._id, email: newUser.email };
        const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });

        res.status(201).json({ token, user: newUser, message: 'User created successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const payload = { id: user._id, email: user.email };

        const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });

        res.status(200).json({ token, user, message: "Login Successfully" });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}