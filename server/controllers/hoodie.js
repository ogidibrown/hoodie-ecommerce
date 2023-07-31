const Product = require('../models/hoodie');
const Cart = require('../models/cartModel')
const path = require('path')
exports.createProduct = async (req, res) => {
  const { productName, description, price, image } = req.body;
  const product = new Product({
    productName: productName,
    price: price,
    image: req.file.path,
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

exports.updateProduct = async (req,res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if(!product){
  res.status(404).json({
    message:'product does not exist'
  })
}
  //check user
};

exports.deleteProduct = async(req,res )=>{
  const  id =req.params.id
const product =await Product.findById(id)
if(!product){
  res.status(404).json({
    message:'product does not exist'
  })
}

//check user

await Product.findByIdAndDelete(id)
 
}

exports.CartModel= async()=>{
  
}