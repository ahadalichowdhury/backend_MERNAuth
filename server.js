const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/authRoute");
const privateRouter = require("./routes/privateRoute");

const PORT = process.env.PORT || 8000;

let URL = process.env.MONGO_URL;

mongoose.connect(URL, (err, data) => {
  if (err) {
    console.log("somthing is wrong with connect db");
  } else {
    console.log("db is connected");
  }
});

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/private", privateRouter);

app.listen(PORT, function () {
  console.log("server is listening on port");
});
