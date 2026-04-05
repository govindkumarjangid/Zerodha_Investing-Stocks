import express from 'express'
import { getHoldings } from '../controllers/Holding.Controller.js';
import { protect } from '../middlware/protect.js';


const holdingRoute = express.Router();


holdingRoute.get('/get-holdings', protect, getHoldings);


export default holdingRoute;