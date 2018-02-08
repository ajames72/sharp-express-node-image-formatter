const express = require('express');
const FormatController = require('../controllers/formatController');
const router = express.Router();

router.post('/', FormatController.root);

module.exports = router;