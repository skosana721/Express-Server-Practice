const http = require("http");

const { readFileSync } = require("fs");

const homePage = readFileSync("./public/index.html");
const styles = readFileSync("./public/style.css");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url == "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(styles);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(
      `<h2>What a bad request you have just made so disappointed </h2>`
    );
    res.end();
  }
});

server.listen(4000, () => console.log(`Server is running on port 4000`));
