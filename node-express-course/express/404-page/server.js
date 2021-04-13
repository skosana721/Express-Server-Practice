const express = require("express");
const app = express();
const user = require("../JSON-Basics/data");

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Home Page</h1>
    <a href="/api/user">User</a>`);
});
app.get("/api/user", (req, res) => {
  res.status(200).json(user);
});
app.get("*", (req, res) => {
  res.status(404).send(`<h1>Resource not found</h1>
  <a href="/">return home</a>`);
});
app.listen(3500, () => console.log(`Server is running on port 3500`));
