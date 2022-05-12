const express = require("express");
const {
  addProduct,
  deleteProductById,
  updateProductById,
  getProductsByCategory,
  getAllProducts,
} = require("../controllers/products");
const {authentication}=require("../middleware/authentication")
const {authorization}=require("../middleware/authorization")
const productsRouter = express.Router();

productsRouter.post("/addproduct",authentication,authorization("true"), addProduct);
productsRouter.delete("/delete/:id",authentication,authorization("true"), deleteProductById);
productsRouter.put("/update/:id",authentication,authorization("true"), updateProductById);
productsRouter.get("/:category",getProductsByCategory);
productsRouter.get("/",getAllProducts);
module.exports = productsRouter;
