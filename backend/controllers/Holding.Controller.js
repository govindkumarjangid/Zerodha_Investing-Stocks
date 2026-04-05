import Holding from '../models/Holding.Schema.js';


export const getHoldings = async (req, res) => {
    try {

        const holdings = await Holding.find({});

        if (!holdings)
            return res.status(401).json({ message: "No holdings found" });


        return res.status(200).send({ holdings });


    } catch (error) {
        console.log("Internel server error", error);
        return res.status(500).json({ message: "Internal server error" });

    }
}