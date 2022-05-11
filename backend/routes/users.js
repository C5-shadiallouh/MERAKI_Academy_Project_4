const express = require("express")
const userRouter =express.Router()
const {register,login}=require("../controllers/users")
const {addToCart}=require("../controllers/cart")
const {authentication}=require("../middleware/authentication")
userRouter.post("/",register)
userRouter.post("/login",login)
userRouter.post("/:id/cart",authentication,addToCart)

module.exports= userRouter