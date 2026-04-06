import jwt from 'jsonwebtoken'
import User from '../models/User.Schema.js';

export const protect = async (req, res, next) => {
    let token = req.cookies?.token;

    if (req.originalUrl?.includes('/api/auth/me')) {
        console.log('[auth/me] cookie header:', req.headers.cookie || 'none');
        console.log('[auth/me] parsed cookies:', req.cookies || {});
    }

    if (!token && req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    } else if (!token && req.headers.authorization) {
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