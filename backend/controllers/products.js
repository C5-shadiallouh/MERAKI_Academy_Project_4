const productsModel = require("../models/product");
const commentsModel = require("../models/comments")
const addProduct = (req, res) => {
  const {
    title,
    description,
    imageUrl,
    price,
    category,
    subcategory,
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
    subcategory,
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
      console.log(err.errors);
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
const getProductsByCategory = async (req, res) => {
  const category = req.params;
  const page = req.query.p
  const productPerPage= 9
  if (page != undefined)
  {productsModel
    .find(category)
    .skip(page*productPerPage)
    .limit(productPerPage)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.json(err);
    });}
    else{
      productsModel
    .find(category)
    .then((result) => {
        
        
      res.status(200).json(result)
    })
    .catch((err) => res.json(err));
    }
};
const getProductsBySubCategory = async (req, res) => {
  const subcategory = req.params;
  const category = req.params;

  const page = req.query.p
  const productPerPage= 9
  if (page != undefined)
  {productsModel
    .find(subcategory)
    .skip(page*productPerPage)
    .limit(productPerPage)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.json(err);
    });}
    else{
      productsModel
    .find(subcategory)
    .then((result) => {
        
        
      res.status(200).json(result)
    })
    .catch((err) => res.json(err));
    }
};
const getAllProducts = (req, res) => {
  const page = req.query.p
  const productPerPage= 9
  if (page != undefined)
  {productsModel
    .find({})
    .skip(page*productPerPage)
    .limit(productPerPage)
    .then((result) => {
        
        
      res.status(200).json(result)
    })
    .catch((err) => res.json(err));}
    else{
      productsModel
    .find({})
    .then((result) => {
        
        
      res.status(200).json(result)
    })
    .catch((err) => res.json(err));
    }
};
const getProductsByDate = (req, res) => {
  let date1 = new Date()
  let date2= new Date()
  let date3 = date2.setDate(date2.getDate() -7);
  
  productsModel
.find({created:{$gte:date2}})
    
    .sort('-created')
    .then((result) => {
        console.log(result.length);
        
      res.status(200).json(result)
    })
    .catch((err) => res.json(err));
};
const getProductsById = (req,res)=>{
  const id=req.params.id
  productsModel.findById(id).populate({
    path : 'comments',
    populate : {
      path : 'commenter'
    }
  }).then((result)=>{
    res.status(200).json(result)
  }).catch((err)=>{
    res.status(404).json(err)
  })
}
const createComments = (req, res) => {
  const idNum = req.params.id;
  const commenter = req.token.id

  const { comment } = req.body;
  const newComment = new commentsModel({
    comment,
    commenter,
  });
  newComment.save().then((commentResult) => {
    productsModel
      .findOne({ _id: idNum })
      .then((found) => {
        found.comments.push(commentResult);
        update = found.comments;
        productsModel
          .updateOne({ _id: idNum }, { comments: update })
          .then((result) => {
            res.status(201).json({
              success: true,
              message: "The new comment added",
              comment: commentResult,
            });
          });
      })

      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Server Error",
          err: err.message,
        });
      });
    
  });
};
module.exports = {
  addProduct,
  deleteProductById,
  updateProductById,
  getProductsByCategory,
  getAllProducts,
  getProductsByDate,
  getProductsBySubCategory,
  getProductsById,
  createComments
};
