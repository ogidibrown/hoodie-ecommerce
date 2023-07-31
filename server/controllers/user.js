const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 
exports.createUser = async (req, res) => {
  const { password, email, userName } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({
    email: email,
    password: hashedPassword,
    userName: userName,
  });
  const emailExist = await User.findOne({ email: email });
  if (emailExist) {
    return res.status(402).json({
      message: 'Email Already exist!!',
    });
  }

  const createdUser = await user.save();
  const token = jwt.sign(
    {
      id: createdUser.id,
      email: createdUser.email,
    },
     `${process.env.JWT_SECRET_TOKEN}`
  );
  res.status(200).json({
    message: createdUser,
    token: token,
  });
};

exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({ email: email });
  if (!checkUser) {
    return res.status(404).json({
      message: 'Email not Found',
    });
  }
  const checkPassword = await bcrypt.compare(password, checkUser.password);

  if (!checkPassword) {
    return res.status(403).json({ message: 'Invalid Password' });
  }
  const token = jwt.sign(
    {
      id: checkUser.id,
      email: checkUser.email,
    },
    `${process.env.JWT_SECRET_TOKEN}`
  );
  res.status(200).json({
    id: checkUser.id,
    email: checkUser.email,
    token: token,
  });
};
