const productsModel = require("../models/product");

const addProduct = (req, res) => {
  const {
    title,
    description,
    imageUrl,
    price,
    category,
    manufacture,
    comments,
    rate,
  } = req.body;
  const newProduct = new productsModel({
    title,
    description,
    imageUrl,
    price,
    category,
    manufacture,
    comments,
    rate,
  });
  newProduct
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        product: result,
      });
    })
    .catch((err) => {
      err.errors.price.path == "price"
        ? res.status(500).json({
            success: false,
            cause: "CastError",
            message: "price type is not number",
          })
        : res.status(500).json({
            success: false,
            cause: "internal server error",
            message: err,
          });
    });
};

const deleteProductById = (req, res) => {
  const id = req.params.id;
  productsModel
    .findByIdAndRemove(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};
const updateProductById = (req, res) => {
  const id = req.params.id;
  const { title, description, imageUrl, price, category, manufacture } =
    req.body;
  productsModel
    .findByIdAndUpdate(id, {
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
      category: category,
      manufacture: manufacture,
    })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "product updated successfully",
      });
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};
const getProductsByCategory = async(req, res) => {
  const category = req.params;
  
  
  productsModel
    .find(category)
    .then((result) => {
      
     
      res.status(200).json(result);
    
    
    })
    .catch((err) => {
      res.json(err); 
    });
};

module.exports = {
  addProduct,
  deleteProductById,
  updateProductById,
  getProductsByCategory,
};
