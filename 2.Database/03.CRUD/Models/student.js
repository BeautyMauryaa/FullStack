const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  //   name: String,
  //   age: Number,
  //   course: String,
  //   email: String,
  //   isPassed: Boolean,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    enum: ["A", "B", "C", "D", "F"],
    default: "B",
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
