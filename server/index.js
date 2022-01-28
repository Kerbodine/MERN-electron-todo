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
  const newTask = new taskModel(task);
  await newTask.save();

  // res.json(task);
  res.sendStatus(200);
});

app.put("/toggleComplete", async (req, res) => {
  const taskId = req.id;

  await taskModel.findById(taskId, (err, newTask) => {
    if (err) {
      console.log(err);
    } else {
      newTask.complete = !newTask.complete;
      newTask.save();
      res.sendStatus(200);
    }
  });
});

app.delete("/deleteTask/:id", async (req, res) => {
  const taskId = req.params.id;

  await taskModel.findByIdAndRemove(taskId).exec();
  res.sendStatus(200);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
