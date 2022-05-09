import mongoose from "mongoose";
const rateSchema= new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:"Users"},
    rate:{type:Number}
})
module.exports=mongoose.model("Rate",rateSchema)