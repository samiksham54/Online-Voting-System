const express = require("express");
const Voter = require("../models/voterModel");

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const voter = new Voter(req.body);
  await voter.save();
  res.json(voter);
});

// READ
router.get("/", async (req, res) => {
  const voters = await Voter.find();
  res.json(voters);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Voter.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Voter.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;