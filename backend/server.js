
import express from 'express';
import http from 'http';
import coinRoutes from './routes/coinRoutes.js';
import db from './db.js';
import { Server } from 'socket.io';
import cors from 'cors';
import job from './cron/jobs.js';


// job.start();

const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/', coinRoutes);

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:3000"]
    }
});

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.emit("hello", "world");
    // ...
});


httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
    db.connectToMongoDB().then(() =>
        console.log('Connected to MongoDB')
    ).catch((error) => {
        console.error('Error connecting to MongoDB', error);
    });
});

