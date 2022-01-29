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

app.post("/createTask", async (req, res) => {
  const task = req.body;
  await taskModel.create(task);
  res.sendStatus(200);
});

app.put("/toggleComplete/:id", async (req, res) => {
  const taskId = req.params.id;
  try {
    await taskModel
      .findById(taskId, (err, updatedTask) => {
        updatedTask.completed = !updatedTask.completed;
        updatedTask.save();
        res.sendStatus(200);
      })
      .clone();
  } catch (err) {
    console.log(err);
  }
});

app.delete("/deleteTask/:id", async (req, res) => {
  const taskId = req.params.id;
  try {
    await taskModel.findByIdAndRemove(taskId).exec();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
