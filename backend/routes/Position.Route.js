import express from 'express'
import { getPositions } from '../controllers/Position.Controller.js';
import { protect } from '../middlware/protect.js';


const positionRoute = express.Router();

positionRoute.get('/get-positions', protect, getPositions)


export default positionRoute