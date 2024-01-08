import React, { createContext, useContext, useReducer } from 'react';

// Step 1: Create a context
const TodoContext = createContext();

// Step 2: Define reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };
    case 'REMOVE_TODO':
      return { todos: state.todos.filter((_, index) => index !== action.payload) };
    default:
      return state;
  }
};

// Step 3: Create a provider component
const TodoProvider = ({ children, initialState = [] }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  console.log("sfdsad", children)
  return (
    <TodoContext.Provider value={{ state, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// Step 4: Create a custom hook for using the context
const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

export { TodoProvider, useTodoContext };