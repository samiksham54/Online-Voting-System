const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: String,
  party: String
});

module.exports = mongoose.model("Candidate", candidateSchema);