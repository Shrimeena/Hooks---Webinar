import React, { useState } from 'react';

// Custom hook for managing todo state
export default function useTodos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return { todos, addTodo, removeTodo };
};
