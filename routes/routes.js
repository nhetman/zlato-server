const express = require('express');

const controller = require('../controllers/mics.js');

const router = express.Router();

router.get('/hello', controller.hello);
router.post('/hello', controller.helloPost);

module.exports = router
