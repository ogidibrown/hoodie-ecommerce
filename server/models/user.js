const mongoose = require('mongoose');
const uniqueValidtor = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});
userSchema.plugin(uniqueValidtor);

module.exports = mongoose.model('User', userSchema);
