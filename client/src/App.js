import { useEffect, useState } from "react";
import Axios from "axios";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getTasks").then((res) => {
      setTasks(res.data);
    });
  }, []);

  const createTask = () => {
    const task = {
      taskName: "",
      dueDate: Date.now(),
      completed: false,
    };
    Axios.post("http://localhost:3001/createTask", task).then((res) => {
      setTasks([...tasks, task]);
    });
  };

  return (
    <div className="w-screen h-screen bg-white overflow-hidden">
      <div className="mx-auto h-full pt-[52px] pb-8 max-w-xl">
        <div className="flex flex-col gap-2">
          {tasks.map((task) => {
            return (
              <Task
                key={task._id}
                title={task.taskName}
                completed={task.completed}
              />
            );
          })}
        </div>
        <button
          className="mt-4 w-full text-sm text-gray-500 h-8 border-[2px] border-dashed rounded-md bg-transparent border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors grid place-items-center"
          onClick={createTask}
        >
          + Add Task
        </button>
      </div>
    </div>
  );
}

export default App;
