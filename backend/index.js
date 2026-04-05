import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './configs/connectDb.js';
import holdingRoute from './routes/Holding.Route.js';
import orderRoute from './routes/Order.Route.js';
import positionRoute from './routes/Position.Route.js';

dotenv.config();

// app
const app = express();

// connect database
connectDb();


// middlewares
app.use(cors());


// routes
app.get('/', (req, res) => {
    res.send("Zerodha Clone Server APIs")
})

app.use('/api/holding', holdingRoute);
app.use('/api/order', orderRoute);
app.use('/api/position', positionRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.......`);
})