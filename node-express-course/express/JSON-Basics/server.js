const express = require("express");
const app = express();
const user = require("./data");

app.get("/user", (req, res) => {
  res.json(user);
});
app.listen(4000, console.log(`Server is running on port 4000`));
