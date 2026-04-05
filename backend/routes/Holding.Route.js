import express from 'express'
import { getHoldings } from '../controllers/Holding.Controller.js';


const holdingRoute = express.Router();


holdingRoute.get('/get-holdings', getHoldings);


export default holdingRoute;