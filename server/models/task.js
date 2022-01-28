const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
  },
  dueDate: {
    type: Date,
  },
  completed: {
    type: Boolean,
  },
});

const taskModel = mongoose.model("tasks", taskSchema);
module.exports = taskModel;
