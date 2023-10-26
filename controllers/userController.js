const User = require('../models/userModel');

const { hashPassword } = require('../utils/hashPassword');

exports.createUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    const isUserExists = User.findOne({ email: email });
    if (isUserExists) {
      throw error('this email already exists');
    }

    const hashedPassword = await hashPassword(password);

    const data = {
      name: name.trim(),
      email: email.trim(),
      password: hashedPassword,
    };
    const user = User.create(data);

    if (user) {
      res.status(204).send(user);
    } else {
      res.status(500).send('failed to create user try again please');
    }
  } catch (error) {
    throw error(error.message);
  }
};
