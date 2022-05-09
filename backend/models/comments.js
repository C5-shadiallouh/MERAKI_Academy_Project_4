import mongoose, { SchemaType } from "mongoose";
const commentsSchema= new mongoose.Schema({
    comment:{type:String},
    commenter:{type:mongoose.Schema.Types.ObjectId , ref:"Users"}
})
module.exports=mongoose.model("Comments",commentsSchema)