const User = require('../models/userModel');

const { hashPassword } = require('../utils/hashPassword');

exports.createUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();

    const user = User.findOne({ email: email });
    if (user) {
      throw error('this email already exists');
    }

    cosnt hashedPassword = await hashPassword(password)
  } catch (error) {
    throw error(error.message);
  }

  next();
};
