const { MongoClient } = require('mongodb');

class DBClient {
    constructor() {
        const host = process.env.DB_HOST || 'localhost';
        const port = process.env.DB_PORT || 27017;
        const database = process.env.DB_DATABASE || 'files_manager';

        this.uri = `mongodb://${host}:${port}/${database}`;
        this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true});
        this.client.connect()
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.error('Mongo connection failed', err);
        });
    }

    isAlive() {
        return this.client.isConnected();
    }

    async nbUsers() {
        const db = this.client.db();
        const n_users = await db.collection('users').countDocuments();
        return n_users;
    }

    async nbFiles() {
        const db = this.client.db();
        const n_files = await db.collection('files').countDocuments();
        return n_files;
    }
}

const dbClient = new DBClient();
module.exports = dbClient;