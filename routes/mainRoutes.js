const express = require('express');
const router = express.Router;

const { validateEmailPass } = require('../middleware/validateEmailPass');
const { createUser } = require('../controllers/userController.js');

router.post('/signup', validateEmailPass, createUser);

module.exports = router;
