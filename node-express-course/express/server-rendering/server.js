const express = require("express");
const app = express();
const path = require("path");

// rendering static files
app.use(express.static("./public"));
const home = path.join(__dirname + "/public/index.html");
app.get("/", (req, res) => {
  res.send(home);
});

app.listen(5000, () => console.log(`Server is running on port 5000`));
