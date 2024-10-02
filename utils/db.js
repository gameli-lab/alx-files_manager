const { MongoClient } = require('mongodb');

class DBClient {
    constructor() {
        const host = process.env.DB_HOST || 'localhost';
        const port = process.env.DB_PORT || 27017;
        const database = process.env.DB_DATABASE || 'files_manager';

        this.uri = `mongodb://${host}:${port}/${database}`;
        this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true});

        this.connected = false;
        this.client.connect()
        .then(() => {
            console.log('Connected to MongoDB');
            this.connected = true;
        })
        .catch(err => {
            console.error('Mongo connection failed', err);
        });
    }

    isAlive() {
        return this.connected;
    }

    async nbUsers() {
        if(!this.isAlive()) {
            throw new Error('Client is not connected');
        }
        const db = this.client.db();
        const n_users = await db.collection('users').countDocuments();
        return n_users;
    }

    async nbFiles() {
        if(!this.isAlive()) {
            throw new Error('Client is not connected');
        }
        const db = this.client.db();
        const n_files = await db.collection('files').countDocuments();
        return n_files;
    }
}

const dbClient = new DBClient();
module.exports = dbClient;