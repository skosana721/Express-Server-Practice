const express = require("express");
const app = express();

const PORT = 5000;
// app.all("*", (req, res) => {
//   res.send(`Hello , this is an express server`);
// });

// express routing
// The browser default is a get request
//CRUD app correspondence

// get - READ
// post - CREATE
// delete - DELETE
// put - UPDATE

app.get("/", (req, res) => {
  res.send(`<h1>This is the GET page!</h1>`);
});
app.post("/", (req, res) => {
  res.send(`<h1>This is the POST page!</h1>`);
});
app.delete("/", (req, res) => {
  res.send(`<h1>This is the DELETE page!</h1>`);
});
app.put("/", (req, res) => {
  res.send(`<h1>This is the PUT page!</h1>`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
