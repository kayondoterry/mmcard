const express = require("express");
const api = express.Router();
const cors = require("cors");
const mongoose = require("mongoose");

const EasyPayCallback = require("../models/EasyPayCallback");

api.use(
  express.urlencoded({
    extended: true,
  })
);
api.use(express.json());
api.use(
  cors({
    origin: "*",
  })
);

api.post("/send", (req, res) => {});

api.get("/easypay", (_, res) => {
  res.json({ data: "callback url for easy pay" });
});

api.post("/easypay", async (req, res) => {
  console.log("Callback from easy pay, Terry: ", req.body);
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const easyPayCallback = new EasyPayCallback({
    data: JSON.stringify(req.body),
  });
  await EasyPayCallback.bulkSave([easyPayCallback]);
  res.json({ data: "callback url for easy pay" });
});

module.exports = api;
