const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
//create order - /api/v1/order
exports.createOrder = async (req, res, next) => {
  const cartItems = req.body;

  // to get total amount in the cart
  const amount = Number(cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)).toFixed(2);
  const status = "Pending";

  const order = await orderModel.create({ cartItems, amount, status });

  // Updating product stock
cartItems.forEach(async (item)=> {
  const product = await productModel.findById(item.product._id)
  product.stock= product.stock-item.qty;
  await product.save();
  })

  res.json({
    success: true,
    order,
  });
};
