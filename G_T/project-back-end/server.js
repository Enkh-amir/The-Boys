import express from "express";
import bodyParser from "body-parser";

const port = 8111;
const server = express();
server.use(bodyParser.json());

server.get("/", (request, response) => {
  response.send("hello world");
});

server.post("/", (request, response) => {
  response.send(`ene tanii --- ${request.body} ---`);
});

server.listen(port, () => {
  console.log(`server ajilah http://localhost:${port}`);
});
