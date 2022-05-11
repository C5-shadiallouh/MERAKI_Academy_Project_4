const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:"Users" , required:true},
    product:{type:mongoose.Schema.Types.ObjectId, ref:"Products" , required:true},
})
module.exports=mongoose.model("Cart",cartSchema)