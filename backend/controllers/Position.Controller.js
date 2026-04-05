import Position from '../models/Position.Schema.js'

export const getPositions = async (req, res) => {
    try {

        const positions = await Position.find({});

        if (!positions)
            return res.status(401).json({ message: "No orders found" });


        return res.status(200).send({ positions });


    } catch (error) {
        console.log("Internel server error", error);
        return res.status(500).json({ message: "Internal server error" });

    }
}