const express = require("express");
const app = express();

const PORT = 3000;

// app comes with a method called use
// the use method takes one argument
// the argument is the middleware that you want to run
app.use(express.static("public"));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
