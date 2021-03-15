const fs = require("fs");

// reading a file
const first = fs.readFileSync("./content/first.txt", "utf8");
const second = fs.readFileSync("./content/second.txt", "utf8");
console.log(first, second);
// creating a new file and append
fs.writeFileSync("./content/results.txt", "Here is the end results", {
  flag: "a",
});
