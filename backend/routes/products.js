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

productsRouter.post("/addproduct",authentication,authorization(false), addProduct);
productsRouter.delete("/delete/:id",authentication,authorization(false), deleteProductById);
productsRouter.put("/update/:id",authentication,authorization(false), updateProductById);
productsRouter.get("/:category",getProductsByCategory);
productsRouter.get("/",getAllProducts);
module.exports = productsRouter;
