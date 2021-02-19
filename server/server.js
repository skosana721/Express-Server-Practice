const express = require("express");
const app = express();
const path = require("path");

const logger = require("./middleware/logger");

//Init logger
app.use(logger);

// setting static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
