import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <PlusIcon className="h-6 w-6" />
      </button>
    </form>
  );
};

export default AddTodo;
