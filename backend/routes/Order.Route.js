import express from 'express'
import { createOrder, getOrders } from '../controllers/Order.Controller.js';
import { protect } from '../middlware/protect.js';

const orderRoute = express.Router();

orderRoute.get('/get-orders', protect, getOrders);
orderRoute.post('/create-order', protect, createOrder);


export default orderRoute;