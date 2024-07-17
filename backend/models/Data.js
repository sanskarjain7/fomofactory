import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    symbol: String,
    price: Number,
    timestamp: { type: Date, default: Date.now },
});

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;
