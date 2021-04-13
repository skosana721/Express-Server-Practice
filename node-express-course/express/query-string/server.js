const express = require("express");
const app = express();
const user = require("../JSON-Basics/data");
// home page
app.get("/", (req, res) => {
  res.status(200).send(`<h1>Home Page</h1>
    <a href="/api/user">User</a>`);
});

// get all the users
app.get("/api/user", (req, res) => {
  res.status(200).json(user);
});
// get a single user based on id
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
app.get("/api/v2/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedUsers = [...user];
  if (search) {
    sortedUsers = sortedUsers.filter((user) => user.name.includes(search));
  }
  if (limit) {
    sortedUsers = sortedUsers.slice(0, Number(limit));
  }
  if (sortedUsers.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedUsers);
});
app.listen(4000, () => console.log(`Server is running on port 4000`));
