const express = require("express");
const app = express();

const PORT = 4000 || process.env.PORT;
app.all("*", (req, res) => {
  res.send(`<h2>Hello , this is an express server</h2>`);
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
