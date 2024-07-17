import { connect } from 'mongoose';

const mongoUrl = 'mongodb+srv://f20190333:Pass123@cluster0.jrndwpy.mongodb.net/';
const dbName = 'fomofactory';
const collectionName = 'coindata';

let dbConnection;

async function connectToMongoDB() {
    if (!dbConnection) {
        dbConnection = await connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: dbName
        });
    }
    return dbConnection.connection.collection(collectionName);
}

export default { connectToMongoDB };