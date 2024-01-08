import React from 'react';

import { useTodoContext } from "../helperComponents/useTodoContext";

const TodoList = () => {
    const { state } = useTodoContext();
  
    return (
      <div>
        <h1>Todo App</h1>
        <ul>
          {state.todos.map((todo, index) => (
            <li key={index}>
              {todo}{' '}
            </li>
          ))}
        </ul>
        <TodoInput />
      </div>
    );
  };
  
  const TodoInput = () => {
    const { addTodo } = useTodoContext();
    const [newTodo, setNewTodo] = React.useState('');
  
    const handleAddTodo = () => {
      if (newTodo.trim() !== '') {
        addTodo(newTodo.trim());
        setNewTodo('');
      }
    };
  
    return (
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    );
  };
  
  export default TodoList;