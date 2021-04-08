const { readFile, writeFile } = require("fs").promises;

const simpleAsync = async () => {
  try {
    const first = await readFile(
      "../Built-in-modules/content/first.txt",
      "utf8"
    );
    const second = await readFile(
      "../Built-in-modules/content/second.txt",
      "utf8"
    );
    await writeFile(
      "../Built-in-modules/content/final-example",
      "This is just some simplest way to do an async ",
      { flag: "a" }
    );
    console.log(`${first} , ${second}`);
  } catch (error) {
    console.log(error);
  }
};
simpleAsync();
