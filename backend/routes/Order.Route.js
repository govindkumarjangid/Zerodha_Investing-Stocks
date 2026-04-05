import express from 'express'
import { getOrders } from '../controllers/Order.Controller.js';

const orderRoute = express.Router();

orderRoute.get('/get-orders', getOrders);


export default orderRoute;