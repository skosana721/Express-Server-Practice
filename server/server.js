const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/api/users");
const logger = require("./middleware/logger");

//Init logger
app.use(logger);

//Body Parser Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// User API routes
app.use(router);
// setting static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
