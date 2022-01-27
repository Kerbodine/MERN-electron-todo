const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  dueDate: {
    type: Date,
  },
});

const taskModel = mongoose.model("tasks", taskSchema);
module.exports = taskModel;
