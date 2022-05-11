const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register = (req, res) => {
  const { firstName, lastName, phone, city, password, email,isAdmin} = req.body;
  
  const newUser = new userModel({
    firstName,
    lastName,
    phone,
    city,
    password,
    email,
    isAdmin,
  });
  newUser
    .save()
    .then((result) => {
      console.log("result");

      res.status(201).json({
        success: true,
        message: "account created successfully",
        user: result,
      });
    })
    .catch((err) => {
      console.log(err.keyPattern.phone);
      err.code == 11000 && err.keyPattern.phone == 1
        ? res
            .status(409)
            .json("phone number is associated with an existing account")
        : err.code == 11000 && err.keyPattern.email == 1
        ? res.status(409).json("email is associated with an existing account")
        : res.json(err);
    });
};

const login = (req, res) => {
  
  const email = req.body.email;
  const phone = req.body.phone;
  console.log(phone);
  const password = req.body.password;
  // create function to choose email or phone
  const emailOrPhone = (email, phone) => {
    if (email != undefined) {
      return email.toLowerCase();
    }

    return phone;
  };
  const emailPhone = emailOrPhone(email, phone);
  userModel
    .findOne({ emailPhone })
    .then((result) => {
      if (result != null) {
        console.log(result.password);
        bcrypt.compare(password, result.password, (err, CompareResult) => {
          if (CompareResult == true) {
            const payload = {
              id: result._id,
              name:`${result.firstName}-${result.lastName}`
              
            };
            const options = {expiresIn:"30d"}
            const token = jwt.sign(payload, process.env.SECRET,options );
            res.status(200).json({
              success: true,
              message: `valid login credentials`,
              token: token
            });
          } else {
            res.status(403).json("wrong Password");
          }
        });
      }
      if (result == null) {
        res.json("phone number or email doesn't exist");
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

module.exports = { register, login };
