const express = require("express")
const userRouter =express.Router()
const {register,login}=require("../controllers/users")
const {addToCart,removeFromCart,getCart}=require("../controllers/cart")
const {authentication}=require("../middleware/authentication")
userRouter.post("/",register)
userRouter.post("/login",login)
userRouter.post("/:id/cart",authentication,addToCart)
userRouter.delete("/:id/cart",authentication,removeFromCart)
userRouter.get("/:id/cart",authentication,getCart)


module.exports= userRouter