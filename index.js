const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);


app.get("/", (req, res) => {
  res.send("<h1>MM Card Application</h1>");
});

app.get("/easypay", (req, res) => {
  res.send("Easy Pay Call back url");
});

server.listen(8000, ()=> {
  console.log("Server running on port 8000");
});
