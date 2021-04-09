const express = require("express");
const app = express();

// http request verbs

app.get("/", (req, res) => {
  res.status(200).send("Home page ");
});
app.get("/contact", (req, res) => {
  res.status(200).send(`<h2>Contact page</h2>`);
});
app.get("*", (req, res) => {
  res.status(404).send(`<h1>Page not found</h1>`);
});
app.listen(8000, () => console.log(`Server is running on port 8000`));
