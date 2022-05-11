const express = require("express")
const userRouter =express.Router()
const {register,login}=require("../controllers/users")
const {addToCart}=require("../controllers/cart")

userRouter.post("/",register)
userRouter.post("/login",login)
userRouter.post("/:id/cart")

module.exports= userRouter