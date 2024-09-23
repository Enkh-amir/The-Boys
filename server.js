const http = require("http");

const port = 8000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-type", "text/plain");
  response.end("Hello World\n");
});

server.listen(port, () => {
  console.log("server ajillaa");
});
