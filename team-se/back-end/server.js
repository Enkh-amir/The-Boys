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
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import { error } from "console";

const port = 8000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("hi get tanii huselt");
});


app.post("/", (request, response) => {
  const { name, body } = request.body;
  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    readError && response.json({ succes: false, error: error });
  });

  let savedData = data ? JSON.parse(data) : [];

  const registeredUser = savedData.filter(
    (user) => user.name === name && user.password === password
  );
  registeredUser.length
    ? response.json({
        success: true,
        user: registeredUser[0],
      })
    : response.json({
        success: false,
      });
});

app.post("/sign-in", (request, response) => {
  const { name, email, password } = request.body;

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
      email: email,
      password: password,
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

app.listen(port, () => {
  console.log(`server ajillaa http://localhost:${port}`);
});
