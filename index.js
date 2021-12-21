if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const path = require("path");
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");

const api = require("./routers/api-router");

const app = express();
const server = http.createServer(app);

// if (process.env.NODE_ENV === "development") {
//   app.use(express.static(path.join(__dirname, "public")));
// }

async function startServer() {
  await mongoose.connect(process.env.MONGODB_URI);
  app.use(express.static(path.join(__dirname, "public")));
  
  app.use("/api", api);

  app.get("/*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });

  server.listen(8000, () => {
    console.log("Server running on port 8000");
  });
}

startServer().catch((err) => {
  console.log("Top Level Error, Terry: ", err);
});
