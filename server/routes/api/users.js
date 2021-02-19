const express = require("express");
const router = express.Router;
const users = require("./Users");

//rest api
//Get users
router.get("/api/users", (req, res) => {
  res.json(users);
});
//Get Single user
router.get("/api/users/:id", (req, res) => {
  const result = users.some((user) => user.id === parseFloat(req.params.id));
  if (result) {
    res.json(users.find((user) => user.id === parseFloat(req.params.id)));
  } else {
    res.status(400).json({ msg: `No id  of ${req.params.id} found` });
  }
});
