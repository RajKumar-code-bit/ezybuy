const { default: mongoose } = require("mongoose");
const productModel = require("../models/productModel");

//Get Products API - /api/v1/products
exports.getProducts = async (req, res, next) => {

  //search functionality 
  const query = req.query.keyword? {name :{
    $regex : req.query.keyword,
    $options : 'i'
  }} : {}


  //its behaves asynchronously
  const products = await productModel.find(query);

  res.json({
    success: true,
    products,
  });
};

//Get single Product API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    const id = req.params.id;
  try {
    
    console.log(id);
    const product = await productModel.findById(id);

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
        success: false,
        message: `unable to get ths product with this ID ${id}`
      });
  }
};
