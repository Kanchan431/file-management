const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

router.post('/', fileController.uploadFile, fileController.handleUpload);

router.get('/', fileController.listFiles);

router.delete('/:id', fileController.deleteFile);

module.exports = router;
