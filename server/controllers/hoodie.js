const Product = require('../models/hoodie');

exports.createProduct = async (req, res) => {
  const { productName, description, price, image } = req.body;
  const product = new Product({
    productName: productName,
    price: price,
    image: image,
    description: description,
  });
  const createdProduct = await product.save();
  res.status(200).json({
    product: createdProduct,
  });
};
exports.getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json({
    products: product,
  });
};
exports.getSingleProduct = async (req, res) => {
  const id = req.params.id;

  const product = await Product.findById(id);
  if (!product) {
    res.satus(404).json({
      message: 'product not found',
    });
  }
  res.status(200).json({
    message: product,
  });
};

exports.updateProduct = async () => {
  const id = req.params.id;
  const product = await Product.findById(id);
  //check user
};
