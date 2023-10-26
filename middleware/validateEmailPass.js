exports.validateEmailPass = async (req, res, next) => {
  try {
    let { name, email, password } = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();

    if (!(name || email || password)) {
      throw error('fill all fields');
    } else if (!/^[a-zA-Z ]*$/.test(name)) {
      throw error('invalid name entered');
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      throw error('invalid email entered');
    } else if (password.length < 7) {
      throw error('password too short enter 6 character or more');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }

  next();
};
