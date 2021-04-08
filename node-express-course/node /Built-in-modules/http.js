const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the server website");
  }
  if (req.url === "/about") {
    res.end("This is the About page");
  }

  res.end(`Cant seem to find the page you looking for`);
});

server.listen(5000);
