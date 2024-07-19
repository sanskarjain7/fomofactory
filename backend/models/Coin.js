import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

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
        required: false
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
        required: false
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

const Coin = mongoose.model('Coin', coinSchema);

export default Coin;