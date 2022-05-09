import mongoose from "mongoose";
import bcrypt from "bcrypt";
const registerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  city: { type: String },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: {type: mongoose.Schema.Types.ObjectId ,ref:"Roles"},
});
userSchema.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, process.env.SALT);
});
module.exports = mongoose.model("Register",userSchema)