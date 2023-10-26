const express = require('express');
const router = express.Router();

const {
  createUser,
  getAllUsers,
  login,
} = require('../controllers/userController');
const {
  validateEmailPassLogin,
} = require('../middleware/validateEmailPassLogin');
const {
  validateEmailPassSignup,
} = require('../middleware/validateEmailPassSignup');

router.post('/signup', validateEmailPassSignup, createUser);

router.get('/:login', validateEmailPassLogin, login);

router.get('/getallusers', getAllUsers);

module.exports = router;
