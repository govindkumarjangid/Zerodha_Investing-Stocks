import mongoose from "mongoose";

const potionsSchema = new mongoose.Schema({
    product: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    qty: { type: Number, required: true },
    avg: { type: Number, required: true },
    price: { type: Number, required: true },
    net: { type: String, required: true },
    day: { type: String, required: true },
    isLoss: { type: Boolean, default: false }
}, { timestamps: true });

const Position = new mongoose.model("Position", potionsSchema);

export default Position;