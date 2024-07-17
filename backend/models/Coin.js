import { Schema, model } from 'mongoose';

// Define the coin schema
const coinSchema = new Schema({
    timeStamp: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    images: {
        png32: {
            type: String,
            required: true
        },
        png64: {
            type: String,
            required: true
        },
        webp32: {
            type: String,
            required: true
        },
        webp64: {
            type: String,
            required: true
        }
    },
    exchanges: {
        type: Array,
        required: true
    },
    markets: {
        type: Array,
        required: true
    },
    pairs: {
        type: Array,
        required: true
    },
    categories: {
        type: Array,
        required: true
    },
    allTimeHighUSD: {
        type: Number,
        required: true
    },
    circulatingSupply: {
        type: Number,
        required: true
    },
    totalSupply: {
        type: Number,
        required: true
    },
    maxSupply: {
        type: Number,
        required: true
    },
    links: {
        type: Object,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    },
    cap: {
        type: Number,
        required: true
    },
    liquidity: {
        type: Number,
        required: true
    },
    delta: {
        type: Number,
        required: true
    }
});

// Create the coin model
const Coin = model('Coin', coinSchema);

// Export the coin model
export default Coin;