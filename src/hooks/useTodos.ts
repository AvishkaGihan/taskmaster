"use client";

import { useState, useEffect } from "react";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isLoading]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now().toString(), text, completed: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return { todos, isLoading, addTodo, toggleTodo, deleteTodo };
};
