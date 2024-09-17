"use client";

import React from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { useTodos } from "../hooks/useTodos";

const TodoList: React.FC = () => {
  const { todos, isLoading, addTodo, toggleTodo, deleteTodo } = useTodos();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        TaskMaster
      </h1>
      <AddTodo onAdd={addTodo} />
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">
          No tasks yet. Add one above!
        </p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
