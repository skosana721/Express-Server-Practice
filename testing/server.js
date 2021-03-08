const express = require("express");
const app = express();
const path = require("path");
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
// Middleware function
app.use(express.static(path.join(__dirname, "public")));
const greetUser = (req, res, next) => {
  req.user = true;
  if (!req.user) {
    res.send(`<h2>Your are not welcomed here</h2>`);
  } else {
    next();
  }
};
app.use(greetUser);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home", { userStatus: false });
});

app.post("/result", (req, res) => {
  if (req.body.name !== "") {
    res.send(
      `<h2>Thank you for following instructions ${req.body.name.toUpperCase()}</h2>`
    );
  } else {
    res.send(`<h3>I am disappointed in you</h3>`);
  }
});
app.listen(PORT, () => console.log(`Server running on ${PORT}...`));
