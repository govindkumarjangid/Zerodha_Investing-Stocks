import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDb = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Database Connected Successfully");
        })
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log("Error : ", error);
        process.exit();
    }
}

export default connectDb;
