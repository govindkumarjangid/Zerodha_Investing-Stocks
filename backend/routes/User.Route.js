import express from 'express';
import { login, register, getProfile } from '../controllers/User.Controller.js';
import { protect } from '../middlware/protect.js';

const userRoute = express.Router();

userRoute.post('/register', register);
userRoute.post('/login', login);
userRoute.get('/me', protect, getProfile);

export default userRoute;