import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    model: { type: String, required: true },

}, { timestamps: true });

const Order = new mongoose.model("Order", orderSchema);

export default Order;