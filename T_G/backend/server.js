import bodyParser from "body-parser";
import express from "express";
import { error } from "console";
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
  const { name, price } = request.body;

  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }
  });
});
server.post("/sign-up", (request, response) => {
  const { name, price } = request.body;

  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = data ? JSON.parse(data) : [];

    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    console.log(data);

    const newUser = {
      id: Date.now().toString(),
      name: name,
      price: price,
    };
    savedData.push(newUser);

    fs.writeFile("./data/user.json", JSON.stringify(savedData), (error) => {
      if (error) {
        response.json({
          success: false,
          error: error,
        });
      } else {
        response.json({
          success: true,
          user: newUser,
        });
      }
    });
  });
});

server.listen(port, () => {
  console.log(`Server ajillaj bn http://localhost:${port}`);
});
