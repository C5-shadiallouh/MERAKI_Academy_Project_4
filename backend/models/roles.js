import mongoose from "mongoose";
const rolesSchema = new mongoose.Schema({
    role:{type:String , required:true},
    permissions:{type:Array , required:true},
})
module.exports=mongoose.model("Roles",rolesSchema)