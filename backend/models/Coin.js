import mongoose from 'mongoose';
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
        type: String || null,
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
        type: Object,
        required: true
    },
    exchanges: {
        type: Number,
        required: true
    },
    markets: {
        type: Number,
        required: true
    },
    pairs: {
        type: Number,
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
        type: Object,
        required: true
    }
});

// Create the coin model
const Coin = mongoose.model('Coin', coinSchema);

// Export the coin model
export default Coin;