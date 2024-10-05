const express = require('express');
const bodyParser = require('body-parser');
const dbClient = require('../utils/db');
const sha1 = require('sha1');

const app = express();
app.use(bodyParser.json());

class UsersController {
    static async postNew(req, res) {
        const { email, password} = req.body;
        if(!email) {
            return res.status(400).json({error: 'Missing email'});
        }
        if(!password) {
            return res.status(400).json({error: 'Missing password'});
        }
        try {
            const db = dbClient.client.db();
            const ex_user = await db.collection('users').findOne({ email });
            if(ex_user) {
                return res.status(400).json({ error: 'Already exist' });
            }

            const hashedPassword = sha1(password);
            const result = await db.collection('users').insertOne({ email, password: hashedPassword});

            return res.status(201).json({ id: result.insertedId, email});
        } catch (error) {
            console.error(`Error creating new user: ${error}`);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = UsersController;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})