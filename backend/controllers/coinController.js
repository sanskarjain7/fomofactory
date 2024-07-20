import Coin from '../models/Coin.js';
import axios from 'axios';
import dotenv from 'dotenv';
import { coinWatchURL, DEFAULT_CURRENCY } from '../config/index.js';
dotenv.config();

const COINWATCH_API_KEY = process.env.COINWATCH_API_KEY;


const createAxiosConfig = (coin) => ({
    method: 'post',
    maxBodyLength: Infinity,
    url: coinWatchURL,
    headers: {
        'content-type': 'application/json',
        'x-api-key': COINWATCH_API_KEY
    },
    data: JSON.stringify({
        currency: DEFAULT_CURRENCY,
        code: coin,
        meta: true
    })
});

const fetchPrice = async (coin) => {
    const config = createAxiosConfig(coin);
    try {
        const response = await axios(config);
        console.log('Data fetched successfully for', coin);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch data for ${coin}:`, error.message);
        return null;
    }
};

const getRecentEntriesForCoin = async (req, res) => {
    const { coinName } = req.body;
    try {
        const entries = await Coin.find({ name: coinName })
            .sort({ timeStamp: -1 })
            .limit(20);
        res.status(200).json(entries);
    } catch (error) {
        console.error('Error fetching recent entries for coin:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export {
    getRecentEntriesForCoin,
    fetchPrice
};