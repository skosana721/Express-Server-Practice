const express = require("express");
const router = express.Router();
const users = require("../../Users");
const uuid = require("uuid");
const { request } = require("express");

//Get Request

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

// Post request
router.post("/api/users", (req, res) => {
  const NewUser = {
    id: uuid.v4(),
    name: req.body.name,
    location: req.body.location,
  };
  if (!NewUser.name || !NewUser.location) {
    return res.status(400).json({ msg: "Please enter name and location" });
  }
  users.push(NewUser);
  res.json(users);
});

// PUt Request

router.put("/api/users/:id", (req, res) => {
  const found = users.some((user) => user.id === parseFloat(req.params.id));
  if (found) {
    const updateUser = req.body;
    users.forEach((user) => {
      if (user.id === parseFloat(req.params.id)) {
        user.name = updateUser.name ? updateUser.name : user.name;
        user.location = updateUser.location
          ? updateUser.location
          : user.location;
        res.json({ msg: "User updated", user });
      } else {
        res.status(400).json({ msg: "Please enter name and location" });
      }
    });
  }
});

//Creat User
module.exports = router;
