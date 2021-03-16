const express = require("express");
const app = express();
const PORT = 3000;
//Middleware is any function that has access to req, res, next object
// Middleware is like a middleman between the req and res

const userOnline = (req, res, next) => {
  res.locals.status = true;
  console.log("User is Online");
  next();
};

// This will run on all method

app.use(userOnline);

// This will run on the get method with the path of /info

app.get("/Info", userOnline, (req, res) => {
  res.send(`<h2>Info page</h2>`);
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
app.get("/", (req, res, next) => {
  console.log(res.locals);
  res.send(`<h1>Home page</h1>`);
});
