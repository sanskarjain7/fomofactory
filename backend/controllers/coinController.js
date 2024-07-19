import Coin from '../models/Coin.js';
import axios from 'axios';

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

const getRecentEntriesForCoin = async (req, res) => {
    try {
        const coinName = req.body.coinName;
        let entries = await Coin.find({ name: coinName })
            .sort({ timeStamp: -1 })
            .limit(20);
        res.status(200).json(entries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export {
    getRecentEntriesForCoin,
    fetchPrice
};