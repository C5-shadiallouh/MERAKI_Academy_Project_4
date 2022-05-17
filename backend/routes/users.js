const express = require("express")
const userRouter =express.Router()
const {register,login}=require("../controllers/users")
const {addToCart,removeFromCart,getCart}=require("../controllers/cart")
const {authentication}=require("../middleware/authentication")
const {authorization}=require("../middleware/authorization")
userRouter.post("/",register)
userRouter.post("/login",login)
userRouter.post("/cart",authentication,addToCart)
userRouter.delete("/cart/:id",authentication,removeFromCart)
userRouter.get("/cart",authentication,getCart)


module.exports= userRouter