import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './configs/connectDb.js';
import Order from './models/Order.Schema.js';
dotenv.config();

// app
const app = express();


// middlewares
app.use(cors());

// connect database
connectDb();

// routes

app.get('/', (req, res) => {
    res.send("server is running");
})

app.get("/addorders", async (req, res) => {

    const tempOrders = [
        {
            name: "RELIANCE",
            qty: 10,
            price: 2500.50,
            mode: "BUY"
        },
        {
            name: "TCS",
            qty: 5,
            price: 3450.75,
            mode: "SELL"
        },
        {
            name: "HDFCBANK",
            qty: 15,
            price: 1520.10,
            mode: "BUY"
        }
    ];

    tempOrders.forEach((item) => {
        let newOrder = new Order({
            name: item.name,
            qty: item.qty,
            price: item.price,
            mode: item.mode
        });

        newOrder.save();

    })

    res.send("data inserted");

});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.......`);
})