//when an user creates a new account(sigh up)
// user -> fill form -> send data -> backend validation -> database storage -> account created



//user schema and model design: 
//schema: how data be structured and will be stored in mongodb
// user schema: it is all about what information do i need about user.
// basic information:
// name,email,pass,phone number, role, profile picture, created at

const mongoose = require("mongoose");

const userschema = new mongoose.schema(
  {
    name: {
      type: String,
      required: true,
      trim: true //remove extra space 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    phone: {
      type: Number,
      required: true,
      max: 10
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["user", "admin"], //enums means only allowed value
      required: true
    },
    avatar: {
      type: String,
      default: " "
    },
  },
  { timestamps: true }, //mongo db automatically creates createdAt and updateAt 
);

module.exports=mongoose.model("user",schema)

//folder struct:
// project/
// │
// ├── models/
// │   └── user.model.js
// │
// ├── controllers/
// ├── routes/
// ├── middleware/
// └── server.js



//improvement : always try to create model file like this; user.model.js student.model.js



//registration system flow: 
//recieve data -> validate fields -> check name and email -> validate pass -> hashed pass -> save user -> server response
