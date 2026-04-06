import jwt from 'jsonwebtoken'
import User from '../models/User.Schema.js';

export const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    } else if (req.headers.authorization) {
        token = req.headers.authorization;
    }

    if (!token)
        return res.json({ success: false, message: "Not Authorized" });

    try {
        const userId = jwt.verify(token, process.env.JWT_SECRET || 'secret');

        if (!userId) return res.json({ success: false, message: "Not Authorized" });


        req.user = await User.findById(userId.id || userId._id || userId).select('-password');

        if (!req.user)
            return res.json({ success: false, message: "User not found" })


        next();

    } catch (error) {
        return res.json({ success: false, message: "Not Authorized" });
    }
}