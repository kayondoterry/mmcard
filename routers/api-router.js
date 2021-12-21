const express = require("express");
const api = express.Router();
const cors = require("cors");

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

api.post("/easypay", (req, res) => {
  console.log("Callback from easy pay, Terry: ", req.body);
  const easyPayCallback = new EasyPayCallback({
    data: JSON.stringify(req.body),
  });
  easyPayCallback.save();
  res.json({ data: "callback url for easy pay" });
});

module.exports = api;
