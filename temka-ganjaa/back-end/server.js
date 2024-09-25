import bodyParser from "body-parser";

import express from "express";
const port = 8000;
const app = express();
app.use(bodyParser.json());
app.get("/", (request, response) => {
  response.send("hey tanii huselt irle");
});
app.post("/", (request, response) => {
  response.send(`hey tanii huselt irlsen`);
});
app.listen(port, () => {
  console.log(`server ajilah baina http://localhost:${port}`);
});
