const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;
app.use(express.static("public"));
app.all("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.all("*", (req, res) => {
  res.send(`<h1>Sorry page was not loaded</h1>`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
