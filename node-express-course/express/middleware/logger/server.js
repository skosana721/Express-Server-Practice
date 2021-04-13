const express = require("express");
const app = express();

// middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const year = new Date().getFullYear();
  console.log(method, url, year);
  next();
};
app.get("/", logger, (req, res) => {
  res.send(`Home page`);
});
app.get("/about", logger, (req, res) => {
  res.send(`About page`);
});
app.listen(7000, () => console.log(`Server is running on port 7000`));
