const express = require('express');
const app = express();
const routes = require('./routes/index');
const dbClient = require('./utils.db');

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});