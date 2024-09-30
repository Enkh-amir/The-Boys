import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import fs from "fs";

const port = 8888;
const server = express();

server.use(bodyParser.json());
server.use(cors());

server.get("/", (request, response) => {
  response.send("Hello GET huselt irlee");
});
server.post("/sign-in", (request, response) => {
  const { name, password } = request.body;

  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    let savedData = data ? JSON.parse(data) : [];

    const registeredUser = savedData.filter(
      (user) => user.name === name && user.password === password
    );

    if (registeredUser.length > 0) {
      response.json({
        success: true,
        user: registeredUser[0],
      });
    } else {
      response.json({
        success: false,
      });
    }
  });
});
server.post("");

server.listen(port, () => {
  console.log(`Server ajillaj bn http://localhost:${port}`);
});
