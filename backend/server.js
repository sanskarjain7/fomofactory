import express from 'express';
import http from 'http';
import coinRoutes from './routes/coinRoutes.js';
import db from './db.js';
import { Server } from 'socket.io';
import cors from 'cors';
import Coin from './models/Coin.js';
import job from './cron/jobs.js';

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;

app.use('/', coinRoutes);
job.start();

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:3000"]
    }
});


io.on("connection", (socket) => {
    console.log("a user connected");
    socket.emit("hello", "world");
});

io.on("disconnect", (socket) => {
    console.log("a user disconnected");
});


async function watchCoinChanges() {
    try {
        const changeStream = Coin.watch();
        changeStream.on('change', (next) => {
            io.emit('coinChange', next.fullDocument);
        });
    } catch (error) {
        console.error('Error setting up change stream:', error);
    }
}

watchCoinChanges()

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
    db.connectToMongoDB().then(() =>
        console.log('Connected to MongoDB')
    ).catch((error) => {
        console.error('Error connecting to MongoDB', error);
    });
});

