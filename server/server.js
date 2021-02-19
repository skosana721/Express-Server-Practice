const express = require("express");
const app = express();

const PORT = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
