import mongoose from "mongoose";
const productsSchema= new mongoose.Schema({
    title:{type:String , required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String ,required:true},
    manufacture:{type:String ,required:true},
    comments:[{type:mongoose.Schema.Types.ObjectId ,ref:"Comments"}],
    rate:[{type:mongoose.Schema.Types.ObjectId , ref:"Rate"}]

})
module.exports("Products",productsSchema)