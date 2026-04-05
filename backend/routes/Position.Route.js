import express from 'express'
import { getPositions } from '../controllers/Position.Controller.js';


const positionRoute = express.Router();

positionRoute.get('/get-positions', getPositions)


export default positionRoute;