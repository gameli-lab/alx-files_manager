const express = require('express');
const router = express.Router();
const AppController = require('../controllers/AppController');

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', AppController.postNew);
router.get('/connect', AppController.getConnect);
router.get('/disconnect', AppController.getDisconnect);
router.get('/users/me', AppController.getMe);

module.exports = router;