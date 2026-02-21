const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  voterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Voter"
  },
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate"
  }
});

module.exports = mongoose.model("Vote", voteSchema);