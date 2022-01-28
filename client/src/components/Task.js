export default function Task({ title, completed }) {
  return (
    <div className="w-full p-2 flex items-center bg-gray-100 rounded-md">
      <button
        className={`w-6 h-6 rounded-md hover:border-[2px] ${
          completed
            ? "bg-blue-400 hover:border-blue-500"
            : "border-[2px] border-gray-300 hover:border-gray-400"
        }`}
      ></button>
    </div>
  );
}
