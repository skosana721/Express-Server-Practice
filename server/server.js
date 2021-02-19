const express = require("express");
const app = express();
const path = require("path");
const users = require("./Users");
const logger = require("./middleware/logger");

//Init logger
app.use(logger);
//rest api
//Get users
app.get("/api/users", (req, res) => {
  res.json(users);
});
//Get Single user
app.get("/api/users/:id", (req, res) => {
  const result = users.some((user) => user.id === parseFloat(req.params.id));
  if (result) {
    res.json(users.find((user) => user.id === parseFloat(req.params.id)));
  } else {
    res.status(400).json({ msg: `No id  of ${req.params.id} found` });
  }
});

// setting static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
