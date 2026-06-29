require("dotenv").config();
const express = require("express");
const ConnectDB = require("./db");
const Student = require("./Models/student");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("inside the homepage!");
  res.send("Hii, myself nova,this is Crud Demo site");
});

const port = 3000;
//Connect DB first then start server
ConnectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
});

//create: post
app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//read all - GET /students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//read one - GET /student/:id
app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//update -PATCH /student/ :id
app.patch("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }, //return updated doc
    );
    if (!student) return res.status(404).json({ error: "student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//delete - delete /student/:id
app.delete("/student/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ error: "student not found" });
    res.json({ message: `${student.name} deleted successfully` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
