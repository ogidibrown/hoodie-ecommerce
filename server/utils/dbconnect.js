const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}E@cluster0.clzd9x4.mongodb.net/`
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = dbConnect;
