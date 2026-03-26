const express = require("express");
const app = express();

app.use(express.json());

let items = [];

// CREATE
app.post("/items", (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).json(item);
});

// READ
app.get("/items", (req, res) => {
  res.json(items);
});

// UPDATE
app.put("/items/:index", (req, res) => {
  items[req.params.index] = req.body;
  res.json(items[req.params.index]);
});

// DELETE
app.delete("/items/:index", (req, res) => {
  items.splice(req.params.index, 1);
  res.sendStatus(204);
});

module.exports = app; // 