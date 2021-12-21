const mongoose = require("mongoose");

const easyPayCallbackSchema = new mongoose.Schema({
  data: String,
});

const EasyPayCallback = mongoose.model("EasyPayCallback", easyPayCallbackSchema);
module.exports = EasyPayCallback;
