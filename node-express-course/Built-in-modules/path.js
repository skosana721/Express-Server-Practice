const path = require("path");

// find the file path

const filePath = path.join("content", "test.txt");
console.log(filePath);
// finding the last portion of a path

const base = path.basename(filePath);
console.log(base);

// resolving path into absolutes path

const absolute = path.resolve(__dirname, "content", "test.txt");
console.log("absolute Path", absolute);
