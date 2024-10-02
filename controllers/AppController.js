const dbClient = require('../utils/db');
const redisclient = require('../utils/redis');

class AppController {
    static async getStatus(req, res) {
        const dbAlive = dbClient.isAlive();
        const redisAlive = redisclient.isAlive();

        res.status(200).json({
                redis: redisAlive,
                db: dbAlive
        });
    }
    
    static async getStats(req, res) {
        try {
            const n_users = await dbClient.nbUsers();
            const n_files = await dbClient.nbFiles();

            res.status(200).json({
                users: n_users,
                files: n_files
            });
        } catch (error) {
            console.error(`Error fetching stats: ${error}`);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

module.exports = AppController;