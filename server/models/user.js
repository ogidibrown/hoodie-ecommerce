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
    required: [true, "Email is required"],
    unique: true,
    match:[!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email), "invalid Email address"]
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});
userSchema.plugin(uniqueValidtor);

module.exports = mongoose.model('User', userSchema);
