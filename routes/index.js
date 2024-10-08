const express = require('express');
const router = express.Router();
const AppController = require('../controllers/AppController');
/*
const UsersController = require('../controllers/UsersController');
const FilesController = require('../controllers/FilesController');
*/

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
/*
router.post('/users', UsersController.postNew);
router.get('/connect', UsersController.getConnect);
router.get('/disconnect', UsersController.getDisconnect);
router.get('/users/me', UsersController.getMe);
router.post('/files', FilesController.postUpload);
router.get('/files/:id', FilesController.getShow);
router.get('/files', FilesController.getIndex);
router.put('/files/:id/publish', FilesController.putPublish);
router.put('/files/:id/publish', FilesController.putUnpublish);
router.get('/files/:id/data', FilesController.getFile);
*/

module.exports = router;