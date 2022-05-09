import mongoose, { SchemaType } from "mongoose";
const commentsSchema= new mongoose.Schema({
    comment:{type:String},
    commenter:{type:mongoose.Schema.Types.ObjectId , ref:"Register"}
})
module.exports("Comments",commentsSchema)