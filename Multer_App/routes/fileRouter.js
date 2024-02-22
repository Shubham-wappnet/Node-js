const express = require('express');
const router = express.Router();
const { uploadFile } = require('../controllers/fileController.js');

router.post('/upload', uploadFile);

module.exports = router;
