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


export const createOrder = async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;

        const newOrder = await Order({
            name,
            qty,
            price,
            mode
        })

        newOrder.save();

        return res.status(200).json({ message: "Order create successfull" });


    } catch (error) {
        console.log("Internel server error", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}