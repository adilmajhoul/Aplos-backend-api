const bcrypt = require('bcrypt');

exports.hashPassword = async (password, saltRounds = 10) => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    throw error;
  }
};
