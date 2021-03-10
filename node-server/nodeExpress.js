const http = require("http");
// fs is file system
// it is used to access computer files
const fs = require("fs");

// the http module has createServer  method
// Which takes 1 argument
// argument is a callback
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const homePage = fs.readFileSync("index.html");
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (req.url == "/pexels.jpg") {
    const image = fs.readFileSync("pexels.jpg");
    res.writeHead(200, { "content-type": "image/jpg" });
    res.write(image);
    res.end();
  } else if (req.url === "/style.css") {
    const css = fs.readFileSync("style.css");
    res.writeHead(200, { "content-type": "text/css" });
    res.write(css);
    res.end();
  } else {
    const notFound = fs.readFileSync("404.html");
    res.writeHead(404, { "content-type": "text/html" });
    res.write(notFound);
    res.end();
  }
});

// createServer returns an object that has a method listen
// the listen method takes 1 argument
// the argument is for the port which the server will be listening to traffic on

server.listen(4000);
