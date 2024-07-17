import express from 'express';
import { MongoClient } from 'mongodb';
import { fetchPrice } from './controllers/fetchPrice.js';
import cors from 'cors';
// import coin from './constants.js';
import { CronJob } from 'cron';

import { Server } from 'socket.io';
import http from 'http';

const app = express();
app.use(cors());
const port = 4000;
const mongoUrl = 'mongodb+srv://f20190333:Pass123@cluster0.jrndwpy.mongodb.net/';
const dbName = 'fomofactory';
const collectionName = 'coindata';

let dbClient;
async function connectToMongoDB() {
    if (!dbClient) {
        dbClient = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        await dbClient.connect();
    }
    return dbClient.db(dbName).collection(collectionName);
}

async function insertCryptoData(jsonResponse) {
    // Extracting relevant data from the jsonResponse
    const document = {
        timeStamp: new Date(),
        name: jsonResponse["name"],
        symbol: jsonResponse["symbol"],
        rank: jsonResponse["rank"],
        age: jsonResponse["age"],
        color: jsonResponse["color"],
        images: {
            png32: jsonResponse["png32"],
            png64: jsonResponse["png64"],
            webp32: jsonResponse["webp32"],
            webp64: jsonResponse["webp64"],
        },
        exchanges: jsonResponse["exchanges"],
        markets: jsonResponse["markets"],
        pairs: jsonResponse["pairs"],
        categories: jsonResponse["categories"],
        allTimeHighUSD: jsonResponse["allTimeHighUSD"],
        circulatingSupply: jsonResponse["circulatingSupply"],
        totalSupply: jsonResponse["totalSupply"],
        maxSupply: jsonResponse["maxSupply"],
        links: jsonResponse["links"],
        rate: jsonResponse["rate"],
        volume: jsonResponse["volume"],
        cap: jsonResponse["cap"],
        liquidity: jsonResponse["liquidity"],
        delta: jsonResponse["delta"]
    };

    // Inserting the document into the MongoDB collection
    const collection = await connectToMongoDB();
    await collection.insertOne(document);
    console.log('Data inserted successfully');
}
let coin = ["BTC", "ETH", "BNB", "SOL", "XRP"]
async function getData() {
    try {
        for (let i = 0; i < coin.length; i++) {
            const data = await fetchPrice(coin[i]);
            await insertCryptoData(data);
        }
    } catch (error) {
        console.log('Error:', error);
    }
}

new CronJob('*/25 * * * * *', getData, null, true, 'America/Los_Angeles');

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


const httpServer = http.createServer(app);
const io = new Server(httpServer);
const subscriptions = {}; // Object to track subscriptions

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('subscribeToCoin', async (coinName) => {
        console.log('subscribeToCoin:', coinName);
        if (!subscriptions[coinName]) {
            subscriptions[coinName] = [];
        }
        subscriptions[coinName].push(socket.id);

        // Send the 20 most recent entries immediately upon subscription
        const recentEntries = await getRecentEntriesForCoin(coinName);
        socket.emit('coinData', recentEntries);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        // Remove the socket from all subscriptions
        for (const coinName in subscriptions) {
            subscriptions[coinName] = subscriptions[coinName].filter(id => id !== socket.id);
        }
    });
});

async function watchCollection() {
    const collection = await connectToMongoDB();
    const changeStream = collection.watch();

    changeStream.on('change', async (change) => {
        console.log(change);
        const coinName = change.fullDocument.coinName; // Assuming change document includes coinName
        if (subscriptions[coinName] && subscriptions[coinName].length > 0) {
            const recentEntries = await getRecentEntriesForCoin(coinName);
            console.log('recentEntries:', recentEntries);
            subscriptions[coinName].forEach(socketId => {
                io.to(socketId).emit('coinData', recentEntries);
            });
        }
    });
}

async function getRecentEntriesForCoin(coinName) {
    const collection = await connectToMongoDB();
    return collection.find({ coinName }).sort({ _id: -1 }).limit(20).toArray();
}

watchCollection().catch(console.error);

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
});