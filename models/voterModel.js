const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

module.exports = mongoose.model("Voter", voterSchema);