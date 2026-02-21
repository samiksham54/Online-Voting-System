const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const voterRoutes = require("./routes/voterRoutes");
const candidateRoutes = require("./routes/candidateRoutes");
const voteRoutes = require("./routes/voteRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/votingDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use("/voters", voterRoutes);
app.use("/candidates", candidateRoutes);
app.use("/votes", voteRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});