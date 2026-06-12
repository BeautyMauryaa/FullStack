Day 2 covers:
Part 1 — async/await basics

What async does to a function
What await actually does
How it replaces .then() and .catch()

Part 2 — error handling patterns

try/catch inside async functions
What happens if you don't have try/catch
Throwing custom errors
Returning proper error responses with status codes


Practice in 02-async-await/index.js:
jsconst express = require("express");
const app = express();
app.use(express.json());

// Part 1 — basic async/await
const getProducts = async () => {
  return [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
  ];
};

// Part 2 — with error handling
const getUserById = async (id) => {
  if (!id) throw new Error("ID is required");
  return { id, name: "Nova" };
};

// working route
app.get("/products", async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// error route — no id passed
app.get("/user", async (req, res) => {
  try {
    const user = await getUserById(null); // intentionally passing null
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("running"));

Break it intentionally:

Remove try/catch — what does the server do when error is thrown?
Remove async keyword — does await still work?
Change res.status(400) to res.status(500) — understand the difference


Write in notes.md:

What is the difference between 400 and 500 status code?
What happens if async throws and there's no try/catch?
Why is error handling not optional?