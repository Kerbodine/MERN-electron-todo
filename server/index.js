const express = require("express");
const app = express();
const mongoose = require("mongoose");
const taskModel = require("./models/task");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

const cors = require("cors");
app.use(cors());

mongoose.connect(process.env.REACT_APP_MONGODB_URI);

app.get("/getTasks", (req, res) => {
  taskModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
