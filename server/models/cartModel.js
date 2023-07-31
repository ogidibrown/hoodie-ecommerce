const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartModel = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Cart', cartModel);
