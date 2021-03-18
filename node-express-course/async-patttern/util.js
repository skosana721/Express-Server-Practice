const { writeFile, readFile } = require("fs");
const util = require("util");
const readPromise = util.promisify(readFile);
const writePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readPromise(
      "../Built-in-modules/content/first.txt",
      "utf8"
    );
    const second = await readPromise(
      "../Built-in-modules/content/first.txt",
      "utf8"
    );
    console.log(`${first} , ${second}`);
  } catch (error) {
    console.log(error);
  }
};
start();
