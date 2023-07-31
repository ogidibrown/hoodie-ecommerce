const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    mongoose.connect(
      'mongodb+srv://tomisinoyediran:h2J7Ep3dGG8DG7fE@cluster0.clzd9x4.mongodb.net/'
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = dbConnect;
