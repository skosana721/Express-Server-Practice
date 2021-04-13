const express = require("express");
const app = express();
const users = require("../JSON-Basics/data");

app.get("/api/user/:id", (req, res) => {
  const singleUser = users.find(
    (user) => user.id === parseFloat(req.params.id)
  );
  if (singleUser) {
    res.status(200).json(singleUser);
  } else {
    res.status(404).send(`Can not find user with id  ${req.params.id}`);
  }
});

app.listen(6000, () => console.log(`Server is running on port 6000`));
