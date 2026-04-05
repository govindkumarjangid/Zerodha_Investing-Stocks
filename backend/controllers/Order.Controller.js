import Order from '../models/Order.Schema.js';

export const getOrders = async (req, res) => {
    try {

        const orders = await Order.find({});

        if (!orders)
            return res.status(401).json({ message: "No orders found" });


        return res.status(200).send({ orders });


    } catch (error) {
        console.log("Internel server error", error);
        return res.status(500).json({ message: "Internal server error" });

    }
}