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

  return (
    <div className="w-screen h-screen bg-white overflow-hidden">
      <div className="mx-auto h-full pt-[52px] pb-8 max-w-xl">
        {tasks.map((task) => {
          return <Task title={task.taskName} completed={task.completed} />;
        })}
        <button
          className="mt-4 w-full text-sm text-gray-500 h-8 border-[2px] border-dashed rounded-md bg-transparent border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors grid place-items-center"
          onClick={null}
        >
          + Add Task
        </button>
      </div>
    </div>
  );
}

export default App;
