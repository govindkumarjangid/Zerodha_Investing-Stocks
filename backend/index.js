import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './configs/connectDb.js';
dotenv.config();

// app
const app = express();


// middlewares
app.use(cors());

// connect database
connectDb();


// server
const PORT = process.env.PORT || 3000;

app.listen(() => {
    console.log(`Server is running on ${PORT}.......`);
})