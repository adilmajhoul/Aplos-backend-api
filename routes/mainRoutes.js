const express = require('express');
const router = express.Router;

const { validateEmailPass } = require('../middleware/validateEmailPass');
const { createUser } = require('../controllers/userController.js');

router.get('/signup', validateEmailPass, createUser);

module.exports = router;
