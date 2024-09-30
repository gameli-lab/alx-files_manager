const express = require('express');
const router = express.Router();
const AppController = require('../controllers/AppController');

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', AppController.postNew);
router.get('/connect', AppController.getConnect);
router.get('/disconnect', AppController.getDisconnect);
router.get('/users/me', AppController.getMe);
router.post('/files', FilesController.postUpload);
router.get('/files/:id', FilesController.getShow);
router.get('/files', FilesController.getIndex);
router.put('/files/:id/publish', FilesController.putPublish);
router.put('/files/:id/publish', FilesController.putUnpublish);
router.get('/files/:id/data', FilesController.getFile);


module.exports = router;