import { connect } from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const mongoUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || 'fomofactory';
const collectionName = process.env.COLLECTION_NAME || 'coins';

let dbConnection;

async function connectToMongoDB() {
    try {
        if (!dbConnection) {
            dbConnection = await connect(mongoUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                dbName: dbName
            });
            console.log('MongoDB connection established successfully');
        }
        return dbConnection.connection.collection(collectionName);
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        throw error;
    }
}

export default { connectToMongoDB };