const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("inside the homepage!");
  res.send("Hii, myself nova!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
