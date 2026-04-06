import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDb from './configs/connectDb.js';
import holdingRoute from './routes/Holding.Route.js';
import orderRoute from './routes/Order.Route.js';
import positionRoute from './routes/Position.Route.js';
import userRoute from './routes/User.Route.js';

dotenv.config();

// app
const app = express();

// connect database
connectDb();


// middlewares
app.use(cors({
    origin: [
        "http://localhost:5173",
        'http://localhost:5174',
        'https://zerodha-investing-stocks.vercel.app',
        'https://zerodha-investing-stocks-5gdp.vercel.app'
    ], credentials: true
}));
app.use(express.json());
app.use(cookieParser());


// routes
app.get('/', (req, res) => {
    res.send("Zerodha Clone Server APIs")
})
app.use('/api/auth', userRoute);
app.use('/api/holding', holdingRoute);
app.use('/api/order', orderRoute);
app.use('/api/position', positionRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.......`);
})