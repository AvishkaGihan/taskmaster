"use client";

import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <li className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="mr-4 h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
        />
        <span
          className={`text-lg ${
            completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-600 hover:text-red-800 focus:outline-none"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </li>
  );
};

export default TodoItem;
