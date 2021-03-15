const fs = require("fs");

// reading a file
fs.readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  fs.readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
  });
  fs.writeFile(
    "./content/result-async.txt",
    "Here the final results for fs async",
    (error, result) => {
      if (error) {
        console.log(error);
        return;
      }
      const newFile = result;
    }
  );
});
