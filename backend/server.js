
import express from 'express';
import http from 'http';
// import coinRoutes from './routes/coinRoutes.js';
import db from './db.js';

import cors from 'cors';
import job from './cron/jobs.js';


job.start();

const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

// app.use('/api/coins', coinRoutes);

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
    db.connectToMongoDB().then(() =>
        console.log('Connected to MongoDB')
    ).catch((error) => {
        console.error('Error connecting to MongoDB', error);
    });
});

