const mongoose = require("mongoose");
const commentsSchema= new mongoose.Schema({
    comment:{type:String},
    commenter:{type:mongoose.Schema.Types.ObjectId , ref:"Users"},
    date:{type:Date , required:true},
    rate:{type:Number}
})
module.exports=mongoose.model("Comments",commentsSchema)