const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/crudDemo");
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Connection Failed", err.message);
    process.exit(1);
  }
};

module.exports = ConnectDB;
