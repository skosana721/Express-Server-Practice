const { rejects } = require("assert");
const { readFile } = require("fs");
const { get } = require("http");
const { resolve } = require("path");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText("../Built-in-modules/content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
