const express = require("express");
const {
  addProduct,
  deleteProductById,
  updateProductById,
  getProductsByCategory
} = require("../controllers/products");
const productsRouter = express.Router();

productsRouter.post("/addproduct", addProduct);
productsRouter.delete("/delete/:id", deleteProductById);
productsRouter.put("/update/:id", updateProductById);
productsRouter.get("/:category",getProductsByCategory);

module.exports = productsRouter;
