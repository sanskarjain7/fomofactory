import Coin from '../models/Coin.js';
import axios from 'axios';
// Import models


const fetchPrice = async (coin) => {
    let data = JSON.stringify({
        "currency": "USD",
        "code": coin,
        "meta": true
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.livecoinwatch.com/coins/single',
        headers: {
            'content-type': 'application/json',
            'x-api-key': 'f9780a3e-9bce-40aa-a742-291bca4a2247'
        },
        data: data
    };
    try {
        const response = await axios(config);
        console.log('data fetched successfully for', coin);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};



// Async function to get recent entries for a coin
const getRecentEntriesForCoin = async (req, res) => {
    try {
        // Your business logic here
        // Example: Fetch recent entries for a coin from the database

        // Example response
        const coinId = req.params.coinId;
        const entries = await find({ coinId }).sort({ createdAt: -1 }).limit(10);

        res.status(200).json(entries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Export functions
export {
    getRecentEntriesForCoin,
    fetchPrice
};