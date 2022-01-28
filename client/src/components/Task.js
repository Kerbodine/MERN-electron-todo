import { BiX } from "react-icons/bi";

export default function Task({
  id,
  title,
  completed,
  activeTask,
  setActiveTask,
  deleteTask,
}) {
  return (
    <div
      className={`w-full p-2 flex items-center rounded-md ${
        activeTask === id ? "bg-gray-50" : ""
      }`}
      onClick={() => {
        setActiveTask(id);
      }}
    >
      <button
        className={`w-6 h-6 rounded-md hover:border-[2px] ${
          completed
            ? "bg-blue-400 hover:border-blue-500"
            : "border-[2px] border-gray-300 hover:border-gray-400"
        }`}
      ></button>
      <p className="ml-2 text-gray-600">{title}</p>
      <button
        className="ml-auto w-6 h-6 rounded-md hover:bg-gray-100 flex items-center justify-center"
        onClick={() => {
          deleteTask(id);
        }}
      >
        <BiX className="ml-auto text-2xl text-gray-500" />
      </button>
    </div>
  );
}
