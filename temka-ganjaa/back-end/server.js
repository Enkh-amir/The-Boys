import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { error } from "console";

const port = 8000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.get("/", (request, response) => {
  response.send("hey tanii huselt irle");
});
app.post("/sign-up", (request, response) => {
  const { name, password } = request.body;
  fs.readFile("/data/user/.json", "utf-8", (readFile, data) => {
    if (readFile) {
      response.json({
        success: false,
        error: error,
      });
    }
    let saveData = data ? JSON.parse(data) : [];
    const registeredUser = saveData.filter(
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
app.post("/sign-up", (request, response) => {
  const { name, email, password } = request.body;
  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let saveData = data ? JSON.parse(data) : [];
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
    saveData.push(newUser);
    fs.writeFile("./data/user.json", JSON, stringify(saveData), (error) => {
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
  console.log(`server ajilah baina http://localhost:${port}`);
});
