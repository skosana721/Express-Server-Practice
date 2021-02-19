const express = require("express");
const app = express();
const path = require("path");

const users = [
  { id: 1, name: "James", location: "Diepsloot" },
  { id: 2, name: "Francis", location: "Randburg" },
  { id: 3, name: "Junior", location: "Sandton" },
  { id: 4, name: "Arthur", location: "Fourways" },
];

//rest api
app.get("/api/users", (req, res) => {
  res.json(users);
});

// setting static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
