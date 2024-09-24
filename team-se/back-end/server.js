// const http = require("http");
// const port = 8000;
// const server = http.createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-Type", "text/plain");
//   switch (request.method) {
//     case "GET":
//       return response.end("get huselt irlee");
//     case "POST":
//       return response.end("post huselt irlee");
//     case "DELETE":
//       return response.end("delete huselt irlee");
//     case "PATCH":
//       return response.end("patch huselt irlee");
//     default:
//       return response.end("unvalid");
//   }
// });
// server.listen(port, () => {
//   console.log(`server ajillaa http://localhost:${port}`);
// });

import express from "express";
import bodyParser from "body-parser";
const port = 9999;
const app = express();
app.use(bodyParser.json());
app.get("/", (request, response) => {
  response.send("hi get tanii huselt");
});

app.post("/", (request, response) => {
  console.log(request.body);
  response.send(`hi post tanii huselt`);
});

app.listen(port, () => {
  console.log(`server ajillaa http://localhost:${port}`);
});
