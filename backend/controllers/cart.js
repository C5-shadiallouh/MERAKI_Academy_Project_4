const userModel = require("../models/users");
const cartModel = require("../models/cart");

const addToCart = (req, res) => {
  const userId = req.token.id;
  const product = req.body.product;
  const addItemToCart = new cartModel({
    user: req.token.id,
    product,
  });
  addItemToCart.save().then((result) => {
    console.log(req.token);
    userModel
      .updateOne({ _id: userId }, { $push: { cart: result._id } })
      .then(res.json(result));
  });
};
const removeFromCart = (req, res) => {
  const userId = req.token.id;
  const cartId = req.body.cartId;

  userModel
    .updateOne({ _id: userId }, { $pull: { cart: cartId } })
    .then((result) => res.json(result));
};
const getCart = (req, res) => {
  const userId = req.token.id;
  userModel
    .findById(userId)
    .populate({ path: "cart", populate: { path: "product" } })
    .then((result) => {
      res.status(200).json(result);
    });
};

module.exports = { addToCart, removeFromCart, getCart };
